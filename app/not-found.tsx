"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="relative inline-block">
          <span className="text-[120px] font-black leading-none tracking-tightter ext-primary/10 sm:text-[160px]">
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <Home className="size-14 text-primary sm:size-16" />
          </div>
        </div>

        {/* Accent */}
        <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-primary" />

        {/* Content */}
        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md leading-7 text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved, deleted, or the URL may be incorrect.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <Home className="size-4" />
            Go Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border bg-background px-6 text-sm font-medium transition-colors hover:bg-muted"
          >
            <ArrowLeft className="size-4" />
            Go Back
          </button>
        </div>

        {/* Property Link */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Search className="size-4 text-primary" />

          <span>
            Looking for a property?{" "}
            <Link
              href="/properties"
              className="font-medium text-primary hover:underline"
            >
              Explore properties
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}