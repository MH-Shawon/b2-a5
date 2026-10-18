import Link from "next/link";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import MyPropertiesTable from "./LandLordPropertyCard";
import { IPropertiesCardProps } from "@/lib/type";
import { getCategories } from "@/service/category/getAllCategory";
import PropertyManageDialogs from "./PropertyManageDialogs";


export default async function LandlordProperties({ properties = [] }: IPropertiesCardProps) {

    const categories = await getCategories();


    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>
                        My Properties
                    </CardTitle>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Recently added and managed properties.
                    </p>
                </div>

                <PropertyManageDialogs categories={categories.data} />
            </CardHeader>

            <CardContent>
                <div className="">
                    <MyPropertiesTable categories={categories.data} properties={properties ?? []} />
                </div>
            </CardContent>
        </Card>
    );
}



