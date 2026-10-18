"use client"


import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useActionState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { registerAction } from '../_actions/registerAction'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { toast } from 'sonner'


const RegisterForm = () => {

    const [state, actions, pending] = useActionState(registerAction, false);

    useEffect(() => {
        if (!state) return

        if (state.success) {
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }

    }, [state]);

    return (
        <form action={actions} className='space-y-3'>
            <Card className="p-5 space-y-3">

                <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                    <div className='space-y-1'>
                        <Label htmlFor="name">Name*</Label>
                        <Input name="name" id="name" type="text" placeholder="John Doe" required />
                    </div>

                    <div className='space-y-1'>
                        <Label htmlFor="email">Email*</Label>
                        <Input name="email" id="email" type="email" placeholder="m@example.com" required />
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                    <div className='space-y-1'>
                        <Label htmlFor="password">Password*</Label>
                        <Input name="password" id="password" type="password" placeholder='* * * * * *' required />
                    </div>

                    <div className='space-y-1'>
                        <Label htmlFor="phone">Phone</Label>
                        <Input name="phone" id="phone" type="tel" placeholder='012....' required />
                    </div>
                </div>

                <div className='space-y-1 flex items-center gap-3 text-red-400'>
                    <Label htmlFor="role">Select Your Role*</Label>
                    <NativeSelect className='text-black' name="role" id="role" required>
                        <NativeSelectOption value="TENANT">TENANT</NativeSelectOption>
                        <NativeSelectOption value="LANDLORD">LANDLORD</NativeSelectOption>
                    </NativeSelect>
                </div>

                <Button type='submit' className='w-full'>{pending ? "Submitting..." : "Register"}</Button>
            </Card>
        </form>
    )
}

export default RegisterForm