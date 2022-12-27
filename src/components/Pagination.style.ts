import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 30%;
  height: 80px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Arrow = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
  color: #606060;
`;

export const Index = styled.button`
  width: 24px;
  height: 24px;
  border: 0.5px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;

  &.selected {
    color: green;
  }
`;
