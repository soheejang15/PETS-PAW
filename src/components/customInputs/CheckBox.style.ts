import styled from "styled-components";

export const Container = styled.span`
  width: auto;
  height: 32px;
  padding: 0 12px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(106, 157, 24, 0.5) 0px 4px 12px;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const CheckBox = styled.label<{ checked: boolean }>`
  width: 5px;
  height: 5px;
  border: 1px solid #6a9d18;
  border-radius: 5px;
  cursor: pointer;
  ${({ checked }) => checked && "background-color: #6a9d18;"}
`;

export const Label = styled.span`
  font-size: 12px;
  margin-left: 8px;
`;
