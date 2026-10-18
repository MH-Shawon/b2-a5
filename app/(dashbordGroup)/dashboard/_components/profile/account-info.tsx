import { CircleUserRound, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface AccountInfoProps {
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function AccountInfo({
  role,
  status,
  createdAt,
  updatedAt,
}: AccountInfoProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="rounded-xl border bg-card">
      <div className="border-b p-5">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <CircleUserRound className="h-5 w-5" />
          Account Information
        </h3>
      </div>

      <div className="space-y-5 p-5">
        {/* Role */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <ShieldCheck className="h-5 w-5 text-muted-foreground" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              Account Role
            </p>

            <p className="font-medium">{role}</p>
          </div>
        </div>

        <Separator />

        {/* Status */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">
              Account Status
            </p>

            <p className="mt-1 font-medium">
              {status === "ACTIVE"
                ? "Your account is active"
                : "Your account is inactive"}
            </p>
          </div>

          <Badge>{status}</Badge>
        </div>

        <Separator />

        {/* Created */}
        <div>
          <p className="text-xs text-muted-foreground">
            Account Created
          </p>

          <p className="mt-1 font-medium">
            {formatDate(createdAt)}
          </p>
        </div>

        <Separator />

        {/* Updated */}
        <div>
          <p className="text-xs text-muted-foreground">
            Last Updated
          </p>

          <p className="mt-1 font-medium">
            {formatDate(updatedAt)}
          </p>
        </div>
      </div>
    </div>
  );
}