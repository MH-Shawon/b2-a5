import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboardSkeleton() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-4 w-72" />
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-xl border bg-card p-5 space-y-4"
                    >
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-9 w-9 rounded-lg" />
                        </div>

                        <Skeleton className="h-8 w-20" />
                        <Skeleton className="h-3 w-32" />
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Recent Properties */}
                <div className="lg:col-span-2 rounded-xl border bg-card p-5">
                    <div className="mb-5 flex items-center justify-between">
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-40" />
                            <Skeleton className="h-3 w-56" />
                        </div>

                        <Skeleton className="h-9 w-20 rounded-md" />
                    </div>

                    <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between gap-4"
                            >
                                <div className="flex items-center gap-3">
                                    <Skeleton className="h-11 w-11 rounded-lg" />

                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-36" />
                                        <Skeleton className="h-3 w-24" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-3 w-16" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Users */}
                <div className="rounded-xl border bg-card p-5">
                    <div className="mb-5 space-y-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-3 w-48" />
                    </div>

                    <div className="space-y-5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3"
                            >
                                <Skeleton className="h-10 w-10 rounded-full" />

                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-4 w-28" />
                                    <Skeleton className="h-3 w-36" />
                                </div>

                                <Skeleton className="h-6 w-16 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Rental Requests */}
            <div className="rounded-xl border bg-card p-5">
                <div className="mb-5 flex items-center justify-between">
                    <div className="space-y-2">
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-3 w-60" />
                    </div>

                    <Skeleton className="h-9 w-20 rounded-md" />
                </div>


                <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="grid items-center gap-4 sm:grid-cols-4"
                        >
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-6 w-20 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}