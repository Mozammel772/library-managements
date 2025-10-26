import { toast } from "sonner";
import {
  useAddBorrowMutation,
  useGetBorrowQuery,
} from "../../redux/features/borrow/api.borrow";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

interface BorrowFormProps {
  availableCopies: number;
  bookId: string;
}

const BorrowForm = ({ availableCopies, bookId }: BorrowFormProps) => {
  const [addBorrow, { isError, error, isLoading }] = useAddBorrowMutation();
  const { refetch } = useGetBorrowQuery();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const borrowData = {
      book: bookId,
      quantity: parseInt((formData.get("quantity") ?? "0").toString()) as number,
      dueDate: formData.get("due-date") as string,
    };
    try {
      await addBorrow(borrowData);

      if (isError) {
        toast.error("Failed to submit the data.");
        console.log("Failed to add borrow", error);
      }

      toast.success("Book borrowed successfully.");
      refetch();
      navigate({ to: "/borrow-summary" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log("SOMETHING WENT WRONG WHILE ADDING BORROW");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Quantity:</label>
        <Input
          type="number"
          name="quantity"
          min={1}
          required
          max={availableCopies}
          disabled={availableCopies === 0}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Due Date:</label>
        <Input
          type="date"
          name="due-date"
          required
          disabled={availableCopies === 0}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      {availableCopies === 0 && (
        <div className="text-red-600 font-semibold">
          This book is currently unavailable.
        </div>
      )}
      <Button
        type="submit"
        disabled={availableCopies === 0 || isLoading}
        className={`w-full cursor-pointer transition ${
          availableCopies === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <>
            <Loader className="animate-spin" />
            <span>Submitting</span>
          </>
        ) : (
          "Borrow"
        )}
      </Button>
    </form>
  );
};

export default BorrowForm;
