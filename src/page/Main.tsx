import React, { useState } from "react";

import SearchFilter from "../components/SearchFilter";
import NoticeList from "../components/NoticeList";

const Main = () => {
  return (
    <div>
      <SearchFilter />
      <NoticeList />
    </div>
  );
};

export default Main;
