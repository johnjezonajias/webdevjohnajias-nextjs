"use client"

import React, { ReactNode, useEffect, useState } from "react"
import { SplashScreen } from "./SplashScreen";

type PreLoaderType = {
    font: string,
    children: ReactNode
}

export default function PreLoader({font, children}: PreLoaderType) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay (remove in production)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay as needed
    
        // Clean up the timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <body className={font}>
            {loading ? (
                <SplashScreen />
            ) : (
                <>
                    {children}
                </>
            )}
        </body>
    )
}
