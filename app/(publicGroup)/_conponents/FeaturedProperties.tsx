

import PropertyCard from '@/components/shared/PropertyCard';
import { IPropertiesCardProps } from '@/lib/type';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';









const FeaturedProperties = async ({ properties }: IPropertiesCardProps) => {


   
    return (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Featured Properties
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Explore popular properties
                    </h2>

                    <p className="mt-3 max-w-xl text-muted-foreground">
                        Discover comfortable apartments, houses, and rooms available for
                        rent in your favorite locations.
                    </p>
                </div>

                <Link
                    href="/properties"
                    className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:self-auto"
                >
                    View all
                    <ArrowRight className="size-4" />
                </Link>
            </div>

            {/* Property Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PropertyCard properties={properties} />
            </div>
        </section>
    );
};

export default FeaturedProperties;