'use client'

import { preline } from '@/utils/preline'
import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        preline.init()
    }, [])

    return <>
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
    </>
}

export default AppProvidersWrapper
