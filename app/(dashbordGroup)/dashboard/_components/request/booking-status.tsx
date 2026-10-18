import {
    CheckCircle2,
    Clock3,
} from "lucide-react";

interface BookingStatusProps {
    status: string;
}

export default function BookingStatus({
    status,
}: BookingStatusProps) {
    if (status === "Confirmed") {
        return (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                <CheckCircle2 className="size-3.5" />
                Confirmed
            </span>
        );
    }

    return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            <Clock3 className="size-3.5" />
            Pending
        </span>
    );
}