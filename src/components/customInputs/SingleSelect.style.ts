import styled from "styled-components";

export const SingleSelectContainer = styled.div`
  position: relative;
`;

export const SearchBar = styled.div<{ isOpen?: boolean }>`
  width: 200px;
  height: 32px;
  padding: 0;
  margin: 0;
  display: flex;
  border-radius: 10px;
  background-color: white;
  box-shadow: ${({ isOpen }) =>
    isOpen
      ? "rgba(106, 157, 24, 0.5) 0px 4px 12px"
      : "rgba(0, 0, 0, 0.1) 0px 4px 12px;"};

  &:hover {
    box-shadow: rgba(106, 157, 24, 0.5) 0px 4px 12px;
  }
`;

export const SelectedItem = styled.div`
  flex: 6;
  height: 32px;
  display: flex;
  align-items: center;
  border: none;
  font-size: 14px;
  box-sizing: border-box;
  padding-left: 10px;
  background: none;
  font-size: 12px;
`;

export const SearchInput = styled.input`
  flex: 6;
  height: 100%;
  border: none;
  box-sizing: border-box;
  padding-left: 8px;
  background: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 12px;
    color: black;
  }
`;

export const ExtensionButton = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
`;

export const OptionList = styled.ul`
  position: absolute;
  top: 44px;
  width: 200px;
  max-height: 100px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
  overflow-y: auto;
`;

export const Option = styled.li`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 8px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: beige;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  &:last-child {
    border-bottom: 0px;
  }
`;
