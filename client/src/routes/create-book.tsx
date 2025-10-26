import { createFileRoute } from "@tanstack/react-router";
import AddNewBookForm from "../components/books/add-book-form";

export const Route = createFileRoute("/create-book")({
  component: CreateBookPage,
});

function CreateBookPage() {
  return (
    <div className="">
      <AddNewBookForm />
    </div>
  );
}
