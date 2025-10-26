import type { Book } from "../../types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Edit, ShoppingBag, Trash2Icon } from "lucide-react";
import ActionButton from "./action-button";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "../../redux/features/books/api.books";
import { toast } from "sonner";

interface BookTableProps {
  books: Book[];
}

const BooksTable = ({ books }: BookTableProps) => {
  const { refetch } = useGetBooksQuery();
  const navigate = useNavigate();
  const [deleteBook, { isError: failedDelete }] = useDeleteBookMutation();

  const handleEdit = (id: string) => {
    navigate({
      to: `/edit-book/${id}`,
      params: { bookId: id },
    });
  };

  const handleBorrow = (id: string) => {
    navigate({
      to: `/borrow/$bookId`,
      params: { bookId: id },
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);

      if (failedDelete) {
        toast.error("Failed to delete the book. Please try again.");
        return;
      }

      toast.success("Book deleted successfully!");
      refetch();
    } catch (error) {
      toast.error("Something went wrong while deleting. Please try again");
      console.log({ error });
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Available</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book, idx) => (
              <TableRow key={`${book.isbn}_${book._id}`}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell className="hover:underline">
                  <Link to="/book/$bookId" params={{ bookId: book._id }}>
                    {book.title}
                  </Link>
                </TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>
                  {book.description.length > 50
                    ? `${book.description.slice(0, 50)} ...`
                    : book.description}
                </TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>{book.available ? "Yes" : "No"}</TableCell>
                <TableCell className="flex items-end gap-2">
                  <ActionButton
                    icon={<ShoppingBag />}
                    title="Borrow Book"
                    onClick={() => handleBorrow(book._id)}
                  />
                  <ActionButton
                    icon={<Edit />}
                    title="Edit Book"
                    onClick={() => handleEdit(book._id)}
                  />
                  <ActionButton
                    icon={<Trash2Icon />}
                    title="Delete Book"
                    isDeleteButton
                    onClick={() => handleDelete(book._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BooksTable;
