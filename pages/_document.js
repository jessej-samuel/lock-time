import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-background/20">
        <Navbar />
        <div className="max-w-md sm:max-w-xl md:max-w-4xl xl:max-w-7xl  mx-auto py-8 text-base">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
