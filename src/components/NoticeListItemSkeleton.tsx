import React from "react";

import * as S from "./NoticeListItemSkeleton.style";

const NoticeListItemSkeleton = () => {
  return (
    <S.Skeleton>
      <div></div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <button></button>
      </ul>
    </S.Skeleton>
  );
};

export default NoticeListItemSkeleton;
