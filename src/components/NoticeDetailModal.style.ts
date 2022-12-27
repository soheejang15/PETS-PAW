import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 70%;
  height: 70%;
  background-color: white;
  border-radius: 30px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Image = styled.div`
  flex: 3;
  border-radius: 30px 0 0 30px;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Content = styled.ul`
  flex: 2;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  > li {
    width: 100%;
    display: flex;
    > span:first-child {
      flex: 3;
      display: inline-block;
      color: #707070;
      font-weight: 300;
    }
    > span:last-child {
      flex: 7;
      display: inline-block;
      color: black;
    }
  }
`;
