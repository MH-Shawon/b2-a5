"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { SquarePen } from "lucide-react"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { statusChangedAction } from "../_action/statusChangedAction"
import { Input } from "@/components/ui/input"
import { usePathname, useRouter } from "next/navigation"

type StatusChangeInatial = {
    success: boolean;
    message: string;
}
const inatialzed: StatusChangeInatial = { success: false, message: "" }

export const RequestStatusManageDialog = ({ requestId }: { requestId: string }) => {
    const pathname = usePathname()
    const router = useRouter()

    const [state, actions, pending] = useActionState(statusChangedAction,
        inatialzed);

    useEffect(() => {
        if (!state.message) return

        if (state.success) {
            toast.success(state.message);
            router.replace(pathname)
        }
        if (!state.success) {
            toast.error(state.message);
             router.replace(pathname)
        }

    }, [state, pathname, router]);


    return (
        <Dialog >
            <Button variant={"secondary"} size={"sm"} render={<DialogTrigger />} className="">
                <span className="flex gap-2">Edit <SquarePen /></span>
            </Button>

            <DialogContent className="">
                <form action={actions} className="space-y-4 flex flex-col justify-center items-center">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold">Rental Request</DialogTitle>

                    </DialogHeader>

                    <Input type="hidden" name="requestId" id="requestId" value={requestId} />
                    <div className='space-y-1 flex items-center gap-3 '>

                        <NativeSelect className='text-black' name="chagedStatus" id="chagedStatus" required>

                            <NativeSelectOption value="APPROVED">APPROVED</NativeSelectOption>
                            <NativeSelectOption value="REJECTED">REJECTED</NativeSelectOption>

                        </NativeSelect>
                    </div>


                    <Button type="submit" className="h-11 rounded-full font-semibold w-full">
                        {pending ? "Submitting" : "Submit"}
                    </Button>

                </form>
            </DialogContent>
        </Dialog>
    )
}