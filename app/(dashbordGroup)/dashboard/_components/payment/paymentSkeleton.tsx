import { Skeleton } from "@/components/ui/skeleton";

export default function PaymentSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-8 w-32" />
        <Skeleton className="mt-2 h-4 w-56" />
      </div>

      {/* Payment cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border p-5">
            <div className="flex justify-between">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>

            <Skeleton className="mt-5 h-8 w-24" />
            <Skeleton className="mt-3 h-4 w-36" />
            <Skeleton className="mt-2 h-4 w-28" />
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-xl border">
        <div className="p-5">
          <Skeleton className="h-6 w-36" />
        </div>

        <div className="space-y-4 border-t p-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-4 w-32 flex-1" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}