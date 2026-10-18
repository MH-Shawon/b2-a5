import { Button } from '@/components/ui/button'
import React from 'react'
import RegisterForm from '../_components/registerForm'
import Link from 'next/link'

function RegisterPage() {
  return (
    <div className='flex justify-center items-center min-h-screen'>

      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">


        {/* From content text */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Create Your Account</h1>
          <p className="text-muted-foreground">
            Enter your credentials to create your account
          </p>
        </div>

        
<RegisterForm />

        <p className="text-sm text-muted-foreground">
        Already Have an account? please{' '}
          <Link href="/login" className="px-0 text-green-700 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage