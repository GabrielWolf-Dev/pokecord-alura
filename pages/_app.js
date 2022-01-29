import Head from "next/head";

/* Components */
import GlobalStyle from "../src/GlobalStyle";

export default function MyApp({ Component, pageProps }){
    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                
                <title>Pokecord | Alura</title>
                <meta name="title" content="Pokecord -- Alura(Imersão React)" />
                <meta name="description" content="Projeto inspirado do discord, tem o tema de pokémon onde você pode falar tudo sobre o universo com outros devs que gostam também!" />

                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://pokecord-alura.vercel.app/" />
                <meta property="og:title" content="Pokecord -- Alura(Imersão React)" />
                <meta property="og:description" content="Projeto inspirado do discord, tem o tema de pokémon onde você pode falar tudo sobre o universo com outros devs que gostam também!" />
                <meta property="og:image" content="https://github.com/GabrielWolf-Dev/pokecord-alura/blob/main/public/assets/img/pokeball-icon.png?raw=true" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://pokecord-alura.vercel.app/" />
                <meta property="twitter:title" content="Pokecord -- Alura(Imersão React)" />
                <meta property="twitter:description" content="Projeto inspirado do discord, tem o tema de pokémon onde você pode falar tudo sobre o universo com outros devs que gostam também!" />
                <meta property="twitter:image" content="https://github.com/GabrielWolf-Dev/pokecord-alura/blob/main/public/assets/img/pokeball-icon.png?raw=true" />
            </Head>
            <GlobalStyle />

            <Component  {...pageProps} />
        </>
    );
}