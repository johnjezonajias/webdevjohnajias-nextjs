import React, { ReactNode} from "react"
import cn from 'classnames';
import { SplashScreen } from "./SplashScreen";

import styles from "./SplashScreen.module.css";

type PreLoaderType = {
    font: string,
    children: ReactNode
}

export default function PreLoader({font, children}: PreLoaderType) {
    return (
        <body className={cn("bg-light-base text-light-primary dark:bg-dark-base dark:text-dark-secondary", font)}>
            <div className={styles.preloaderContainer}>
                <SplashScreen />
                {children}
            </div>
        </body>
    )
}
