import React from "react";

import CheckBox from "./CheckBox";

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: Option[];
  selectedOption: null | Option;
  setSelectedOption: (option: Option | null) => void;
}

const RadioGroup = ({
  options,
  selectedOption,
  setSelectedOption,
}: RadioGroupProps) => {
  const onChangeSelectOption = (option: Option) => {
    if (selectedOption?.value === option.value) setSelectedOption(null);
    else setSelectedOption(option);
  };

  return (
    <>
      {options.map((option) => (
        <CheckBox
          key={option.value}
          label={option.label}
          value={option.value}
          onChange={() => onChangeSelectOption(option)}
          isSelected={selectedOption?.value === option.value}
        />
      ))}
    </>
  );
};

export default RadioGroup;
