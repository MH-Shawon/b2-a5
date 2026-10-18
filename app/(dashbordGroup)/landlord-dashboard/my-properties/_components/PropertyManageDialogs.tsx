"use client"


import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Field, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { Textarea } from '@/components/ui/textarea'
import { ICategory } from '@/lib/category'
import { Building2, ImagePlus, MapPin, Plus } from 'lucide-react'
import { useActionState, useEffect, useRef } from 'react'
import { propertyCreateAction } from '../_actions/propertyCreateAction'
import { PropertyCreateState } from '@/lib/type'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'







const initialState: PropertyCreateState = {
    success: false,
    statusCode: 0,
    message: "",
    data: null,
    errors: {},
};
export default function PropertyManageDialogs({ categories }: { categories: ICategory[] }) {

    const [state, action, isPending] = useActionState(propertyCreateAction, initialState);
    // const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter()



    useEffect(() => {
        if (!state.message) return;

        if (state.success && state.data) {
            toast.success(state.message);

            // formRef.current?.reset();
            router.push("/landlord-dashboard/my-properties")
        } else {
            toast.error(state.message);
        }
    }, [state, router]);






    return (
        <Dialog >
            {/* Trigger */}
            <Button
                render={<DialogTrigger />}
                className="w-full rounded-xl font-semibold shadow-2xl sm:w-auto"
            >
                <Plus className="size-5" />
                Add Property
            </Button>

            {/* Dialog */}
            <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl sm:max-w-2xl">
                <DialogHeader className=''>
                    <DialogTitle className="text-xl font-bold">
                        Add New Property
                    </DialogTitle>

                    <DialogDescription>
                        Add the details of your rental property below.
                    </DialogDescription>
                </DialogHeader>
                <form action={action} >


                    <FieldGroup className="gap-5 py-5">
                        {/* Title */}
                        <Field>
                            <Label htmlFor="title" className="flex items-center gap-2">
                                <Building2 className="size-4 text-muted-foreground" />
                                Property Title
                            </Label>

                            <Input id="title" name="title" placeholder="e.g. Big size duplex Home" className="h-11 rounded-xl" />

                            {state.errors?.title && (
                                <p className="text-sm text-destructive">
                                    {state.errors?.title}
                                </p>
                            )}

                        </Field>

                        {/* Description */}
                        <Field>
                            <Label htmlFor="description">Description</Label>

                            <Textarea id="description" name="description" placeholder="Describe your property..." className="min-h-28 resize-none rounded-xl" />

                            {state.errors?.description && (
                                <p className="text-sm text-destructive">
                                    {state.errors?.description}
                                </p>
                            )}


                        </Field>

                        {/* Price + Size */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                                <Label htmlFor="price">Monthly Rent</Label>

                                <Input id="price" name="price" type="number" min="0" placeholder="12000" className="h-11 rounded-xl" />

                                {state.errors?.price && (
                                    <p className="text-sm text-destructive">
                                        {state.errors?.price}
                                    </p>
                                )}
                            </Field>

                            <Field>
                                <Label htmlFor="size">Property Size (sqft)</Label>

                                <Input id="size" name="size" type="number" min="0" placeholder="1350" className="h-11 rounded-xl" />

                                {state.errors?.size && (
                                    <p className="text-sm text-destructive">
                                        {state.errors?.size}
                                    </p>
                                )}
                            </Field>
                        </div>

                        {/* Location + City */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                                <Label htmlFor="location" className="flex items-center gap-2">
                                    <MapPin className="size-4 text-muted-foreground" />
                                    Location
                                </Label>

                                <Input id="location" name="location" placeholder="Road 15, Chittagong" className="h-11 rounded-xl" />

                                {state.errors?.location && (
                                    <p className="text-sm text-destructive">
                                        {state.errors?.location}
                                    </p>
                                )}
                            </Field>

                            <Field>
                                <Label htmlFor="city">City</Label>

                                <Input id="city" name="city" placeholder="Chittagong" className="h-11 rounded-xl" />

                                {state.errors?.city && (
                                    <p className="text-sm text-destructive">
                                        {state.errors?.city}
                                    </p>
                                )}
                            </Field>
                        </div>

                        {/* Bedrooms + Bathrooms */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                                <Label htmlFor="bedrooms">Bedrooms</Label>

                                <Input id="bedrooms" name="bedrooms" type="number" min="0" placeholder="2" className="h-11 rounded-xl" />

                                {state.errors?.bedrooms && (
                                    <p className="text-sm text-destructive">
                                        {state.errors?.bedrooms}
                                    </p>
                                )}
                            </Field>

                            <Field>
                                <Label htmlFor="bathrooms">Bathrooms </Label>

                                <Input id="bathrooms" name="bathrooms" type="number" min="0" placeholder="2" className="h-11 rounded-xl" />

                                {state.errors?.bathrooms && (
                                    <p className="text-sm text-destructive">
                                        {state.errors?.bathrooms}
                                    </p>
                                )}
                            </Field>
                        </div>

                        {/* Amenities */}
                        <Field>
                            <Label htmlFor="amenities">Amenities</Label>

                            <Input
                                id="amenities"
                                name="amenities"
                                placeholder="Security, WiFi, Parking"
                                className="h-11 rounded-xl"
                            />

                            <p className="text-xs text-muted-foreground">
                                Separate multiple amenities with commas.
                            </p>

                            {state.errors?.amenities && (
                                <p className="text-sm text-destructive">
                                    {state.errors?.amenities}
                                </p>
                            )}
                        </Field>

                        {/* Images */}
                        <Field>
                            <Label htmlFor="images" className="flex items-center gap-2">
                                <ImagePlus className="size-4 text-muted-foreground" />
                                Image URL
                            </Label>

                            <Input id="images" name="images" type="url" placeholder="https://example.com/property.jpg" className="h-11 rounded-xl" />

                            <p className="text-xs text-muted-foreground">
                                Add an image URL for your property.
                            </p>

                            {state.errors?.images && (
                                <p className="text-sm text-destructive">
                                    {state.errors?.images}
                                </p>
                            )}
                        </Field>

                        {/* Availability + Category */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            {/* Availability */}
                            <Field className="space-y-2">
                                <Label htmlFor="availability">Availability</Label>

                                <NativeSelect
                                    className="h-11 rounded-xl text-black" name="availability" id="availability">
                                    <NativeSelectOption value="">
                                        Select Availability
                                    </NativeSelectOption>

                                    <NativeSelectOption value="AVAILABLE">
                                        Available
                                    </NativeSelectOption>

                                    <NativeSelectOption value="RENTED">
                                        Rented
                                    </NativeSelectOption>

                                    <NativeSelectOption value="UNAVAILABLE">
                                        Unavailable
                                    </NativeSelectOption>
                                </NativeSelect>

                                {state.errors?.availability && (
                                    <p className="text-sm text-destructive">
                                        {state.errors?.availability}
                                    </p>
                                )}
                            </Field>

                            {/* Category */}
                            <Field className="space-y-2">
                                <Label htmlFor="categoryId">Select Category</Label>

                                <NativeSelect
                                    className="h-11 rounded-xl text-black"
                                    name="categoryId"
                                    id="categoryId"

                                >
                                    <NativeSelectOption value="">
                                        Select Category
                                    </NativeSelectOption>

                                    {categories.map((category) => (
                                        <NativeSelectOption
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </NativeSelectOption>
                                    ))}



                                </NativeSelect>

                                {state.errors?.categoryId && (
                                    <p className="text-sm text-destructive">
                                        {state.errors?.categoryId}
                                    </p>
                                )}
                            </Field>
                        </div>
                    </FieldGroup>

                    {/* Footer */}
                    <DialogFooter className="gap-2 sm:gap-3">
                        <Button
                            render={<DialogClose className={'sticky top-0'} />}
                            type="button"
                            variant="outline"
                            className="h-11 flex-1 rounded-full">
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            className="h-11 flex-1 rounded-full font-semibold"
                        >
                            {isPending
                                ? "Creating..."
                                : "Create Property"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
