import { createFileRoute, Link } from "@tanstack/react-router";
import { useGetBooksQuery } from "../redux/features/books/api.books";
import BooksTable from "../components/books/books-table";
import BooksTableSkeleton from "../components/books/books-table-skeleton";
import { Button } from "../components/ui/button";
import NotFound from "../components/not-found";

export const Route = createFileRoute("/books")({
  component: Books,
});

function Books() {
  const { isLoading, isError, isSuccess, data } = useGetBooksQuery();
  return (
    <>
      {isLoading && <BooksTableSkeleton />}
      {isError && <NotFound url="/" btnLabel="Go to Home Page" />}
      {isSuccess && (
        <div>
          <h1 className="mb-4 text-2xl font-bold">Books</h1>
          <div className="mb-6 flex justify-between items-center">
            <p className="mb-4 text-gray-600">
              Total <span className="text-lg font-black">{data.data.length}</span> books
              found.
            </p>
            <Link to="/create-book">
              <Button className="cursor-pointer">Add Book</Button>
            </Link>
          </div>
          <BooksTable books={data.data} />
        </div>
      )}
    </>
  );
}
