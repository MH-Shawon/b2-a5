import Link from "next/link";
import {
    ArrowUpRight,
    CalendarDays,
    Eye,
    Users,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PropertyPerformance() {
    return (
        <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>
                        Property Performance
                    </CardTitle>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Overview of your property activity.
                    </p>
                </div>

                
            </CardHeader>

            <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                    <PerformanceItem
                        icon={Eye}
                        label="Total Views"
                        value="2,840"
                        change="+12.5%"
                    />

                    <PerformanceItem
                        icon={CalendarDays}
                        label="Total Bookings"
                        value="28"
                        change="+8.2%"
                    />

                    <PerformanceItem
                        icon={Users}
                        label="Interested Tenants"
                        value="156"
                        change="+15.4%"
                    />
                </div>

                <Separator className="my-6" />

                <div className="space-y-5">
                    <PerformanceBar
                        label="Property Views"
                        value="78%"
                    />

                    <PerformanceBar
                        label="Booking Conversion"
                        value="64%"
                    />

                    <PerformanceBar
                        label="Occupancy Rate"
                        value="82%"
                    />
                </div>
            </CardContent>
        </Card>
    );
}

interface PerformanceItemProps {
    icon: React.ElementType;
    label: string;
    value: string;
    change: string;
}

function PerformanceItem({
    icon: Icon,
    label,
    value,
    change,
}: PerformanceItemProps) {
    return (
        <div className="rounded-xl border bg-muted/30 p-4">
            <div className="flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-lg bg-background">
                    <Icon className="size-4 text-muted-foreground" />
                </div>

                <span className="text-xs font-medium text-primary">
                    {change}
                </span>
            </div>

            <p className="mt-4 text-2xl font-bold">
                {value}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
                {label}
            </p>
        </div>
    );
}

interface PerformanceBarProps {
    label: string;
    value: string;
}

function PerformanceBar({
    label,
    value,
}: PerformanceBarProps) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">
                    {label}
                </span>

                <span className="text-muted-foreground">
                    {value}
                </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: value }}
                />
            </div>
        </div>
    );
}