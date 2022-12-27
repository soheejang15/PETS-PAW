import React from "react";
import { useSearchNoticeContext } from "../data/context/SearchNoticeContext";
import { useGetNoticeList } from "../data/useFetch";

import * as S from "./NoticeList.style";

import NoticeListItem from "./NoticeListItem";
import NoticeListItemSkeleton from "./NoticeListItemSkeleton";
import Pagination from "./Pagination";

const NoticeList = () => {
  const { curPage, searchFilter, setMaxPageNum } = useSearchNoticeContext();

  const { noticeList, isLoading } = useGetNoticeList(
    curPage,
    searchFilter,
    setMaxPageNum
  );

  const list = () => {
    if (isLoading) {
      return Array(10)
        .fill(null)
        .map((_, i) => <NoticeListItemSkeleton key={i} />);
    }

    return noticeList?.map((notice) => (
      <NoticeListItem {...notice} key={notice.desertionNo} />
    ));
  };

  return (
    <S.Container>
      <S.NoticeListContainer>{list()}</S.NoticeListContainer>
      <Pagination />
    </S.Container>
  );
};

export default NoticeList;
