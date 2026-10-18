import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ProfileHeaderProps {
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

export default function ProfileHeader({
  name,
  email,
  role,
  status,
  createdAt,
}: ProfileHeaderProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const joinedDate = new Date(createdAt).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <Avatar className="h-20 w-20">
          <AvatarFallback className="text-xl font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold">{name}</h2>

            <Badge variant="secondary">{role}</Badge>

            <Badge>{status}</Badge>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            {email}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            Member since {joinedDate}
          </div>
        </div>
      </div>
    </div>
  );
}