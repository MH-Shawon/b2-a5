"use client";

import { Search, SlidersHorizontal, RotateCcw, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";


export default function PropertyFilters() {



    const pathname = usePathname()
    const searchParamsHook = useSearchParams()
    const searchValue = searchParamsHook.get("title") as string || ""
    const router = useRouter()

    const debouncedRefrence = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [titleValue, setTitileValue] = useState(searchValue)
    const formRef = useRef<HTMLFormElement>(null);





    const handleSearch = (value: string) => {
        setTitileValue(value)
        if (debouncedRefrence.current) {
            clearTimeout(debouncedRefrence.current)
        }
        debouncedRefrence.current = setTimeout(() => {

            const params = new URLSearchParams(searchParamsHook.toString())
            if (value) {
                params.set("title", value)
            }
            else {
                params.delete("title")
            }

            params.set("page", "1");
            router.replace(`${pathname}?${params.toString()}`)
        }, 500);

    }


    const handleFilters = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const params = new URLSearchParams(searchParamsHook.toString());


        const type = formData.get("type") as string;
        const city = formData.get("city") as string;
        const location = formData.get("location") as string;
        const minPrice = formData.get("minPrice") as string;
        const maxPrice = formData.get("maxPrice") as string;



        if (type) {
            params.set("type", type);
        } else {
            params.delete("type");
        }

        if (city) {
            params.set("city", city);
        } else {
            params.delete("city");
        }

        if (location) {
            params.set("location", location);
        } else {
            params.delete("location");
        }

        if (minPrice) {
            params.set("minPrice", minPrice);
        } else {
            params.delete("minPrice");
        }

        if (maxPrice) {
            params.set("maxPrice", maxPrice);
        } else {
            params.delete("maxPrice");
        }

        params.set("page", "1");
        router.replace(`${pathname}?${params.toString()}`);

    };




    useEffect(() => {
        return () => {
            if (debouncedRefrence.current) {
                clearTimeout(debouncedRefrence.current);
            }
        }
    }, [])



    const handleReset = () => {
        // formRef.current?.reset()
        formRef.current?.reset()

        router.replace(pathname);
    };


    return (
        <div>
            {/* Search */}
            <div className="relative border-2 mb-10 p-3 rounded-2xl ">
                <Search className="absolute  left-6 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    value={titleValue}
                    onChange={(e) => { handleSearch(e.target.value) }}
                    name="title"
                    placeholder="Search properties by title..."
                    className="h-12 pl-9"
                />
            </div>
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">

                {/* Header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-2">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <SlidersHorizontal className="size-4" />
                        </div>

                        <div>
                            <h2 className="font-semibold">Find a property</h2>
                            <p className="text-sm text-muted-foreground">
                                Filter properties based on your needs
                            </p>
                        </div>
                    </div>

                    <Button
                        onClick={handleReset}
                        variant="secondary"
                        size="sm"
                        className="w-fit gap-2 font-semibold  hover:text-primary"
                    >
                        <RotateCcw className="size-4 " />
                        Reset
                    </Button>
                </div>

                {/* Filters */}
                <form ref={formRef} onSubmit={handleFilters} className="mt-5  space-y-5">
                    <Select name="type">
                        <SelectTrigger className="h-12 w-full p-5">
                            <SelectValue placeholder="Property Category" />
                        </SelectTrigger>

                        <SelectContent  >
                            <SelectItem value="">No Category</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="studio">Studio</SelectItem>
                            <SelectItem value="duplex">Duplex</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* City */}
                    <Select name="city">
                        <SelectTrigger className="h-12 p-5 w-full">
                            <SelectValue placeholder="City" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="">No City</SelectItem>

                            <SelectItem value="dhaka">Dhaka</SelectItem>
                            <SelectItem value="chittagong">Chittagong</SelectItem>
                            <SelectItem value="khulna">Khulna</SelectItem>
                            <SelectItem value="jashore">Jashore</SelectItem>
                            <SelectItem value="rajshahi">Rajshahi</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Location */}
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            name="location"
                            placeholder="Location / Area"
                            className="h-12 pl-9"
                        />
                    </div>

                    {/* Min Price */}
                    <Input
                        name="minPrice"
                        type="number"
                        placeholder="Minimum price"
                        className="h-12"
                    />

                    {/* Max Price */}
                    <Input
                        name="maxPrice"
                        type="number"
                        placeholder="Maximum price"
                        className="h-12"
                    />

                    {/* Apply Button */}

                    <Button type="submit" className="h-12 gap-2 w-full ">
                        <Search className="size-4" />
                        {"  Apply Filters"}
                    </Button>

                </form>

            </div>
        </div>
    );
}