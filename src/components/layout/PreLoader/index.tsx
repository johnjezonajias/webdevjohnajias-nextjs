'use client'

import React, { ReactNode} from 'react'
import { usePathname  } from 'next/navigation';
import { SplashScreen } from './SplashScreen';
import cn from 'classnames';

import styles from './SplashScreen.module.css';
import useLenisGsap from '@/hooks/useLenisGsap';

type PreLoaderType = {
    font: string,
    children: ReactNode
}

export default function PreLoader({font, children}: PreLoaderType) {
    const isHomePage = usePathname() === '/';
    useLenisGsap();

    return (
        <body className={cn("bg-light-base text-light-primary dark:bg-dark-base dark:text-dark-secondary", font)}>
            {isHomePage && <div className={styles.preloaderContainer}><SplashScreen /></div>}
            {children}
        </body>
    )
}
