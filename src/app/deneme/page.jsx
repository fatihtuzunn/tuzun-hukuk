"use client"

import { useSession } from 'next-auth/react'
import React from 'react'




export default function page() {




    const session = useSession()


    if (session.status === "unauthenticated") {
        return <p>gireme.</p>;
    }
    if (session.status === "loading") {
        return <p>loading</p>;
    }
    if (session.status = "authenticated") {
        return (
            <div>page</div>
        )
    }


}
