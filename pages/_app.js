import Head from "next/head";

/* Components */
import GlobalStyle from "../components/GlobalStyle";

export default function MyApp({ Component, pageProps }){
    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />

            <Component  {...pageProps} />
        </>
    );
}