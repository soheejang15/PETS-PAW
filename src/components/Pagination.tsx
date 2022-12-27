import React from "react";

import * as S from "./Pagination.style";

import { useSearchNoticeContext } from "../data/context/SearchNoticeContext";
import { getIndexList } from "../util/pagination";

const Pagination = () => {
  const { curPage, setCurPage, maxPageNum } = useSearchNoticeContext();
  const indexList = getIndexList(curPage, maxPageNum);

  const handleClickPrev = () => {
    if (curPage > 1) setCurPage(curPage - 1);
  };
  const handleClickNext = () => {
    if (maxPageNum > curPage) {
      setCurPage(curPage + 1);
    }
  };

  return (
    <S.PaginationContainer>
      <S.Arrow onClick={handleClickPrev}>{"<"}</S.Arrow>
      {indexList.map((index) => (
        <S.Index
          key={index}
          onClick={() => setCurPage(index)}
          className={curPage === index ? "selected" : ""}
        >
          {index}
        </S.Index>
      ))}
      <S.Arrow onClick={handleClickNext}>{">"}</S.Arrow>
    </S.PaginationContainer>
  );
};

export default Pagination;
