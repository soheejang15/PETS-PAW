import React from "react";
import SingleSelect from "../customInputs/SingleSelect";

import { useGetSidoQuery, useGetSigunguQuery } from "../../data/useFetch";

import * as S from "./index.style";

interface Option {
  label: string;
  value: string;
}

interface Props {
  missingDate: string;
  missingSido: Option | null;
  missingSigungu: Option | null;
  setMissingDate: (date: string) => void;
  setMissingSido: (sido: Option | null) => void;
  setMissingSigungu: (sigungu: Option | null) => void;
}

const MissingInfoSelect = ({
  missingDate,
  missingSido,
  missingSigungu,
  setMissingDate,
  setMissingSido,
  setMissingSigungu,
}: Props) => {
  const { sidoList } = useGetSidoQuery();
  const { sigunguList } = useGetSigunguQuery(missingSido?.value || null);

  const changeSido = (sido: Option | null) => {
    setMissingSigungu(null);
    setMissingSido(sido);
  };

  return (
    <div>
      <div>
        <S.FilterName>실종일자</S.FilterName>
        <S.DateInput
          type="date"
          // value={missingDate}
          onChange={(e) => setMissingDate(e.target.value.replaceAll("-", ""))}
        />
      </div>
      <div>
        <S.FilterName>실종 지역(발견 예상 지역)</S.FilterName>
        <S.MissingRegionContainer>
          <SingleSelect
            selectedOption={missingSido}
            options={
              sidoList?.map((sido) => ({
                label: sido.orgdownNm,
                value: sido.orgCd,
              })) || []
            }
            onChange={changeSido}
            isSearchable={true}
          />
          {missingSido && (
            <SingleSelect
              selectedOption={missingSigungu}
              options={
                sigunguList?.map((sigungu) => ({
                  label: sigungu.orgdownNm,
                  value: sigungu.orgCd,
                })) || []
              }
              onChange={setMissingSigungu}
              isSearchable={true}
            />
          )}
        </S.MissingRegionContainer>
      </div>
    </div>
  );
};

export default MissingInfoSelect;
