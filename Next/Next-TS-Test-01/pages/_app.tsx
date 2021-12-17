import '../styles/globals.css'
import type {AppProps} from 'next/app'
import exp from "constants";
import {useState} from "react";
function MyApp({Component, pageProps}: AppProps) {
    const [appCount, setAppCount] = useState(0);
    return (
        <Component {...pageProps} />
    )
}

export default MyApp;