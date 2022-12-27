import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const Skeleton = styled.li`
  width: 450px;
  height: 300px;
  display: flex;
  margin: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  box-sizing: border-box;

  > div {
    flex: 2;
    height: 100%;
    border-radius: 15px 0 0 15px;
    animation: ${animation} 3s linear infinite;
  }

  > ul {
    flex: 3;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    > li {
      width: 100%;
      padding: 10px 20px;
      box-sizing: border-box;
      border-radius: 5px;
      animation: ${animation} 3s linear infinite;
    }

    > button {
      width: 80%;
      animation: ${animation} 3s linear infinite;
      height: 32px;
      border-radius: 5px;
      border: none;
    }
  }
`;
