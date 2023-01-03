import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "../src/style/global";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { SearchNoticeContextProvider } from "../src/data/context/SearchNoticeContext";

import Header from "../src/components/Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
      cacheTime: 1000 * 60 * 5,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchNoticeContextProvider>
        <GlobalStyle />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </SearchNoticeContextProvider>
    </QueryClientProvider>
  );
}
