import React, { useState } from "react";

import * as S from "./CheckBox.style";

interface CheckBoxProps {
  label: string;
  value: string;
  onChange: () => void;
  isSelected: boolean;
}

const CheckBox = ({ label, isSelected, onChange }: CheckBoxProps) => {
  return (
    <S.Container onClick={onChange}>
      <S.Input
        type="checkbox"
        checked={isSelected}
        onChange={onChange}
        id={label}
      />
      <S.CheckBox htmlFor={label} checked={isSelected} />
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};

export default CheckBox;
