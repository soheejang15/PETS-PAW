import React from "react";
import { useQuery } from "react-query";
import { fetchNoticeList, fetchSido, fetchSigungu, fetchKind } from "./api";

export const useGetSidoQuery = () => {
  const { data } = useQuery(
    "getSido",
    async () => {
      const data = await fetchSido({
        numOfRows: 100,
      });

      return data;
    },
    {
      cacheTime: Infinity,
    }
  );

  return {
    sidoList: data?.sidoList,
  };
};

export const useGetSigunguQuery = (upr_cd: string | null) => {
  const { data, refetch } = useQuery(
    ["getSigungu", upr_cd],
    async () => {
      if (upr_cd === null) return;

      const data = await fetchSigungu({ upr_cd });

      return data;
    },
    {
      cacheTime: Infinity,
      // enabled: false,
    }
  );

  return {
    sigunguList: data?.sigunguList,
    getSigungu: refetch,
  };
};

export const useGetKind = (up_kind_cd: string | null) => {
  const { data, refetch } = useQuery(
    ["getKind", up_kind_cd],
    async () => {
      if (up_kind_cd === null) return;

      const data = await fetchKind({ up_kind_cd });

      return data;
    },
    {}
  );

  return { kindList: data?.kindList, getKindList: refetch };
};

export const useGetNoticeList = (
  curPage: number,
  searchFilter: {
    upKind: string | null;
    kind: string | null;
    sex: string | null;
    neutered: string | null;
    missingDate: string | null;
    missingSido: string | null;
    missingSigungu: string | null;
  },
  setMaxPageNum: (page: number) => void,
  setNoticeCnt: (cnt: number) => void
) => {
  const { data, refetch, isLoading } = useQuery(
    ["getNoticeList", curPage, searchFilter],
    async () => {
      const data = await fetchNoticeList({
        pageNo: curPage,
        upkind: searchFilter?.upKind || null,
        kind: searchFilter?.kind || null,
        upr_cd: searchFilter?.missingSido || null,
        org_cd: searchFilter?.missingSigungu || null,
        neuter_yn: searchFilter?.neutered || null,
        bgnde: searchFilter?.missingDate || null,
      });

      setNoticeCnt(data.totalCount);
      setMaxPageNum(Math.ceil(data.totalCount / 10));

      return data;
    },
    {
      staleTime: 30 * 1000 * 60,
    }
  );

  return {
    noticeList: data?.noticeList,
    getNoticeList: refetch,
    totalPageCount: data?.totalCount,
    isLoading,
  };
};
