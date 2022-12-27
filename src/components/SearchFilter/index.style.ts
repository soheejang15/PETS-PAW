import styled from "styled-components";

export const SearchFilterContainer = styled.div`
  width: 1024px;
  height: 300px;
  padding: 0 40px;
  margin: 40px 0 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    > div {
      margin-right: 40px;
    }
  }
`;

export const TitleAndGuideContainer = styled.div`
  display: flex;
  align-items: center;

  i {
    color: #83bc5e;
    margin-left: 8px;
    cursor: pointer;
  }
`;

export const GuideContent = styled.div<{ isOpen: boolean }>`
  width: 300px;
  height: auto;
  padding: 8px;
  border-radius: 10px;
  box-shadow: rgba(106, 157, 24, 0.5) 0px 4px 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  position: absolute;
  top: -7px;
  left: 32px;
  ${({ isOpen }) => !isOpen && "display: none"}
`;

export const MissingRegionContainer = styled.div`
  display: flex;
  > div {
    margin-right: 20px;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;

  > * {
    margin-right: 28px;
  }
`;

export const SearchFilterTitle = styled.h2`
  color: black;
  font-size: 22px;
`;

export const FilterName = styled.h3`
  color: #707070;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 8px;
`;

export const DateInput = styled.input`
  width: 160px;
  height: 32px;
  box-sizing: border-box;
  font-size: 12px;
  padding: 0 8px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: rgba(106, 157, 24, 0.5) 0px 4px 12px;
  }
  &:hover {
    box-shadow: rgba(106, 157, 24, 0.5) 0px 4px 12px;
  }
`;

export const ButtonAndTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Total = styled.span`
  margin: 0 20px;
  font-size: 14px;

  > b {
    color: #83bc5e;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 32px;
  font-size: 14px;
  background-color: white;
  border: 1px solid #83bc5e;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:first-child {
    margin-right: 40px;
    color: #83bc5e;
  }
  &:last-child {
    background-color: #83bc5e;
    color: white;
  }
`;
