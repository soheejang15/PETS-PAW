import React, { useState } from "react";

import * as S from "./NoticeListItem.style";

import { Notice } from "../data/interface";

import NoticeDetailModal from "./NoticeDetailModal";
import PortalModal from "./PortalModal";

const NoticeListItem = (notice: Notice) => {
  const {
    popfile,
    careNm,
    happenDt,
    happenPlace,
    kindCd,
    sexCd,
    neuterYn,
    specialMark,
  } = notice;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.NoticeListItemContainer>
      <S.NoticeListItemImage>
        <img src={popfile} alt="" />
      </S.NoticeListItemImage>
      <S.NoticeListItemContent>
        <li>
          <span>보호소</span>
          <span>{careNm}</span>
        </li>
        <li>
          <span>접수일</span>
          <span>{happenDt}</span>
        </li>
        <li>
          <span>발견장소</span>
          <span>{happenPlace}</span>
        </li>
        <li>
          <span>축종</span>
          <span>{kindCd}</span>
        </li>
        <li>
          <span>성별</span>
          <span>{sexCd}</span>
        </li>
        <li>
          <span>중성화 여부</span>
          <span>{neuterYn}</span>
        </li>
        <li>
          <span>특이사항</span>
          <span>{specialMark}</span>
        </li>
        <S.DetailBtn onClick={() => setIsOpen(true)}>자세히보기</S.DetailBtn>
        {isOpen && (
          <PortalModal>
            <NoticeDetailModal setIsOpen={setIsOpen} notice={notice} />
          </PortalModal>
        )}
      </S.NoticeListItemContent>
    </S.NoticeListItemContainer>
  );
};

export default NoticeListItem;
