"use client";

import { useActionState, useEffect, useState } from "react";
import { Plus } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CategoryCreateState } from "@/lib/AdminType";
import { categoryCreateAction } from "../_actions/categoryCreateAction";
import { toast } from "sonner";

const initialState: CategoryCreateState = {
    success: false,
    statusCode: 0,
    message: "",
    data: null,
};



export default function CategoryCreateDialog() {
    const [open, setOpen] = useState(false);

    const [state, action, isPending] = useActionState(
        categoryCreateAction,
        initialState
    );





    useEffect(() => {
        if (!state.message) return;

        if (state.success) {
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* Trigger */}
            <Button variant={"default"} size={"sm"} render={<DialogTrigger />} className="">
                <Plus className="size-4" />
                Create Category

            </Button>

            {/* Dialog */}
            <DialogContent className="rounded-2xl sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        Create Category
                    </DialogTitle>

                    <DialogDescription>
                        Add a new property category.
                    </DialogDescription>
                </DialogHeader>

                <form action={action} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            Category Name
                        </Label>

                        <Input
                            id="name"
                            name="name"
                            placeholder="e.g. Apartment"
                            className="h-11 rounded-xl"
                        />
                    </div>

                    <DialogFooter className="gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="rounded-xl"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={isPending}
                            className="rounded-xl"
                        >
                            <Plus className="size-4" />

                            {isPending
                                ? "Creating..."
                                : "Create Category"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    );
}