//  Internal Dependencies
import { Layout } from "@components/Layout";

//  Types & Interface
import type { AppProps } from "next/app";

//  Styles
import "../styles/globals.css";
import "../styles/customPagination.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
