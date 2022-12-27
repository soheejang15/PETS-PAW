import React, { ReactNode, useContext } from "react";
import { createContext, useState } from "react";
import { Notice } from "../../data/interface";

const initialContext = Symbol("initial searchNoticeContext");
export const searchNoticeContext = createContext<
  SearchNoticeContext | typeof initialContext
>(initialContext);

interface SearchFilter {
  upKind: string | null;
  kind: string | null;
  sex: string | null;
  neutered: string | null;
  missingDate: string | null;
  missingSido: string | null;
  missingSigungu: string | null;
}

interface SearchNoticeContext {
  curPage: number;
  setCurPage: (page: number) => void;
  searchFilter: SearchFilter;
  initSearchFilter: () => void;
  applySearchFilter: (searchFilter: SearchFilter) => void;
  maxPageNum: number;
  setMaxPageNum: (max: number) => void;
  noticeCnt: number;
  setNoticeCnt: (cnt: number) => void;
  selectedNotice: Notice | null;
  setSelectedNotice: (notice: Notice | null) => void;
}

const initialSearchFilter = {
  upKind: null,
  kind: null,
  sex: null,
  neutered: null,
  missingDate: null,
  missingSido: null,
  missingSigungu: null,
};

export const SearchNoticeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [curPage, setCurPage] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(1);
  const [noticeCnt, setNoticeCnt] = useState(0);
  const [searchFilter, setSearchFilter] =
    useState<SearchFilter>(initialSearchFilter);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const initSearchFilter = () => {
    setSearchFilter(initialSearchFilter);
  };

  const applySearchFilter = (newSearchFilter: SearchFilter) => {
    setSearchFilter(newSearchFilter);
    setCurPage(1);
  };

  return (
    <searchNoticeContext.Provider
      value={{
        curPage,
        setCurPage,
        searchFilter,
        initSearchFilter,
        applySearchFilter,
        maxPageNum,
        setMaxPageNum,
        selectedNotice,
        setSelectedNotice,
        noticeCnt,
        setNoticeCnt,
      }}
    >
      {children}
    </searchNoticeContext.Provider>
  );
};

export const useSearchNoticeContext = () => {
  const result = useContext(searchNoticeContext);

  if (result === initialContext) {
    throw new Error("searchNoticeContext is not defined");
  }

  return result;
};
