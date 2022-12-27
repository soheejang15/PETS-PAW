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
  Payload,
} from "./interface";

const PROXY_SERVER = "https://cors-anywhere.herokuapp.com";

const BASE_URL = "	http://apis.data.go.kr/1543061/abandonmentPublicSrvc";

const SERVICE_KEY =
  "Iw+fKi2NCvqWIyjUiliJG0shnyFkqssa30obEkyBC/nzhbPnATOFEQQYcZ2oYtY/YiNhEYGaIx1fBP/wcMY8LA==";

export const basePayload = {
  serviceKey: SERVICE_KEY,
  _type: "json",
};

export const fetchSido = async (payload: GetSidoPayload) => {
  const { data } = await axios.get<GetSidoResponse>(
    `${PROXY_SERVER}/${BASE_URL}/sido`,
    {
      params: payload,
    }
  );

  return data;
};

export const fetchSigungu = async (payload: GetSigunguPayload) => {
  const { data } = await axios.get<GetSigunguResponse>(
    `${PROXY_SERVER}/${BASE_URL}/sigungu`,
    {
      params: payload,
    }
  );

  return data;
};

export const fetchKind = async (payload: GetKindPayload) => {
  const { data } = await axios.get<GetKindResponse>(
    `${PROXY_SERVER}/${BASE_URL}/kind`,
    {
      params: payload,
    }
  );

  return data;
};

export const fetchNoticeList = async (payload: GetNoticeListPayload) => {
  const { data } = await axios.get<GetNoticeListResponse>(
    `${PROXY_SERVER}/${BASE_URL}/abandonmentPublic`,
    {
      params: payload,
    }
  );

  return data;
};
