import { createFileRoute } from "@tanstack/react-router";
import EditBookForm from "../components/books/edit-book-form";
import { useGetBookByIdQuery } from "../redux/features/books/api.books";
import { Loader } from "lucide-react";

export const Route = createFileRoute("/edit-book/$bookId")({
  component: EditBook,
});

function EditBook() {
  const { bookId } = Route.useParams();
  const { data, isLoading } = useGetBookByIdQuery(bookId);
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Update Book</h1>
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <Loader className="animate-spin" />
        </div>
      ) : (
        <EditBookForm book={data?.data} />
      )}
    </div>
  );
}

export default EditBook;
