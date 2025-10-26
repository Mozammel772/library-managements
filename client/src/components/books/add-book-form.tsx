import { Loader } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import {
  useAddBookMutation,
  useGetBooksQuery,
} from "../../redux/features/books/api.books";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

const AddNewBookForm = () => {
  const navigate = useNavigate();

  const [
    addNewBook,
    { isLoading: isAdding, isError: isBookAddError, error: addingError },
  ] = useAddBookMutation();
  const { refetch } = useGetBooksQuery();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const bookData = {
        title: formData.get("title") as string,
        author: formData.get("author") as string,
        isbn: formData.get("isbn") as string,
        description: formData.get("description") as string,
        genre: formData.get("genre") as any,
        copies: parseInt((formData.get("copies") ?? "0").toString()) as number,
      };

      await addNewBook(bookData);
      if (isBookAddError) {
        toast.error("Failed to add a new book. Please try again.");
        console.log({ addingError });
      }
      toast.success("Book added successfully!");
      console.log("Book add successfully!");
      refetch();
      navigate({ to: "/books" });
    } catch (error) {
      console.error("Error submitting book data:", error);
      toast.error("Something went wrong. Please try again.");
      return;
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-white rounded shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2">
          Title
        </label>
        <Input
          type="text"
          name="title"
          id="title"
          className="p-2 border rounded"
          placeholder="Enter book title"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="author" className="mb-2">
          Author
        </label>
        <Input
          type="text"
          name="author"
          id="author"
          className="p-2 border rounded"
          placeholder="Enter author name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="isbn" className="mb-2">
          ISBN
        </label>
        <Input
          type="text"
          name="isbn"
          id="isbn"
          className="p-2 border rounded"
          placeholder="Enter ISBN number"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-2">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="p-2 border rounded"
          placeholder="Enter book description"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10">
        <div className="flex flex-col w-full">
          <label htmlFor="copies" className="mb-2">
            Copies
          </label>
          <Input
            type="number"
            name="copies"
            id="copies"
            className="p-2 border rounded"
            placeholder="How many copies are available?"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="genre" className="mb-2">
            Genre
          </label>
          <Select name="genre">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Genre</SelectLabel>
                <SelectItem value="FICTION">Fiction</SelectItem>
                <SelectItem value="NON_FICTION">Non Fiction</SelectItem>
                <SelectItem value="SCIENCE">Science</SelectItem>
                <SelectItem value="HISTORY">History</SelectItem>
                <SelectItem value="BIOGRAPHY">Biography</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button
        disabled={isAdding}
        type="submit"
        className="inline cursor-pointer ms-auto px-10 mt-5"
      >
        {isAdding ? (
          <span className="flex items-center">
            <Loader className="mr-2 animate-spin" />
            <span>Submitting...</span>
          </span>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default AddNewBookForm;
