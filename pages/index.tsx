import Head from 'next/head';
import { GetStaticProps } from 'next';
import { SearchResultsLayout } from '../components/SearchResultsLayout';

const MetaTags = () => {
    const metaUrl = 'http://localhost:3000/';
    const metaDescription = 'This is a test site for shopping results';
    const metaTitle = 'The test site';
    const metaImage = 'http://localhost:3000/logo.svg';

    return (
        <Head>
            <link rel="canonical" href={metaUrl} />
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

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}) {
    return (
        <>
            <MetaTags />
            <header>Hola</header>
            <SearchResultsLayout />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    // const allPostsData = getSortedPostsData();
    return {
        props: {
            // allPostsData,
        },
    };
};
