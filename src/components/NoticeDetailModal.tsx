import React from "react";
import { Notice } from "../data/interface";

import * as S from "./NoticeDetailModal.style";

import { parseNeutered, parseSex } from "../util/data";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
  notice: Notice;
}

const NoticeDetailModal = ({ setIsOpen, notice }: Props) => {
  const {
    happenDt,
    happenPlace,
    kindCd,
    colorCd,
    noticeNo,
    age,
    weight,
    sexCd,
    neuterYn,
    careAddr,
    processState,
    careTel,
    careNm,
    popfile,
    specialMark,
  } = notice;

  return (
    <S.Background onClick={() => setIsOpen(false)}>
      <S.Container>
        <S.Image>
          <img src={popfile} alt="" />
        </S.Image>
        <S.Content>
          <li>
            <span>공고 번호</span>
            <span>{noticeNo}</span>
          </li>
          <li>
            <span>보호소</span>
            <span>
              {careNm}
              <br></br>
              {careAddr}
            </span>
          </li>
          <li>
            <span>보호소 전화번호</span>
            <span>{careTel}</span>
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
            <span>몸무게</span>
            <span>{weight}</span>
          </li>
          <li>
            <span>색상</span>
            <span>{colorCd}</span>
          </li>
          <li>
            <span>추정 나이</span>
            <span>{age}</span>
          </li>
          <li>
            <span>성별</span>
            <span>{parseSex(sexCd)}</span>
          </li>
          <li>
            <span>중성화 여부</span>
            <span>{parseNeutered(neuterYn)}</span>
          </li>
          <li>
            <span>특이사항</span>
            <span>{specialMark}</span>
          </li>
        </S.Content>
      </S.Container>
    </S.Background>
  );
};

export default NoticeDetailModal;
