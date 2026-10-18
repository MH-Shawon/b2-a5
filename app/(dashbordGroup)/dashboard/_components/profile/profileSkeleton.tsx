import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="rounded-xl border bg-card p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <Skeleton className="h-20 w-20 rounded-full" />

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>

            <Skeleton className="mt-2 h-4 w-48" />
            <Skeleton className="mt-3 h-4 w-40" />
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Personal Information */}
        <div className="rounded-xl border bg-card">
          <div className="border-b p-5">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-6 w-44" />
            </div>
          </div>

          <div className="space-y-5 p-5">
            {/* Name */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-lg" />

              <div className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>

            <Separator />

            {/* Email */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-lg" />

              <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-4 w-44" />
              </div>
            </div>

            <Separator />

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-lg" />

              <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="rounded-xl border bg-card">
          <div className="border-b p-5">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-6 w-40" />
            </div>
          </div>

          <div className="space-y-5 p-5">
            {/* Role */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-lg" />

              <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>

            <Separator />

            {/* Status */}
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-4 w-40" />
              </div>

              <Skeleton className="h-6 w-16 rounded-full" />
            </div>

            <Separator />

            {/* Created */}
            <div className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-4 w-36" />
            </div>

            <Separator />

            {/* Updated */}
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-4 w-36" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}