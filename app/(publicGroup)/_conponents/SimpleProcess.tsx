"use client"

import { Home, Search, ShieldCheck } from 'lucide-react';
import React from 'react';

const SimpleProcess = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple process
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Find your home in three simple steps
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Search",
              description:
                "Search properties using location, city, and property category.",
              icon: Search,
            },
            {
              number: "02",
              title: "Choose",
              description:
                "Explore property details and choose the home that fits you.",
              icon: Home,
            },
            {
              number: "03",
              title: "Rent",
              description:
                "Connect with the landlord and move into your new home.",
              icon: ShieldCheck,
            },
          ].map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-7" />
                </div>

                <p className="mt-5 text-xs font-bold tracking-widest text-primary">
                  STEP {step.number}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
};

export default SimpleProcess;