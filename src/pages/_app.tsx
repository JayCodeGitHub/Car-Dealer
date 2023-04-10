import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Car Dealer</title>
        <meta
          name="description"
          content="At our dealership, we offer the best selection of high-qualitycars, trucks, and SUVs at competitive prices. With a team ofknowledgeable and friendly sales professionals, we make it easyto find your dream car. Plus, our financing options and expertservice department ensure a hassle-free ownership experience.Visit us today and experience the difference!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
