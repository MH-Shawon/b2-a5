import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { ArrowRight, Bath, BedDouble, MapPin, Maximize, Star } from 'lucide-react';
import Link from 'next/link';
import { IPropertiesCardProps, IProperty } from '@/lib/type';







const PropertyCard = ({ properties }: IPropertiesCardProps) => {



    return (
        <>
            {properties.map((property: IProperty) => (

                < Card
                key = { property.id }
                className = "group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                <div className="relative h-60 overflow-hidden bg-muted">
                    <Image
                        width={300}
                        height={200}
                        src={property.images?.[2] || "/placeholder-property.jpg"}
                        alt={property.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/50 to-transparent" />

                    {/* Category */}
                    <Badge className="absolute left-3 top-3">
                        {property.category?.name || "category"}
                        {/* {property.category. || "/category"} */}
                    </Badge>

                    {/* Availability */}
                    <Badge
                        variant="secondary"
                        className="absolute right-3 top-3"
                    >
                        {property.availability === "AVAILABLE"
                            ? "Available"
                            : property.availability}
                    </Badge>

                    {/* Rating */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium backdrop-blur">
                        <Star className="size-3 fill-current text-primary" />
                        {property.rating || "4.8"}
                    </div>
                </div>

                {/* Content */ }
                < CardContent className = "p-5" >
                {/* Title & Price */ }
                < div className = "flex items-start justify-between gap-4" >
                        <div className="min-w-0">
                            <h3 className="line-clamp-2 font-semibold leading-6">
                                {property.title}
                            </h3>

                            {/* Location */}
                            <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                                <MapPin className="size-4 shrink-0" />

                                <span className="truncate">
                                    {property.location}, {property.city}
                                </span>
                            </div>
                        </div>

                        <div className="shrink-0 text-right">
                            <p className="font-bold text-primary">
                                ৳{property.price}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                / month
                            </p>
                        </div>
                    </div >

        {/* Property Details */ }
        < div className = "mt-5 grid grid-cols-3 divide-x rounded-lg border bg-muted/30 py-3" >
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-1.5 text-sm font-medium">
                                <BedDouble className="size-4 text-primary" />
                                {property.bedrooms}
                            </div>

                            <span className="text-xs text-muted-foreground">
                                Bedrooms
                            </span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-1.5 text-sm font-medium">
                                <Bath className="size-4 text-primary" />
                                {property.bathrooms}
                            </div>

                            <span className="text-xs text-muted-foreground">
                                Bathrooms
                            </span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-1.5 text-sm font-medium">
                                <Maximize className="size-4 text-primary" />
                                {property.size}
                            </div>

                            <span className="text-xs text-muted-foreground">
                                Sqft
                            </span>
                        </div>
                    </div >

    {/* Amenities */ }


{/* View Details */ }
<Link
    href={`/properties/${property.id}`}
    className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
>
    View Details
    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
</Link>
                </CardContent >
            </Card >
            ))}
        </>
    );
};

export default PropertyCard;