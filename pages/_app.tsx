import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles/global';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
            <GlobalStyle />
        </>
    );
}

export default App;
