import React from "react";

import RadioGroup from "../customInputs/RadioGroup";

import * as S from "./index.style";

import { SEX_OPTIONS, NEUTERED_OPTIONS } from "../../constant/options";

interface Option {
  code: string;
  name: string;
}

interface Props {
  sex: Option | null;
  setSex: (sex: Option | null) => void;
  neutered: Option | null;
  setNeutered: (neutered: Option | null) => void;
}

const AnimalSexSelect = ({ sex, setSex, neutered, setNeutered }: Props) => {
  return (
    <div>
      <div>
        <S.FilterName>성별</S.FilterName>
        <S.CheckBoxContainer>
          <RadioGroup
            options={SEX_OPTIONS}
            selectedOption={sex}
            setSelectedOption={setSex}
          />
        </S.CheckBoxContainer>
      </div>
      <div>
        <S.FilterName>중성화 여부</S.FilterName>
        <S.CheckBoxContainer>
          <RadioGroup
            options={NEUTERED_OPTIONS}
            selectedOption={neutered}
            setSelectedOption={setNeutered}
          />
        </S.CheckBoxContainer>
      </div>
    </div>
  );
};

export default AnimalSexSelect;
