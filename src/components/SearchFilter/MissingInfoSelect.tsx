import React, { ChangeEvent } from "react";
import SingleSelect from "../customInputs/SingleSelect";

import { useGetSidoQuery, useGetSigunguQuery } from "../../data/useFetch";
import { parseStringToDate } from "../../util/data";

import * as S from "./index.style";

interface Option {
  name: string;
  code: string;
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
  const { sigunguList } = useGetSigunguQuery(missingSido?.code || null);

  const changeSido = (sido: Option | null) => {
    setMissingSigungu(null);
    setMissingSido(sido);
  };

  const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const today = new Date();
    const selectedDay = new Date(e.target.value);
    if (today >= selectedDay) {
      setMissingDate(e.target.value.replaceAll("-", ""));
    }
  };

  return (
    <div>
      <div>
        <S.FilterName>실종일자</S.FilterName>
        <S.DateInput
          type="date"
          value={parseStringToDate(missingDate)}
          onChange={changeDate}
        />
      </div>
      <div>
        <S.FilterName>실종 지역(발견 예상 지역)</S.FilterName>
        <S.MissingRegionContainer>
          <SingleSelect
            selectedOption={missingSido}
            options={sidoList || []}
            onChange={changeSido}
            isSearchable={true}
          />
          {missingSido && (
            <SingleSelect
              selectedOption={missingSigungu}
              options={sigunguList || []}
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
