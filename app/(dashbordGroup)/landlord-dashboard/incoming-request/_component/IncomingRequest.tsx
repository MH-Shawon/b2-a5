import {
    CalendarDays,
    CheckCircle2,
    Clock3,
    MessageSquare,
    Users,
    XCircle,
} from "lucide-react";

import {
    Card,
    CardContent
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { IRequestOfLandlordProperty, RentalRequestStatus } from "@/lib/rentalsTypes";
import { RequestStatusManageDialog } from "./requestStatusManageDialog";


interface IRBRProps {
    requests: IRequestOfLandlordProperty[];
}

export default function IncomingRequest({
    requests,
}: IRBRProps) {


    return (
        <Card >

            <CardContent >
                <div className="space-y-4">
                    {requests.map((request) => (
                        <BookingRequest
                            key={request.id}
                            requestId={request?.id}
                            tenant={request.tenant.name || "User Name"}
                            property={request.property.title || "Property Title"}
                            requestedDate={request.createdAt || "Created date"}
                            moveInDate={request.moveInDate || "Move In Date"}
                            comment={request.message || "Message..."}
                            status={
                                request.status === "APPROVED"
                                    ? "APPROVED"
                                    : request.status === "REJECTED"
                                        ? "REJECTED"
                                        : request.status === "ACTIVE"
                                            ? "ACTIVE"
                                            : request.status === "COMPLETED"
                                                ? "COMPLETED"
                                                : "PENDING"
                            }
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

interface BookingRequestProps {
    requestId: string;
    tenant: string;
    property: string;
    requestedDate: string;
    moveInDate: string;
    comment: string;
    status: RentalRequestStatus;
}

function BookingRequest({
    requestId,
    tenant,
    property,
    requestedDate,
    moveInDate,
    comment,
    status,
}: BookingRequestProps) {

    return (
        <div className="rounded-xl border p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

                {/* Tenant */}
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Users className="size-4 text-muted-foreground" />
                </div>

                {/* Main Content */}
                <div className="min-w-0 flex-1">

                    <p className="font-medium">
                        {tenant}
                    </p>

                    <p className="truncate text-sm text-muted-foreground">
                        {property}
                    </p>

                    {/* Dates */}
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">

                        <div className="flex items-center gap-1">
                            <Clock3 className="size-3" />
                            <span>
                                Requested: {new Date(requestedDate).toDateString()}
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <CalendarDays className="size-3" />
                            <span>
                                Move-in: {new Date(moveInDate).toDateString()}
                            </span>
                        </div>

                    </div>

                    {/* Comment */}
                    <div className="mt-3 rounded-lg bg-muted/50 p-3">
                        <div className="mb-1 flex items-center gap-1.5 text-xs font-medium">
                            <MessageSquare className="size-3.5" />
                            Comment
                        </div>

                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                            {comment}
                        </p>
                    </div>
                </div>

                {/* Status + Action */}
                <div className="flex items-center justify-between gap-3 ">

                    <Badge
                        variant="outline"
                        className={
                            status === "PENDING"
                                ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-600"
                                : status === "APPROVED"
                                    ? "border-blue-500/30 bg-blue-500/10 text-blue-600"
                                    : status === "REJECTED"
                                        ? "border-red-500/30 bg-red-500/10 text-red-600"
                                        : status === "ACTIVE"
                                            ? "border-green-500/30 bg-green-500/10 text-green-600"
                                            : status === "COMPLETED"
                                                ? "border-gray-500/30 bg-gray-500/10 text-gray-600"
                                                : ""
                        }
                    >
                        {status === "PENDING" ? (
                            <Clock3 className="mr-1 size-3" />
                            
                        ) : status === "REJECTED" ? (
                            <XCircle className="mr-1 size-3" />
                        ) : status === "COMPLETED" ? (
                            <CheckCircle2 className="mr-1 size-3" />
                        ) : (
                            <CheckCircle2 className="mr-1 size-3" />
                        )}

                        {status}
                    </Badge>





                    <RequestStatusManageDialog requestId={requestId} />


                </div>
            </div>
        </div>
    );


}