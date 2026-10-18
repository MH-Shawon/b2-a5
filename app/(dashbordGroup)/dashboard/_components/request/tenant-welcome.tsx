import Link from "next/link";
import { Search } from "lucide-react";

interface TenantWelcomeProps {
    userName: string;
}

export default function TenantWelcome({
    userName,
}: TenantWelcomeProps) {
    return (
        <section className="relative overflow-hidden rounded-2xl border bg-primary p-6 text-primary-foreground shadow-sm sm:p-8">
            <div className="relative z-10 max-w-2xl">
                <p className="mb-2 text-sm font-medium opacity-80">
                    Tenant Dashboard
                </p>

                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Good morning, {userName} 👋
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 opacity-80 sm:text-base">
                    Welcome back! Find your next perfect home, manage
                    your bookings, and keep track of your rental activities.
                </p>

                <Link
                    href="/properties"
                    className="
                        mt-6 inline-flex items-center gap-2
                        rounded-xl bg-background
                        px-4 py-2.5
                        text-sm font-semibold
                        text-foreground
                        transition hover:bg-background/90
                    "
                >
                    <Search className="size-4" />
                    Explore Properties
                </Link>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -right-16 -top-20 size-64 rounded-full bg-background/10" />

            <div className="absolute -bottom-24 right-20 size-52 rounded-full bg-background/10" />
        </section>
    );
}