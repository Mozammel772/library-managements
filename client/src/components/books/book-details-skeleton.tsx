import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Skeleton } from "../../components/ui/skeleton";
import { Separator } from "../../components/ui/separator";

export default function BookDetailsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-start gap-6">
            {/* Book Cover Skeleton */}
            <div className="flex-shrink-0">
              <Skeleton className="w-48 h-64 rounded-lg" />
            </div>

            {/* Book Info Skeleton */}
            <div className="flex-1 space-y-4">
              <div>
                {/* Title Skeleton */}
                <Skeleton className="h-9 w-full mb-2" />
                <Skeleton className="h-9 w-3/4 mb-3" />

                {/* Author Skeleton */}
                <div className="flex items-center gap-2 mb-3">
                  <Skeleton className="h-5 w-5 rounded" />
                  <Skeleton className="h-6 w-48" />
                </div>

                {/* Badge and Status Skeleton */}
                <div className="flex items-center gap-3">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                </div>
              </div>

              {/* ISBN and Copies Skeleton */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Separator />

          {/* Description Skeleton */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          <Separator />

          {/* Metadata Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="ml-7">
                <Skeleton className="h-4 w-36" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-5 w-28" />
              </div>
              <div className="ml-7">
                <Skeleton className="h-4 w-36" />
              </div>
            </div>
          </div>

          {/* Book ID Skeleton */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-3 rounded" />
              <Skeleton className="h-3 w-48" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
