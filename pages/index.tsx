import React from "react";

import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import NoticeList from "../src/components/NoticeList";
import SearchFilter from "../src/components/SearchFilter";

async function getSide() {
  const { data } = await axios.get("/api/getNoticeList", {
    params: {},
  });
  return data;
}

export default function Home() {
  return (
    <div>
      <SearchFilter />
      <NoticeList />
    </div>
  );
}
