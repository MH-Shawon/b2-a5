import { RentalRequestStatsProps } from "@/lib/AdminType";
import {
    CalendarCheck,
    CheckCircle2,
    Clock3,
    XCircle,
} from "lucide-react";





export default function RentalOverview({
    pendingCount,
    approvedCount,
    rejectedCount,
    completedCount,
}: RentalRequestStatsProps) {
    const statuses = [
        {
            title: "Pending",
            value: pendingCount,
            icon: Clock3,
        },
        {
            title: "Approved",
            value: approvedCount,
            icon: CheckCircle2,
        },
        {
            title: "Rejected",
            value: rejectedCount,
            icon: XCircle,
        },
        {
            title: "Completed",
            value: completedCount,
            icon: CalendarCheck,
        },
    ];

    return (
        <section className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
            <div className="mb-6">
                <h2 className="font-semibold">
                    Rental Overview
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Overview of rental requests across the platform.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {statuses.map((status) => {
                    const Icon = status.icon;

                    return (
                        <div
                            key={status.title}
                            className="rounded-xl border bg-muted/30 p-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex size-9 items-center justify-center rounded-lg bg-background">
                                    <Icon className="size-4 text-muted-foreground" />
                                </div>

                                <span className="text-xl font-bold">
                                    {status.value}
                                </span>
                            </div>

                            <p className="mt-3 text-sm font-medium">
                                {status.title}
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Rental requests
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}