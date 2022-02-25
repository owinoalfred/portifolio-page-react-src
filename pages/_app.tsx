import type { AppProps } from "next/app";
import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Alfred | owino | Python Developer | "
        titleTemplate="Alfred |Full-Stack Dev"
        defaultTitle="Alfred  | Python Dev, Javascript Dev, GCP enthusiast"
        description="Hey! I'm Alfred, A python develoiper making desktop and mobile apps as well as websites!"
        openGraph={{
          url: "https://www.owino.cc",
          title: "Alfred | Fullstack python  Developer (Tkinter and Kivy)",
          description:
            "Hey! I'm Alfred, A Python Developer recently learning to build Artificial inteligence machine learning models that could shape out hand held devices !",
          images: [
            {
              url: "https://avatars.githubusercontent.com/u/59254825?s=40&v=4",
              width: 800,
              height: 420,
              alt: "Alfred | Python | React | Vue | Tailwindcss ",
            },
          ],
        }}
        twitter={{
          handle: "@kr_anurag_",
          site: "@kr_anurag_",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, anurag, anuragkr, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/59254825?s=40&v=4" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
