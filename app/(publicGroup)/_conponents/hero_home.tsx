"use client"


import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Hero_Home = () => {



  const searchParams = useSearchParams()
  const searchValue = searchParams.get("title") as string



  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-background" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Hero Content */}
          <div>


            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find a place you&apos;ll{" "}
              <span className="text-primary">love to call home.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Discover apartments, houses, and rooms for rent in your
              favorite locations. RentNest makes finding your next home
              simple and stress-free.
            </p>

            {/* Search Box */}
            <div className="mt-8 rounded-2xl border bg-background p-3 shadow-xl">
              <div className="flex gap-5">
                {/* Location */}
                <div className="relative lg:col-span-1 flex-1">
                  <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    name='title'
                    defaultValue={searchValue ? searchValue.toString() : ""}
                    placeholder="Search by city, neighborhood, or address..."
                    className="h-12 pl-9"
                  />
                </div>

                <Button type='submit' className="h-12 gap-2">
                  <Search className="size-4" />
                  Search
                </Button>
              </div>

              {/* Advanced Filter */}
              <div className="mt-3 flex justify-end">
                <Link href='/properties'>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <SlidersHorizontal className="size-4" />
                    More filters
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold">1,000+</p>
                <p className="text-sm text-muted-foreground">
                  Properties
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-muted-foreground">
                  Happy Tenants
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">
                  Locations
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border shadow-2xl">
              <Image
                loading="eager"
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
                alt="Modern house"
                width={1200}
                height={420}
                className="h-105 w-full object-cover sm:h-130"
              />
            </div>

            {/* Floating Card */}
            <Card className="absolute -bottom-6 left-4 right-4 shadow-xl sm:left-8 sm:right-auto sm:w-80">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">
                      Modern Family Apartment
                    </p>

                    <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" />
                      Dhanmondi, Dhaka
                    </div>
                  </div>

                  <Badge>৳25K</Badge>
                </div>

                <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                  <span>3 Beds</span>
                  <span>2 Baths</span>
                  <span>1,200 sqft</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Home;