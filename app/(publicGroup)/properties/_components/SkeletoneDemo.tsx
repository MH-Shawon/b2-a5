import { Skeleton } from "@/components/ui/skeleton";

export default function PropertiesSkeleton() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <Skeleton className="h-4 w-40" />

            <Skeleton className="h-10 w-80 max-w-full" />

            <Skeleton className="h-5 w-full max-w-xl" />
            <Skeleton className="h-5 w-4/5 max-w-lg" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-10">
          
          {/* Filters */}
          <div className="md:col-span-3">
            <div className="rounded-xl border bg-card p-5">
              <div className="space-y-5">
                {/* Filter title */}
                <div className="space-y-2">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-4 w-48" />
                </div>

                {/* Search */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>

                {/* Filter */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>

                {/* Filter */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>

                {/* Button */}
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            </div>
          </div>

          {/* Property Records */}
          <div className="md:col-span-7">
            <div className="space-y-5">
              {/* Property Card */}
              <PropertyCardSkeleton />

              {/* Property Card */}
              <PropertyCardSkeleton />

              {/* Property Card */}
              <PropertyCardSkeleton />

              {/* Property Card */}
              <PropertyCardSkeleton />
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <Skeleton className="h-9 w-9 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-md" />
              <Skeleton className="h-9 w-9 rounded-md" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

function PropertyCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <Skeleton className="h-52 w-full rounded-none sm:h-auto sm:w-64" />

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div className="space-y-3">
            {/* Title */}
            <Skeleton className="h-6 w-3/4" />

            {/* Location */}
            <Skeleton className="h-4 w-1/2" />

            {/* Description */}
            <div className="space-y-2 pt-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>

            {/* Property details */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Skeleton className="h-7 w-20 rounded-md" />
              <Skeleton className="h-7 w-20 rounded-md" />
              <Skeleton className="h-7 w-20 rounded-md" />
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-5 flex items-center justify-between gap-4">
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-9 w-24 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}