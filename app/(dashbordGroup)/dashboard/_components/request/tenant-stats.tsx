import { RequestStatsProps } from "@/lib/rentalsTypes";
import {
    CalendarDays,
    CheckCircle2,
    Clock3,
    Home,
} from "lucide-react";



export default function TenantStats({ rentals }: RequestStatsProps) {

    const totalRequests = rentals.length;

    const pendingRequests = rentals.filter((rental) => rental.status === "PENDING").length;

    const approvedRequests = rentals.filter((rental) => rental.status === "APPROVED").length;

    const completedRentals = rentals.filter((rental) => rental.status === "COMPLETED").length;


    const stats = [
        {
            title: "Total Requests",
            value: totalRequests,
            description: "All rental requests",
            icon: CalendarDays,
        },
        {
            title: "Pending Requests",
            value: pendingRequests,
            description: "Waiting for approval",
            icon: Clock3,
        },
        {
            title: "Approved Requests",
            value: approvedRequests,
            description: "Approved by landlord",
            icon: CheckCircle2,
        },
        {
            title: "Completed Rentals",
            value: completedRentals,
            description: "Completed rentals",
            icon: Home,
        },
    ];



    return (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="
                            rounded-2xl border bg-card p-5
                            shadow-sm transition
                            hover:-translate-y-0.5
                            hover:shadow-md
                        "
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </p>

                                <p className="mt-2 text-2xl font-bold text-foreground">
                                    {stat.value}
                                </p>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon className="size-5" />
                            </div>
                        </div>

                        <p className="mt-3 text-xs text-muted-foreground">
                            {stat.description}
                        </p>
                    </div>
                );
            })}
        </section>
    );
}