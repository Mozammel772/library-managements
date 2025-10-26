import { createFileRoute } from "@tanstack/react-router";
import { useGetBorrowQuery } from "../redux/features/borrow/api.borrow";
import NotFound from "../components/not-found";
import BorrowSummarySkeleton from "../components/borrow/borrow-summary-skeleton";
import BorrowTable from "../components/borrow/borrow-table";

export const Route = createFileRoute("/borrow-summary")({
  component: BorrowSummary,
});

function BorrowSummary() {
  const { data, isError, isLoading } = useGetBorrowQuery();

  return (
    <>
      {isLoading && <BorrowSummarySkeleton />}
      {isError && <NotFound url="/" btnLabel="Go to Home Page" />}
      {data?.success && (
        <div>
          <div>
            <h1 className="mb-4 text-2xl font-bold">Borrow Summary Report</h1>
            <p className="mb-4 text-gray-600">
              Total <span className="text-lg font-black">{data.data.length}</span> borrow
              report found.
            </p>
          </div>
          <BorrowTable borrowSummary={data.data} />
        </div>
      )}
    </>
  );
}
