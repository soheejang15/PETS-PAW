import React, { useState } from "react";

import * as S from "./index.style";

import AnimalKindSelect from "./AnimalKindSelect";
import AnimalSexSelect from "./AnimalSexSelect";
import MissingInfoSelect from "./MissingInfoSelect";
import SearchGuide from "./SearchGuide";
import { useSearchNoticeContext } from "../../data/context/SearchNoticeContext";

interface Option {
  code: string;
  name: string;
}

const SearchFilter = () => {
  // searchFilter state
  const [upKind, setUpKind] = useState<Option | null>(null);
  const [kind, setKind] = useState<Option | null>(null);
  const [sex, setSex] = useState<Option | null>(null);
  const [neutered, setNeutered] = useState<Option | null>(null);
  const [missingDate, setMissingDate] = useState<string>("");
  const [missingSido, setMissingSido] = useState<Option | null>(null);
  const [missingSigungu, setMissingSigungu] = useState<Option | null>(null);

  const { initSearchFilter, applySearchFilter, noticeCnt } =
    useSearchNoticeContext();

  const clear = () => {
    initSearchFilter();
    setKind(null);
    setUpKind(null);
    setSex(null);
    setNeutered(null);
    setMissingDate("");
    setMissingSido(null);
    setMissingSigungu(null);
  };
  const apply = () => {
    applySearchFilter({
      upKind: upKind?.code || null,
      kind: kind?.code || null,
      sex: sex?.code || null,
      neutered: neutered?.code || null,
      missingDate: missingDate === "" ? null : missingDate,
      missingSido: missingSido?.code || null,
      missingSigungu: missingSigungu?.code || null,
    });
  };

  return (
    <S.SearchFilterContainer>
      <S.TitleAndGuideContainer>
        <S.SearchFilterTitle>검색 필터</S.SearchFilterTitle>
        {/* <SearchGuide /> */}
      </S.TitleAndGuideContainer>
      <AnimalKindSelect
        upKind={upKind}
        kind={kind}
        setUpKind={setUpKind}
        setKind={setKind}
      />
      <AnimalSexSelect
        sex={sex}
        setSex={setSex}
        neutered={neutered}
        setNeutered={setNeutered}
      />
      <MissingInfoSelect
        missingDate={missingDate}
        setMissingDate={setMissingDate}
        missingSido={missingSido}
        setMissingSido={setMissingSido}
        missingSigungu={missingSigungu}
        setMissingSigungu={setMissingSigungu}
      />
      <S.ButtonAndTotalContainer>
        <S.Total>
          검색결과 총 <b>{noticeCnt}</b>건
        </S.Total>
        <div>
          <S.Button onClick={clear}>초기화</S.Button>
          <S.Button onClick={apply}>검색 조건 적용</S.Button>
        </div>
      </S.ButtonAndTotalContainer>
    </S.SearchFilterContainer>
  );
};

export default SearchFilter;
