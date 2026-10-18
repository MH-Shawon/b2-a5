import Link from "next/link";

import {
    ArrowUpRight,
    MapPin,
} from "lucide-react";

import BookingStatus from "./booking-status";
import { RequestStatsProps } from "@/lib/rentalsTypes";



export default function RecentBookings({ rentals }: RequestStatsProps) {



    const bookings = rentals


    return (
        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-5 py-5 sm:px-6">
                <div>
                    <h2 className="font-semibold text-foreground">
                        Recent 2 Requests
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Your latest rental activities
                    </p>
                </div>

                <Link
                    href="/dashboard/rental-requests"
                    className="
                        flex items-center gap-1
                        text-sm font-medium
                        text-primary
                        hover:underline "
                >
                    View all
                    <ArrowUpRight className="size-4" />
                </Link>
            </div>

            {/* Desktop / Tablet */}
            <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left">
                    <thead className="bg-muted/50">
                        <tr className="text-xs uppercase tracking-wide text-muted-foreground">
                            <th className="px-6 py-4 font-medium">
                                Property
                            </th>

                            <th className="px-6 py-4 font-medium">
                                Date
                            </th>

                            <th className="px-6 py-4 font-medium">
                                Amount
                            </th>

                            <th className="px-6 py-4 font-medium">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {bookings.sort(
                            (a, b) =>
                                new Date(b.createdAt).getTime() -
                                new Date(a.createdAt).getTime()
                        ).slice(0, 2).map((booking) => (
                            <tr
                                key={booking.id}
                                className="transition hover:bg-muted/30"
                            >
                                <td className="px-6 py-4">
                                    <p className="font-medium text-foreground">
                                        {booking.property?.title || "Title"}
                                    </p>

                                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                                        <MapPin className="size-3.5" />
                                        {booking.property?.location || "locations"}
                                    </p>
                                </td>

                                <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">
                                    {new Date(booking.createdAt).toLocaleDateString()}
                                </td>

                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">
                                    {booking.property?.price || "Price"}
                                </td>

                                <td className="px-6 py-4">
                                    <BookingStatus
                                        status={booking.status}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile */}
            <div className="divide-y md:hidden">
                {bookings.sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                ).slice(0, 2).map((booking) => (
                    <div
                        key={booking.id}
                        className="p-5"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <h3 className="truncate font-medium text-foreground">
                                    {booking.property?.title || "Title"}
                                </h3>

                                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                                    <MapPin className="size-3.5" />
                                    {booking.property?.location || "locations"}
                                </p>
                            </div>

                            <BookingStatus
                                status={booking.status}
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                                {booking.createdAt}
                            </span>

                            <span className="font-semibold text-foreground">
                                {booking.property?.price || "Price"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}