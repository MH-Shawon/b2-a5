import { AdminStatsProps } from "@/lib/AdminType";
import {
    Building2,
    CalendarDays,
    Clock1,
    Users,
} from "lucide-react";






export default function AdminStats({  activeCount,totalProperties, totalUsers, totalRequests }: AdminStatsProps) {

    const stats = [
        {
            title: "Total Users",
            value: totalUsers,
            description: "Tenants & landlords",
            icon: Users,
        },
        {
            title: "Total Properties",
            value: totalProperties,
            description: "All listed properties",
            icon: Building2,
        },
        {
            title: "Rental Requests",
            value: totalRequests,
            description: "All rental requests",
            icon: CalendarDays,
        },
        {
            title: "Active Requests",
            value: activeCount,
            description: "All rental requests",
            icon: Clock1,
        }
    ];





    return (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </p>

                                <p className="mt-2 text-2xl font-bold">
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
