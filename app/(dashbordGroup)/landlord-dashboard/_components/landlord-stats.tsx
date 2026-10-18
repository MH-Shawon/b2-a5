import Link from "next/link";
import {
    Building2,
    CalendarDays,
    DollarSign,
    Home,
} from "lucide-react";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { IPropertiesCardProps, IProperty, StatsCardProps } from "@/lib/type";
import { RentalRequest, RequestStatsProps } from "@/lib/rentalsTypes";

interface ILandlordStats {
    properties: IProperty[],
    rentals: RentalRequest[]
}

export default function LandlordStats({
    properties,
    rentals

}: ILandlordStats) {
    const totalProperties = properties.length;

    const activeProperties = properties.filter(
        (property) => property.availability === "AVAILABLE"
    ).length;

    const totalIncomingRequest = rentals.length


    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <StatsCard
            href=""
                title="Total Properties"
                value={totalProperties.toString().padStart(2, "0")}
                description="All your listings"
                icon={Building2}
               
            />

            <StatsCard
            href=""
                title="Active Listings"
                value={activeProperties.toString().padStart(2, "0")}
                description="Currently available"
                icon={Home}
               
            />

            <StatsCard
            href=""
                title="Incoming Requests"
                value={totalIncomingRequest.toString().padStart(2, "0")}
                description="Need your attention"
                icon={CalendarDays}
                highlight
            />


        </div>
    );
}

function StatsCard({
    title,
    value,
    description,
    icon: Icon,
    href,
    highlight,
}: StatsCardProps) {
    return (
        <Link href={href} className="block">
            <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                {title}
                            </p>

                            <p className="mt-2 text-2xl font-bold tracking-tight">
                                {value}
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                {description}
                            </p>
                        </div>

                        <div
                            className={`flex size-10 items-center justify-center rounded-xl ${highlight
                                    ? "bg-primary/10 text-primary"
                                    : "bg-muted text-muted-foreground"
                                }`}
                        >
                            <Icon className="size-5" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}