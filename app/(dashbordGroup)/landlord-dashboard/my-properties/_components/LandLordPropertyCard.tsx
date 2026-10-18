"use client"

import { Button } from "@/components/ui/button";
import { IProperty } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import PropertyEditDialogs from "./PropertyEditDialogs";
import { ICategory } from "@/lib/category";
import { Delete } from "lucide-react";
import { propertyDeleteAction } from "../_actions/propertyDeleteAction";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface MyPropertiesTableProps {
    properties: IProperty[],
    categories: ICategory[]
}

export default function MyPropertiesTable({
    properties = [],
    categories

}: MyPropertiesTableProps) {

    const router = useRouter()

    const handleDeleteProperty = async (id: string) => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {


            if (result.isConfirmed) {
                const resultDelete = await propertyDeleteAction(id)


                if (!resultDelete.message) return;

                if (resultDelete.success) {
                    toast.success(resultDelete.message);

                    router.refresh()
                    router.push("/landlord-dashboard/my-properties")

                } else {
                    toast.error(resultDelete.message);
                }


            }





        });

    }


    if (!properties.length) {
        return (
            <div className="rounded-xl border border-dashed border-muted-foreground/30 bg-muted/20 p-6 text-center text-sm text-muted-foreground">
                No properties have been added yet.
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border bg-card">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b bg-muted/50">
                            <th className="px-4 py-3 text-left">
                                Property
                            </th>

                            <th className="px-4 py-3 text-left">
                                Location
                            </th>

                            <th className="px-4 py-3 text-left">
                                Rent
                            </th>

                            <th className="px-4 py-3 text-left">
                                Details
                            </th>

                            <th className="px-4 py-3 text-left">
                                Status
                            </th>

                            <th className="px-4 py-3 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {properties.map((property) => (
                            <tr
                                key={property.id}
                                className="border-b"
                            >
                                {/* Property */}
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={property.images?.[0]}
                                            alt={property.title}
                                            className="h-14 w-14 rounded-lg object-cover"
                                        />

                                        <div>
                                            <h3 className="font-medium">
                                                {property.title}
                                            </h3>

                                            <p className="text-xs text-muted-foreground">
                                                {property.city}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Location */}
                                <td className="px-4 py-4">
                                    {property.location}
                                </td>

                                {/* Rent */}
                                <td className="px-4 py-4 font-semibold">
                                    ৳
                                    {Number(
                                        property.price
                                    ).toLocaleString()}
                                </td>

                                {/* Details */}
                                <td className="px-4 py-4">
                                    <div className="text-sm text-muted-foreground">
                                        {property.bedrooms} Bed •{" "}
                                        {property.bathrooms} Bath •{" "}
                                        {property.size} sqft
                                    </div>
                                </td>

                                {/* Status */}
                                <td className="px-4 py-4">
                                    <span
                                        className={`rounded-full px-2 py-1 text-xs font-medium ${property.availability ===
                                            "AVAILABLE"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {property.availability}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td className="px-4 py-4">
                                    <div className="flex justify-end gap-2">
                                        <Link href={`/properties/${property.id}`}>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                            >
                                                View
                                            </Button></Link>

                                        <PropertyEditDialogs categories={categories} property={property} />

                                        <Button
                                            onClick={() => handleDeleteProperty(property.id)}
                                            size="sm"
                                            variant="destructive"
                                        >

                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {properties.length === 0 && (
                    <div className="py-12 text-center">
                        <p className="font-medium">
                            No properties found
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Create your first property.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}