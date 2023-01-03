import axios from "axios";

import {
  GetSidoPayload,
  GetSidoResponse,
  GetSigunguPayload,
  GetSigunguResponse,
  GetKindPayload,
  GetKindResponse,
  GetNoticeListPayload,
  GetNoticeListResponse,
} from "./getClient";

export const fetchSido = async (payload: GetSidoPayload) => {
  const { data } = await axios.get<GetSidoResponse>(`/api/getSidoList`, {
    params: payload,
  });

  return data;
};

export const fetchSigungu = async (payload: GetSigunguPayload) => {
  const { data } = await axios.get<GetSigunguResponse>(`/api/getSigunguList`, {
    params: payload,
  });

  return data;
};

export const fetchKind = async (payload: GetKindPayload) => {
  const { data } = await axios.get<GetKindResponse>(`/api/getAnimalKindList`, {
    params: payload,
  });

  return data;
};

export const fetchNoticeList = async (payload: GetNoticeListPayload) => {
  const { data } = await axios.get<GetNoticeListResponse>(
    `/api/getNoticeList`,
    {
      params: payload,
    }
  );

  return data;
};
