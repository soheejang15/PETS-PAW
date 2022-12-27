import React from "react";
import { useQuery } from "react-query";
import {
  fetchNoticeList,
  fetchSido,
  fetchSigungu,
  basePayload,
  fetchKind,
} from "./api";

export const useGetSidoQuery = () => {
  const { data } = useQuery(
    "getSido",
    async () => {
      const data = await fetchSido({
        ...basePayload,
        numOfRows: 100,
      });

      return { sidoList: [...data.response.body.items.item] };
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

      const data = await fetchSigungu({ ...basePayload, upr_cd });

      return { sigunguList: [...data.response.body.items.item] };
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

      const data = await fetchKind({ ...basePayload, up_kind_cd });

      return {
        kindList: data.response.body.items.item,
      };
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
        ...basePayload,
        pageNo: curPage,
        upkind: searchFilter?.upKind || null,
        kind: searchFilter?.kind || null,
        upr_cd: searchFilter?.missingSido || null,
        org_cd: searchFilter?.missingSigungu || null,
        neuter_yn: searchFilter?.neutered || null,
        bgnde: searchFilter?.missingDate || null,
      });

      setNoticeCnt(data.response.body.totalCount);
      setMaxPageNum(Math.ceil(data.response.body.totalCount / 10));

      return {
        noticeList: data.response.body?.items.item,
        totalPageCount: data.response.body.totalCount,
      };
    },
    {
      staleTime: 30 * 1000 * 60,
    }
  );

  return {
    noticeList: data?.noticeList,
    getNoticeList: refetch,
    totalPageCount: data?.totalPageCount,
    isLoading,
  };
};
