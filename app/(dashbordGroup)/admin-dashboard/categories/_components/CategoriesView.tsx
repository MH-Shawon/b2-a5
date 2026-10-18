"use client";

import { Tags } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import CategoryCreateDialog from "./CategoryCreateDialog";
import { ICategory } from "@/lib/category";


export default  function CategoriesView({categories}:{categories:ICategory[]}) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Categories
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Manage property categories.
                    </p>
                </div>

                <CategoryCreateDialog />
            </div>

            {/* Categories */}
            <Card className="rounded-2xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Tags className="size-5" />
                        Property Categories
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    {categories.length === 0 ? (
                        <div className="flex min-h-32 flex-col items-center justify-center gap-2 text-center">
                            <Tags className="size-8 text-muted-foreground" />

                            <p className="font-medium">
                                No categories found
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Create your first property category.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className="flex items-center justify-between rounded-xl border p-4 transition-colors hover:bg-muted/50"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
                                            <Tags className="size-4 text-muted-foreground" />
                                        </div>

                                        <span className="font-medium">
                                            {category.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}