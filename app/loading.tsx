import { Home } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="relative flex size-16 items-center justify-center rounded-2xl bg-primary/10">
          <Home className="size-8 text-primary" />

          <span className="absolute inset-0 animate-ping rounded-2xl bg-primary/10" />
        </div>

        <h2 className="mt-5 text-xl font-bold tracking-tight">
          RentNest
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Finding your perfect home...
        </p>

        <div className="mt-5 h-1 w-32 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}