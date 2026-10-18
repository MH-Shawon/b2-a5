import Link from "next/link";
import {
    ArrowUpRight,
    Building2,
    CalendarDays,
    Users,
} from "lucide-react";

const actions = [
    {
        title: "Manage Users",
        description: "View and manage platform users",
        href: "/admin-dashboard/users",
        icon: Users,
    },
    {
        title: "Manage Properties",
        description: "Review all property listings",
        href: "/admin-dashboard/properties",
        icon: Building2,
    },
    {
        title: "Manage Rentals",
        description: "Monitor rental requests",
        href: "/admin-dashboard/rental-requests",
        icon: CalendarDays,
    },
];

export default function QuickActions() {
    return (
        <section>
            <div className="mb-4">
                <h2 className="font-semibold">
                    Quick Actions
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Quickly access important admin areas.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <Link
                            key={action.title}
                            href={action.href}
                            className="group rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon className="size-5" />
                                </div>

                                <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-primary" />
                            </div>

                            <h3 className="mt-4 font-semibold">
                                {action.title}
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                {action.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}