"use client";

import {
  CalendarDays,
  Clock,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RentalRequest } from "@/lib/rentalsTypes";



interface RentalRequestCardProps {
  request: RentalRequest;
}

export default function RentalRequestCard({
  request,
}: RentalRequestCardProps) {
  const statusVariant =
    request.status === "APPROVED" || request.status === "ACTIVE"
      ? "default"
      : request.status === "REJECTED"
        ? "destructive"
        : "secondary";

  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold">
            Rental Request
          </CardTitle>

          <p className="text-xs text-muted-foreground">
            Request ID: {request.id.slice(0, 8)}...
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={statusVariant}>
            {request.status}
          </Badge>

          {/* <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <MoreHorizontal className="size-4" />
                </Button>
              }
            />

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                View Details
              </DropdownMenuItem>

              <DropdownMenuItem>
                View Property
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Dates */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-muted/50 p-3">
            <div className="mb-1 flex items-center gap-2 text-sm font-medium">
              <CalendarDays className="size-4 text-muted-foreground" />
              Move-in Date
            </div>

            <p className="text-sm text-muted-foreground">
              {new Date(
                request.moveInDate
              ).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="rounded-xl bg-muted/50 p-3">
            <div className="mb-1 flex items-center gap-2 text-sm font-medium">
              <Clock className="size-4 text-muted-foreground" />
              Requested
            </div>

            <p className="text-sm text-muted-foreground">
              {new Date(
                request.createdAt
              ).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="rounded-xl border p-4">
          <div className="mb-2 flex items-center gap-2">
            <MessageSquare className="size-4 text-muted-foreground" />

            <span className="text-sm font-medium">
              Message
            </span>
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
            {request.message || "No message provided."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}