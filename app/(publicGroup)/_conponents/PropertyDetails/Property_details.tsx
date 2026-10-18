

import Link from "next/link";
import {
    ArrowLeft,
    Bath,
    BedDouble,
    CalendarDays,
    Check,
    Home,
    Mail,
    MapPin,
    Maximize,
    Phone,
    ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"; import Image from "next/image"; import { getSingleProperty } from "../../properties/_actionProperties/getSingleProperty";
import { RequestToRentDialog } from "../RequestToRentDialog";
import { getMe } from "@/service/getMe"
import { Button } from "@/components/ui/button";

export default async function PropertyDetails({ id }: { id: string }) {
    const property = await getSingleProperty(id)
    const user = (await getMe()).data
   
    const isAuthenticated = Boolean(user ? true : false);





    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Link
                        href="/"
                        className="transition-colors hover:text-primary"
                    >
                        Home
                    </Link>

                    <span>/</span>

                    <Link
                        href="/properties"
                        className="transition-colors hover:text-primary"
                    >
                        Properties
                    </Link>

                    <span>/</span>

                    <span className="text-foreground">
                        {property?.title}
                    </span>
                </div>

                {/* ======HEADER====== */}

                <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                            <Badge>
                                {property?.category?.name || "Category"}
                            </Badge>

                            <Badge
                                variant="secondary"
                                className="text-green-600 dark:text-green-400"
                            >
                                <span className="mr-1.5 size-1.5 rounded-full bg-green-500" />
                                Available
                            </Badge>
                        </div>

                        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                            {property?.title}                        </h1>
                        <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                            <MapPin className="size-4 shrink-0 text-primary" />

                            <span>
                                {property?.location}, {property?.city}
                            </span>
                        </div>
                    </div>

                    <div className="shrink-0 sm:text-right">
                        <p className="text-sm text-muted-foreground">
                            Monthly Rent
                        </p>

                        <p className="text-3xl font-bold text-primary">
                            ৳{property.price}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            per month
                        </p>
                    </div>
                </div>


                <div className="grid gap-3 md:grid-cols-8 ">
                    {/* Main Image */}
                    <div className="overflow-hidden rounded-2xl border bg-muted md:col-span-5 lg:row-span-2">

                        {property?.images?.[0] && (<Image
                            loading="eager"
                            width={500}
                            height={300}
                            src={property?.images[0] || ""}
                            alt={property.title}
                            className="h-full min-h-72 w-full object-cover transition-transform duration-500 hover:scale-[1.02] lg:min-h-130"
                        />)}

                    </div>



                    {/* second image */}
                    <div className=" md:col-span-3 space-y-3">
                        <div className="overflow-hidden rounded-2xl border bg-muted h-55 ">


                            {property?.images?.[1] && <Image
                                loading="eager"
                                width={500}
                                height={300}
                                src={property?.images[1] || ""}
                                alt={`${property.title} interior`}
                                className="w-full object-cover duration-500 hover:scale-[1.02] h-70"
                            />}

                        </div>

                        <div className=" space-y-1 overflow-hidden rounded-2xl border bg-muted  h-80">
                            {property?.images?.[3] && <Image
                                loading="eager"
                                width={500}
                                height={300}
                                src={property?.images[1] || ""}
                                alt={`${property.title} interior`}
                                className="w-full object-cover duration-500 hover:scale-[1.02] h-70"
                            />}


                            {property?.images?.[3] && <Image
                                loading="eager"
                                width={500}
                                height={300}
                                src={property?.images[1] || ""}
                                alt={`${property.title} interior`}
                                className="w-full object-cover duration-500 hover:scale-[1.02] h-70"
                            />}

                        </div>
                    </div>
                </div>


                <div className="mt-10 grid gap-8 lg:grid-cols-3">


                    <div className="space-y-8 lg:col-span-2">

                        {/* Property Stats */}
                        <Card>
                            <CardContent className="grid grid-cols-3 divide-x p-0">
                                <PropertyStat
                                    icon={BedDouble}
                                    value={property.bedrooms}
                                    label="Bedrooms"
                                />

                                <PropertyStat
                                    icon={Bath}
                                    value={property.bathrooms}
                                    label="Bathrooms"
                                />

                                <PropertyStat
                                    icon={Maximize}
                                    value={`${property.size}`}
                                    label="Sq Ft"
                                />
                            </CardContent>
                        </Card>

                        {/* About */}
                        <section>
                            <h2 className="text-xl font-semibold">
                                About this property
                            </h2>

                            <p className="mt-4 leading-7 text-muted-foreground">
                                {property.description}
                            </p>
                        </section>

                        <Separator />

                        {/* Amenities */}
                        <section>
                            <h2 className="text-xl font-semibold">
                                Amenities
                            </h2>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {property.amenities.map((amenity: string[], index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 rounded-lg border bg-muted/20 px-4 py-3"
                                    >
                                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Check className="size-4" />
                                        </div>

                                        <span className="text-sm font-medium">
                                            {amenity}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <Separator />

                        {/* Property Information */}
                        <section>
                            <h2 className="text-xl font-semibold">
                                Property information
                            </h2>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <InfoRow
                                    icon={Home}
                                    label="Property Type"
                                    value={property?.category?.name || "Category"}
                                />

                                <InfoRow
                                    icon={MapPin}
                                    label="Location"
                                    value={`${property.location}, ${property.city}`}
                                />

                                <InfoRow
                                    icon={CalendarDays}
                                    label="Listed On"
                                    value={property.createdAt}
                                />

                                <InfoRow
                                    icon={ShieldCheck}
                                    label="Availability"
                                    value="Available for rent"
                                />
                            </div>
                        </section>
                    </div>



                    <aside className="space-y-6">

                        {/* Rent Card */}
                        <Card className=" ">
                            <CardHeader>
                                <p className="text-sm text-muted-foreground">
                                    Monthly Rent
                                </p>

                                <p className="text-3xl font-bold text-primary">
                                    ৳{property.price}
                                    <span className="ml-1 text-sm font-normal text-muted-foreground">
                                        / month
                                    </span>
                                </p>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <span className="h-11 w-full">

                                    {
                                        user?.role === "TENANT" ? <RequestToRentDialog isAuthenticated={isAuthenticated} propertyId={property.id}  />
                                        :<Button>Request only TENANT</Button>

                                    }
                                </span>


                                <p className="text-center text-xs leading-5 text-muted-foreground">
                                    You can contact the landlord for more information
                                    or send a rental request.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Landlord */}
                        <Card>
                            <CardHeader>
                                <h2 className="font-semibold">
                                    Landlord
                                </h2>
                            </CardHeader>

                            <CardContent>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                                        {property?.landlord?.name.charAt(0) || "ABC"}
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            {property.landlord.name}
                                        </p>

                                        <p className="text-xs text-muted-foreground">
                                            Property Owner
                                        </p>
                                    </div>
                                </div>

                                <Separator className="my-5" />

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <Mail className="size-4 text-primary" />
                                        <span className="truncate">
                                            {property.landlord.email}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <Phone className="size-4 text-primary" />
                                        <span>
                                            {property.landlord.phone || "+8801XXXXXXX"}
                                        </span>
                                    </div>
                                </div>



                            </CardContent>
                        </Card>
                    </aside>
                </div>

                {/* =======BACK BUTTON========= */}

                <div className="mt-10">


                    {
                        user?.role === "TENANT" ? <Link
                            href="/properties"
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                        >
                            <ArrowLeft className="size-4" />
                            Back to Properties
                        </Link>

                            : <Link
                                href={user?.role === "TENANT" ? "/dashboard"
                                    : user?.role === "LANDLORD" ? "/landlord-dashboard" : user?.role === "ADMIN" ? "/admin-dashboard" : ""
                                }
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                            >
                                <ArrowLeft className="size-4" />
                                Back to Dashboard
                            </Link>
                    }



                </div>
            </div>
        </main>
    );
}









// reusable Function
function PropertyStat({
    icon: Icon,
    value,
    label,
}: {
    icon: React.ElementType;
    value: string | number;
    label: string;
}) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 px-3 py-5 text-center">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
            </div>

            <div>
                <p className="font-semibold">
                    {value}
                </p>

                <p className="text-xs text-muted-foreground">
                    {label}
                </p>
            </div>
        </div>
    );
}
function InfoRow({
    icon: Icon,
    label,
    value,
}: {
    icon: React.ElementType;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-start gap-3 rounded-lg border p-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
            </div>

            <div className="min-w-0">
                <p className="text-xs text-muted-foreground">
                    {label}
                </p>

                <p className="mt-1 truncate text-sm font-medium">
                    {value}
                </p>
            </div>
        </div>
    );
}