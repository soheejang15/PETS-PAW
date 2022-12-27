import styled from "styled-components";

export const NoticeListItemContainer = styled.li`
  width: 450px;
  height: 300px;
  display: flex;
  margin: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  box-sizing: border-box;

  &:hover {
    box-shadow: rgba(106, 157, 24, 0.5) 0px 4px 12px;
  }
`;

export const NoticeListItemImage = styled.div`
  flex: 2;
  height: 100%;
  border-right: 1px solid beige;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NoticeListItemContent = styled.ul`
  flex: 3;
  height: 100%;
  padding: 24px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  > li {
    width: 100%;

    > span {
      font-size: 14px;
    }
    > span:first-child {
      width: 30%;
      display: inline-block;
      color: #707070;
      font-weight: 500;
    }
    > span:last-child {
      width: 70%;
      display: inline-block;
      text-overflow: ellipsis;
    }
  }
`;

export const DetailBtn = styled.button`
  width: 80%;
  height: 32px;
  background-color: white;
  border: solid 1px #83bc5e;
  border-radius: 10px;
  color: #83bc5e;
  cursor: pointer;
`;
