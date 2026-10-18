
"use client"


import { Skeleton } from "@/components/ui/skeleton";

export default function LandlordDashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="rounded-xl border bg-card p-6">
        <div className="space-y-3">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96 max-w-full" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-16" />
              </div>

              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>

            <Skeleton className="mt-4 h-3 w-28" />
          </div>
        ))}
      </div>

      {/* Performance + Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Property Performance */}
        <div className="rounded-xl border bg-card p-6 lg:col-span-2">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-72 max-w-full" />
          </div>

          {/* Chart / Performance area */}
          <div className="mt-6 space-y-4">
            <Skeleton className="h-52 w-full rounded-lg" />

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border bg-card p-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-4 w-48" />
          </div>

          <div className="mt-6 space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <Skeleton className="h-9 w-9 rounded-lg" />

                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-36" />
                </div>

                <Skeleton className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}