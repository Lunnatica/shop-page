import { NextPageContext } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { SearchResultsLayout } from '../components/SearchResultsLayout';
import { LikesContextProvider } from '../contexts/LikesContext';

const MetaTags = () => {
    const metaUrl = 'http://localhost:3000/';
    const metaDescription = 'This is a test site for shopping results';
    const metaTitle = 'The test shop';
    const metaImage = 'http://localhost:3000/logo.svg';

    return (
        <Head>
            <link rel="canonical" href={metaUrl} />
            <title>{metaTitle}</title>
            <meta name="Description" content={metaDescription} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={metaUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:card" content="summary" />
        </Head>
    );
};

export default function Home({ errorCode, results }) {
    return (
        <>
            <MetaTags />
            <LikesContextProvider>
                <Header />
                <SearchResultsLayout errorCode={errorCode} results={results} />
            </LikesContextProvider>
        </>
    );
}

export async function getServerSideProps(context: NextPageContext) {
    try {
        // const url = `https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products`; // uncomment this line and comment next to use original API
        const baseUrl = process.env.API_BASE_URL ?? 'http://localhost:3000';
        const url = `${baseUrl}/api/results`;

        const response = await fetch(url, {
            method: 'GET',
        });

        const errorCode = !response.ok ? response.status : null;
        if (errorCode && context.res) context.res.statusCode = errorCode;
        const results = await response.json();

        if (errorCode) {
            return {
                props: { errorCode, results },
            };
        } else {
            return {
                props: { results },
            };
        }
    } catch (error) {
        console.error(
            'Error when retrieving the search results: ',
            error.message
        );
        return {
            props: { errorCode: 404 },
        };
    }
}
