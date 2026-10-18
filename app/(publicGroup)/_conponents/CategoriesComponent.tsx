"use client"


import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BedDoubleIcon, Building2, Home as HomeIcon } from 'lucide-react';
import { CgStudio } from 'react-icons/cg';



export interface TCategories {
    id?: string;
    name: string;
    createdAt?: string
}

interface TCategoriesProps {
    categories: TCategories[]
}



const CategoriesComponent = ({ categories }: TCategoriesProps) => {




    return (
        <section className="border-y bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Browse by category
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Find the right property for you
                    </h2>

                    <p className=" mt-2 text-muted-foreground">
                        Choose from different types of properties based on your needs
                        and lifestyle.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">
                    {categories.map((category) => {


                        return (
                            <Card
                                key={category.name}
                                className=" group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                            >
                                <CardContent className="p-7 text-center flex flex-col items-center justify-center">
                                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <div className="size-7">
                                            {category.name === "Apartments" ? <Building2  /> :""}
                                            {category.name === "House" ? <HomeIcon /> :""}
                                            {category.name === "Studio" ? <CgStudio className='size-7' /> :""}
                                            {category.name === "Dublex" ? <BedDoubleIcon /> :""}
                                        </div>
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        {category.name}
                                    </h3>

                                    <p className="mt-2 leading-6 text-muted-foreground">
                                        {/* {category.description} */}
                                    </p>

                                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                                        Explore
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoriesComponent;