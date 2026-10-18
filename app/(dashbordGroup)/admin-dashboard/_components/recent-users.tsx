import Link from "next/link";
import {
    ArrowUpRight,
    UserRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { UserDataProps } from "@/lib/AdminType";

const users = [
    {
        id: "1",
        name: "Rahim Ahmed",
        email: "rahim@example.com",
        role: "TENANT",
        status: "Active",
    },
    {
        id: "2",
        name: "Sadia Islam",
        email: "sadia@example.com",
        role: "LANDLORD",
        status: "Active",
    },
    {
        id: "3",
        name: "Hasan Mahmud",
        email: "hasan@example.com",
        role: "TENANT",
        status: "Banned",
    },
];

export default function RecentUsers({ recentUsers }: UserDataProps) {
    return (
        <section className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b p-5">
                <div>
                    <h2 className="font-semibold">
                        Recent Users
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Recently registered users.
                    </p>
                </div>

                <Link
                    href="/admin-dashboard/users"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                    View all
                    <ArrowUpRight className="size-4" />
                </Link>
            </div>

            <div className="divide-y">
                {recentUsers.slice(0, 3).map((user, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 p-5"
                    >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                            <UserRound className="size-4 text-muted-foreground" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">
                                {user.name}
                            </p>

                            <p className="truncate text-xs text-muted-foreground">
                                {user.email}
                            </p>
                        </div>

                        <div className="flex shrink-0 flex-col items-end gap-1.5">
                            <Badge variant="outline">
                                {user.role}
                            </Badge>

                            <span
                                className={
                                    user.status !== "Active"
                                        ? "text-xs text-primary"
                                        : "text-xs text-destructive"
                                }
                            >
                                {user.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}