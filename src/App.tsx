import React from "react";

import GlobalStyle from "./style/global";

import { SearchNoticeContextProvider } from "./data/context/SearchNoticeContext";

import Header from "./components/Header";
import MainPage from "./page/Main";

const App: React.FC = () => (
  <SearchNoticeContextProvider>
    <GlobalStyle />
    <Header />
    <main>
      <MainPage />
    </main>
  </SearchNoticeContextProvider>
);

export default App;
