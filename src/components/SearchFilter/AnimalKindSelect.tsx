import React from "react";

import * as S from "./index.style";

import RadioGroup from "../customInputs/RadioGroup";
import SingleSelect from "../customInputs/SingleSelect";

import { UPKIND_OPTIONS } from "../../constant/options";
import { useGetKind } from "../../data/useFetch";

interface Props {
  upKind: Option | null;
  kind: Option | null;
  setUpKind: (upKind: Option | null) => void;
  setKind: (kind: Option | null) => void;
}

interface Option {
  code: string;
  name: string;
}

const AnimalKindSelect = ({ upKind, kind, setUpKind, setKind }: Props) => {
  const { kindList } = useGetKind(upKind?.code || null);

  const changeUpKind = (upKind: Option | null) => {
    setKind(null);
    setUpKind(upKind);
  };

  return (
    <div>
      <div>
        <S.FilterName>축종/품종</S.FilterName>
        <S.CheckBoxContainer>
          <RadioGroup
            options={UPKIND_OPTIONS}
            selectedOption={upKind}
            setSelectedOption={changeUpKind}
          />
          {(upKind?.code === "417000" || upKind?.code === "422400") && (
            <SingleSelect
              selectedOption={kind}
              onChange={setKind}
              options={kindList || []}
              isSearchable={true}
            />
          )}
        </S.CheckBoxContainer>
      </div>
    </div>
  );
};

export default AnimalKindSelect;
