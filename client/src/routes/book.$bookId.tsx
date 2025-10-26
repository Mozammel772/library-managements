import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import {
  Book,
  Calendar,
  Hash,
  User,
  FileText,
  Package,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useGetBookByIdQuery } from "../redux/features/books/api.books";
import NotFound from "../components/not-found";
import BookDetailsSkeleton from "../components/books/book-details-skeleton";

export const Route = createFileRoute("/book/$bookId")({
  component: BookDetails,
});

function BookDetails() {
  const { bookId } = Route.useParams();
  const { data, isLoading, isError, isSuccess } = useGetBookByIdQuery(bookId);

  const bookData = data?.data;

  const formatDate = (dateString: Date | undefined) => {
    return new Date(dateString!).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      {isLoading && <BookDetailsSkeleton />}
      {isError && <NotFound btnLabel="Go to Book List" url="/books" />}
      {isSuccess && (
        <div className="max-w-4xl mx-auto p-6">
          <Card className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Book Cover */}
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="https://ui.shadcn.com/placeholder.svg?height=256&width=192"
                      alt={`Cover of ${bookData?.title}`}
                      // width={192}
                      // height={256}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Book Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
                      {bookData?.title}
                    </h1>
                    <div className="flex items-center gap-2 text-lg text-gray-600 mb-3">
                      <User className="h-5 w-5" />
                      <span>by {bookData?.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="text-sm font-medium">
                        {bookData?.genre.replace("_", " ")}
                      </Badge>
                      <div className="flex items-center gap-2">
                        {bookData?.available ? (
                          <>
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span className="text-green-600 font-medium">Available</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-5 w-5 text-red-600" />
                            <span className="text-red-600 font-medium">
                              Not Available
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Hash className="h-4 w-4" />
                      <span className="text-sm">ISBN: {bookData?.isbn}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Package className="h-4 w-4" />
                      <span className="text-sm">{bookData?.copies} copies available</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <Separator />

              {/* Description */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {bookData?.description}
                </p>
              </div>

              <Separator />

              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <h4 className="font-medium text-gray-900">Added to Library</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-7">
                    {formatDate(bookData?.createdAt)}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <h4 className="font-medium text-gray-900">Last Updated</h4>
                  </div>
                  <p className="text-gray-600 text-sm ml-7">
                    {formatDate(bookData?.updatedAt)}
                  </p>
                </div>
              </div>

              {/* Book ID */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Book className="h-3 w-3" />
                  <span>Book ID: {bookData?._id}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
