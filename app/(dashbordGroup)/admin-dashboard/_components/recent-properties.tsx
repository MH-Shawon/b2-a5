import Link from "next/link";
import {
    ArrowUpRight,
    Building2,
    MapPin,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PropertyComponentProps } from "@/lib/AdminType";

const properties = [
    {
        id: "1",
        title: "Modern Family Apartment",
        landlord: "Rahim Ahmed",
        location: "Dhaka",
        price: "৳25,000",
        status: "Active",
    },
    {
        id: "2",
        title: "Cozy Lake View House",
        landlord: "Sadia Islam",
        location: "Jashore",
        price: "৳18,000",
        status: "Pending",
    },
    {
        id: "3",
        title: "Luxury City Apartment",
        landlord: "Hasan Mahmud",
        location: "Dhaka",
        price: "৳35,000",
        status: "Active",
    },
];

export default function RecentProperties({ propertyData }: PropertyComponentProps) {




    return (
        <section className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b p-5">
                <div>
                    <h2 className="font-semibold">
                        Recent Properties
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Recently listed properties.
                    </p>
                </div>

                <Link
                    href="/admin-dashboard/properties"
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                    View all
                    <ArrowUpRight className="size-4" />
                </Link>
            </div>

            <div className="divide-y">
                {propertyData.slice(0,3).map((property, indx) => (
                    <div
                        key={indx}
                        className="flex gap-3 p-5"
                    >
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                            <Building2 className="size-5 text-muted-foreground" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-semibold">
                                        {property.title}
                                    </h3>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {property.role}: {property.landlordName}
                                    </p>
                                </div>

                                <Badge
                                    variant={
                                        property
                                            ? "default"
                                            : "secondary"
                                    }
                                >
                                    {property.status}
                                </Badge>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <MapPin className="size-3.5" />
                                    {property.location}
                                </span>

                                <span>
                                    {property.price} / month
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}