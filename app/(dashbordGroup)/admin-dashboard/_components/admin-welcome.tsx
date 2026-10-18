import Link from "next/link";
import {
    ArrowRight,
    ShieldCheck,
} from "lucide-react";

interface AdminWelcomeProps {
    userName: string;
}

export default function AdminWelcome({
    userName,
}: AdminWelcomeProps) {
    return (
        <section className="relative overflow-hidden rounded-2xl border bg-primary p-6 text-primary-foreground shadow-sm sm:p-8">
            <div className="relative z-10 max-w-2xl">
                <div className="mb-3 flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-background/15">
                        <ShieldCheck className="size-5" />
                    </div>

                    <span className="text-sm font-medium opacity-80">
                        Admin Dashboard
                    </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Welcome back, {userName} 👋
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 opacity-80 sm:text-base">
                    Monitor RentNest activity, manage users, review
                    properties, and keep the marketplace running smoothly.
                </p>

                <Link
                    href="/admin-dashboard/users"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-background/90"
                >
                    Manage Users
                    <ArrowRight className="size-4" />
                </Link>
            </div>

            <div className="absolute -right-16 -top-20 size-64 rounded-full bg-background/10" />

            <div className="absolute -bottom-24 right-20 size-52 rounded-full bg-background/10" />
        </section>
    );
}