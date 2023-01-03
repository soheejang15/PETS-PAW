import React, { ChangeEvent, useState } from "react";

import * as S from "./SingleSelect.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faXmark } from "@fortawesome/free-solid-svg-icons";

interface Option {
  code: string;
  name: string;
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
              placeholder={selectedOption?.name}
              onChange={handleChangeKeyword}
            />
            <S.ExtensionButton onClick={toggleIsOpen}>
              <FontAwesomeIcon icon={faSortDown} />
            </S.ExtensionButton>
          </S.SearchBar>
          <S.OptionList>
            {options
              .filter((option) => option.name.includes(keyword))
              .map((option) => (
                <S.Option
                  onMouseDown={() => handleClickItem(option)}
                  key={option?.code}
                >
                  {option?.name}
                </S.Option>
              ))}
          </S.OptionList>
        </>
      ) : (
        <S.SearchBar>
          <S.SelectedItem onClick={toggleIsOpen}>
            {selectedOption?.name || "전체"}
          </S.SelectedItem>
          {selectedOption && (
            <S.ExtensionButton onClick={clearOption}>
              <FontAwesomeIcon icon={faXmark} />
            </S.ExtensionButton>
          )}
          <S.ExtensionButton onClick={toggleIsOpen}>
            <FontAwesomeIcon icon={faSortDown} />
          </S.ExtensionButton>
        </S.SearchBar>
      )}
    </S.SingleSelectContainer>
  );
};

export default SingleSelect;
