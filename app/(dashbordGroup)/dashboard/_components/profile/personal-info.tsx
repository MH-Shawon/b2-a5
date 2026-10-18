import { Mail, Phone, UserRound } from "lucide-react";

import { Separator } from "@/components/ui/separator";

interface PersonalInfoProps {
  name: string;
  email: string;
  phone: string;
}

export default function PersonalInfo({
  name,
  email,
  phone,
}: PersonalInfoProps) {
  return (
    <div className="rounded-xl border bg-card">
      <div className="border-b p-5">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          <UserRound className="h-5 w-5" />
          Personal Information
        </h3>
      </div>

      <div className="space-y-5 p-5">
        {/* Name */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <UserRound className="h-5 w-5 text-muted-foreground" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              Full Name
            </p>

            <p className="font-medium">{name}</p>
          </div>
        </div>

        <Separator />

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <Mail className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">
              Email Address
            </p>

            <p className="truncate font-medium">{email}</p>
          </div>
        </div>

        <Separator />

        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <Phone className="h-5 w-5 text-muted-foreground" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              Phone Number
            </p>

            <p className="font-medium">
              {phone || "Not provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}