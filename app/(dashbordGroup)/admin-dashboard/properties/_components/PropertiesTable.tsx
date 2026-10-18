"use client";

import {
    Building2,
    MapPin,
    MoreHorizontal,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";

interface Property {
    id: string;
    title: string;
    price: string | number;
    location: string;
    city: string;
    images: string[];
    availability: "AVAILABLE" | "RENTED" | "UNAVAILABLE";
    createdAt: string;

    landlord: {
        name: string;
        role: string;
        status: string;
    };
}

interface PropertiesTableProps {
    properties: Property[];
}

export default function PropertiesTable({
    properties,
}: PropertiesTableProps) {









    return (
        <div className="overflow-hidden rounded-xl border bg-card">
            <div className="overflow-x-auto">
                <Table>
                    {/* Header */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="min-w-[280px]">
                                Property
                            </TableHead>

                            <TableHead>
                                Location
                            </TableHead>

                            <TableHead>
                                Price
                            </TableHead>




                            <TableHead>
                                Created
                            </TableHead>

                            
                        </TableRow>
                    </TableHeader>

                    {/* Body */}
                    <TableBody>
                        {properties.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className="h-32 text-center"
                                >
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <Building2 className="size-8 text-muted-foreground" />

                                        <p className="font-medium">
                                            No properties found
                                        </p>

                                        <p className="text-sm text-muted-foreground">
                                            There are no properties to display.
                                        </p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            properties.map((property) => (
                                <TableRow key={property.id}>
                                    {/* Property + Landlord */}
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            {/* Property Image */}
                                            <div className="size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                                                {property.images?.[0] ? (
                                                    <Image
                                                        width={500}
                                                        height={500}
                                                        loading="eager"
                                                        src={property.images[0]}
                                                        alt={property.title}
                                                        className="size-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex size-full items-center justify-center">
                                                        <Building2 className="size-5 text-muted-foreground" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Property Info */}
                                            <div className="min-w-0">
                                                <p className="truncate font-medium">
                                                    {property.title}
                                                </p>

                                                <div className="mt-0.5 flex items-center gap-2">
                                                    <p className="truncate text-sm text-muted-foreground">
                                                        {property.landlord.name}
                                                    </p>

                                                    <Badge
                                                        variant="outline"
                                                        className="px-1.5 py-0 text-[10px]"
                                                    >
                                                        {property.availability}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>

                                    {/* Location */}
                                    <TableCell>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="size-3.5 shrink-0 text-muted-foreground" />

                                            <div>
                                                <p className="whitespace-nowrap">
                                                    {property.location}
                                                </p>

                                                <p className="text-xs text-muted-foreground">
                                                    {property.city}
                                                </p>
                                            </div>
                                        </div>
                                    </TableCell>

                                    {/* Price */}
                                    <TableCell className="whitespace-nowrap">
                                        <span className="font-medium">
                                            ৳{Number(property.price).toLocaleString()}
                                        </span>

                                        <span className="ml-1 text-xs text-muted-foreground">
                                            /month
                                        </span>
                                    </TableCell>



                                    {/* Created */}
                                    <TableCell className="whitespace-nowrap text-muted-foreground">
                                        {new Date(
                                            property.createdAt
                                        ).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </TableCell>

                                    {/* Action */}
                                    
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}