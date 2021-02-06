import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

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
    // <Layout home>
    <>
      <Head>{/* <title>{siteTitle}</title> */}</Head>
      <header></header>
      <main></main>
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
