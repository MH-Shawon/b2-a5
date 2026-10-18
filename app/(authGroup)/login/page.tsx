import React from 'react'
import LoginForm from '../_components/loginForm'
import Link from 'next/link'

function LoginPage() {
  return (
    <div className='flex justify-center items-center min-h-screen'>

      <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">


        {/* From content text */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        <LoginForm />


        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="px-0 text-green-700 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>

  )
}

export default LoginPage