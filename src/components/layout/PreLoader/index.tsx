import React, { ReactNode} from "react"
import { SplashScreen } from "./SplashScreen";

import styles from "./SplashScreen.module.css";

type PreLoaderType = {
    font: string,
    children: ReactNode
}

export default function PreLoader({font, children}: PreLoaderType) {
    return (
        <body className={font}>
            <div className={styles.preloaderContainer}>
                <SplashScreen />
                {children}
            </div>
        </body>
    )
}
