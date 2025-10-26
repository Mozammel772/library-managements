import type { BorrowedBookEntry } from "../../types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface BorrowTableProps {
  borrowSummary: BorrowedBookEntry[];
}

const BorrowTable = ({ borrowSummary }: BorrowTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Total Borrowed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {borrowSummary.map((summary, idx) => (
            <TableRow key={`${summary?.book.isbn}_${summary._id}`}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{summary.book.title}</TableCell>
              <TableCell>{summary.book.isbn}</TableCell>
              <TableCell>{summary.totalQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BorrowTable;
