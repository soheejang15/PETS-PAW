import React, { useState } from "react";

import * as S from "./index.style";

const SearchGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <i
        className="fa-solid fa-circle-exclamation"
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />
      <S.GuideContent isOpen={isOpen}>
        안녕하세요 방갑습니다 도로로로롱안녕하세요 방갑습니다
        도로로로롱안녕하세요 방갑습니다 도로로로롱안녕하세요 방갑습니다
        도로로로롱
      </S.GuideContent>
    </div>
  );
};

export default SearchGuide;
