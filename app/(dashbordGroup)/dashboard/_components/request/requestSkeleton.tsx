import { Skeleton } from "@/components/ui/skeleton";

export default function RequestSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-8 w-32" />
        <Skeleton className="mt-2 h-4 w-64" />
      </div>

      <div className="rounded-xl border">
        <div className="border-b p-5">
          <Skeleton className="h-6 w-40" />
        </div>

        <div className="divide-y">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5"
            >
              <Skeleton className="h-14 w-14 rounded-lg" />

              <div className="flex-1">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="mt-2 h-3 w-28" />
              </div>

              <Skeleton className="h-6 w-20 rounded-full" />

              <Skeleton className="h-9 w-20 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}