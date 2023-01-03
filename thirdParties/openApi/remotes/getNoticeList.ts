import instance from "../instance";
import { RemoteConfig, ResponseWithPage, PayloadWithPage } from "../models";

export interface NoticeFilter {
  bgnde?: string | null;
  endde?: string;
  upkind?: string | null;
  kind?: string | null;
  upr_cd?: string | null;
  org_cd?: string | null;
  care_reg_no?: string;
  state?: string;
  neuter_yn?: string | null;
}

export interface Notice {
  desertionNo: string;
  filename: string;
  happenDt: string;
  happenPlace: string;
  kindCd: string;
  colorCd: string;
  age: string;
  weight: string;
  noticeNo: string;
  noticeSdt: string;
  noticeEdt: string;
  popfile: string;
  processState: string;
  sexCd: string;
  neuterYn: string;
  specialMark: string;
  careNm: string;
  careTel: string;
  careAddr: string;
  orgNm: string;
  chargeNm: string;
  officetel: string;
}

export type GetNoticeListRemoteRequest = PayloadWithPage<NoticeFilter>;
export type GetNoticeListRemoteResponse = ResponseWithPage<Notice>;

export async function getNoticeListRemote(
  config?: RemoteConfig<GetNoticeListRemoteRequest>
) {
  const response = await instance.get<GetNoticeListRemoteResponse>(
    "/abandonmentPublic",
    config
  );

  return [response.data, response] as const;
}
