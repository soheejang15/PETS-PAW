import React, { ChangeEvent, useState } from "react";

import * as S from "./SingleSelect.style";

interface Option {
  label: string;
  value: string;
}

interface SingleSelectProps {
  isSearchable: boolean;
  options: Option[];
  selectedOption: Option | null;
  onChange: (option: Option | null) => void;
}

const SingleSelect = ({
  options,
  onChange,
  selectedOption,
}: SingleSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  const toggleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
    setKeyword("");
  };

  const clearOption = () => {
    onChange(null);
  };

  const handleClickItem = (item: Option) => {
    onChange(item || null);
    toggleIsOpen();
  };

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <S.SingleSelectContainer onBlur={() => setIsOpen(false)}>
      {isOpen ? (
        <>
          <S.SearchBar isOpen={isOpen}>
            <S.SearchInput
              type="text"
              placeholder={selectedOption?.label}
              onChange={handleChangeKeyword}
            />
            <S.ExtensionButton onClick={toggleIsOpen}>
              <i className="fa-sharp fa-solid fa-sort-down"></i>
            </S.ExtensionButton>
          </S.SearchBar>
          <S.OptionList>
            {options
              .filter((option) => option.label.includes(keyword))
              .map((option) => (
                <S.Option
                  onMouseDown={() => handleClickItem(option)}
                  key={option?.value}
                >
                  {option?.label}
                </S.Option>
              ))}
          </S.OptionList>
        </>
      ) : (
        <S.SearchBar>
          <S.SelectedItem onClick={toggleIsOpen}>
            {selectedOption?.label || "전체"}
          </S.SelectedItem>
          {selectedOption && (
            <S.ExtensionButton onClick={clearOption}>
              <i className="fa-solid fa-xmark"></i>
            </S.ExtensionButton>
          )}
          <S.ExtensionButton onClick={toggleIsOpen}>
            <i className="fa-sharp fa-solid fa-sort-down"></i>
          </S.ExtensionButton>
        </S.SearchBar>
      )}
    </S.SingleSelectContainer>
  );
};

export default SingleSelect;
