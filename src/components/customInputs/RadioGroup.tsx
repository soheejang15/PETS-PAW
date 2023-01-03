import React from "react";

import CheckBox from "./CheckBox";

interface Option {
  name: string;
  code: string;
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
    if (selectedOption?.code === option.code) setSelectedOption(null);
    else setSelectedOption(option);
  };

  return (
    <>
      {options.map((option) => (
        <CheckBox
          key={option.code}
          label={option.name}
          value={option.code}
          onChange={() => onChangeSelectOption(option)}
          isSelected={selectedOption?.code === option.code}
        />
      ))}
    </>
  );
};

export default RadioGroup;
