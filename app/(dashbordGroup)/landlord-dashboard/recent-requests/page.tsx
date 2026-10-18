import { CalendarDays, MapPin, MessageSquare, Home } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getMyRentalRequests } from "@/service/request/getRequest";





export default async function RentalRequestsPage() {

    const requests = (await getMyRentalRequests()).data;



    return (
        <Card>
            <CardHeader>
                <CardTitle>Rental Requests</CardTitle>
            </CardHeader>

            <CardContent>
                {requests.length === 0 ? (
                    <div className="flex min-h-40 flex-col items-center justify-center text-center">
                        <Home className="mb-3 size-8 text-muted-foreground" />

                        <h3 className="font-medium">
                            No rental requests
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            You haven&apos;t made any rental requests yet.
                        </p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-5">
                        {requests.map((request) => (
                            <div
                                key={request.id}
                                className="rounded-lg border p-4"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="space-y-2">
                                        <h3 className="font-semibold">
                                            {request.property?.title || "title"}
                                        </h3>

                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <MapPin className="size-4" />
                                            <span>
                                                {request?.property?.location || "locations"}                                            </span>
                                        </div>
                                    </div>

                                    <Badge
                                        variant="outline"
                                        className={
                                            request.status === "PENDING"
                                                ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-600"
                                                : request.status === "APPROVED"
                                                    ? "border-green-500/30 bg-green-500/10 text-green-600"
                                                    : request.status === "ACTIVE"
                                                        ? "border-green-500/30 bg-green-500/10 text-green-600"
                                                        : request.status === "REJECTED"
                                                            ? "border-red-500/30 bg-red-500/10 text-red-600"
                                                            : request.status === "COMPLETED"
                                                                ? "border-blue-500/30 bg-blue-500/10 text-gray-600"
                                                                : "border-muted bg-muted text-muted-foreground"
                                        }
                                    >
                                        {request.status}
                                    </Badge>
                                </div>

                                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays className="size-4 text-muted-foreground" />

                                        <div>
                                            <span className="text-muted-foreground">
                                                Move-in:{" "}
                                            </span>

                                            <span className="font-medium">
                                                {new Date(
                                                    request.moveInDate
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-muted-foreground">
                                            Rent:{" "}
                                        </span>

                                        <span className="font-medium">
                                            ৳ {request.property?.price || "0"}
                                        </span>
                                    </div>
                                </div>

                                {request.message && (
                                    <div className="mt-4 flex gap-2 rounded-md bg-muted/50 p-3">
                                        <MessageSquare className="mt-0.5 size-4 shrink-0 text-muted-foreground" />

                                        <p className="text-sm text-muted-foreground">
                                            {request.message}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-4 border-t pt-3 text-xs text-muted-foreground flex justify-between items-center">
                                    <span>Requested on{" "}
                                        {new Date(
                                            request.createdAt
                                        ).toLocaleDateString()}</span>

                                    <span>
                                        {request.status === "APPROVED" ? <Button >To PAY</Button> : ""}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}