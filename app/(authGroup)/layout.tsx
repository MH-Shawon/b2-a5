
import Footer from '@/components/shared/footer'
import { NavBar } from '@/components/shared/navbar'
import { getMe } from '@/service/getMe'
import React from 'react'

const AuthGroupLayout = async ({ children, }: { children: React.ReactNode }) => {

    const user = await getMe();

    return (
        <div >
            <NavBar user={user} />

            {children}

  <Footer />
        </div>
    )
}

export default AuthGroupLayout