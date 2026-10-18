"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, MessageSquare } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { handleRequestDialog } from "../_actions/handleRequestDialogForm";
import { RequestToRentDialogProps } from "@/lib/rentalsTypes";



export function RequestToRentDialog({ propertyId,  }: RequestToRentDialogProps) {

  const [state, action, pending] = useActionState(handleRequestDialog, {
    success: false,
    error: {},
  })



  const [open, setOpen] = useState(false);



  useEffect(() => {

    if (state.success) {
      toast.success("Request submitted successfully ")
    }

  }, [state]);



  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button  render={<DialogTrigger />} className="h-11 w-full rounded-xl">
        Request to Rent
      </Button>

      <DialogContent className="sm:max-w-sm rounded-2xl">
        <form action={action}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Rental Request</DialogTitle>
            <DialogDescription className="sr-only">
              Fill out the form below to submit your rental request.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="py-4 gap-5">
            <Input
              type="hidden"
              name="propertyId"
              value={propertyId}
            />
            <Field>
              <Label htmlFor="moveInDate" className="flex items-center gap-2 text-sm font-medium">
                <CalendarDays className="size-4 text-muted-foreground" />
                Move-in Date
              </Label>
              <Input id="moveInDate" name="moveInDate" type="date" className="h-12 rounded-xl" />
              {state.error?.moveInDate && (
                <p className="text-sm text-red-500">
                  {state.error.moveInDate[0]}
                </p>
              )}
            </Field>

            <Field>
              <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                <MessageSquare className="size-4 text-muted-foreground" />
                Message to Landlord (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Introduce yourself or ask questions..."
                className="min-h-28 rounded-xl resize-none"
              />

            </Field>
          </FieldGroup>

          <DialogFooter className="gap-2 sm:gap-3">
            <Button render={<DialogClose />} type="button" variant="outline" className="h-11 flex-1 rounded-full">
              Cancel
            </Button>
            <Button type="submit" className="h-11 flex-1 rounded-full font-semibold">
              {pending ? "Submitting..." : "  Submit Request"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}