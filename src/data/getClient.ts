// axios.instance default: _type & serviceKey

// 1. getSidoList

export interface GetSidoPayload {
  // none
}

interface Sido {
  code: string;
  name: string;
}

export interface GetSidoResponse {
  sidoList: Sido[];
}

// 2. getSigungu

export interface GetSigunguPayload {
  upr_cd: string;
}

interface Sigungu {
  code: string;
  name: string;
}

export interface GetSigunguResponse {
  sigunguList: Sigungu[];
}

// 3. getAnimalKindList

export interface GetKindPayload {
  up_kind_cd: string;
}

interface AnimalKind {
  code: string;
  name: string;
}

export interface GetKindResponse {
  kindList: AnimalKind[];
}

// 4. getNoticeList

export interface GetNoticeListPayload {
  bgnde?: string | null;
  endde?: string;
  upkind?: string | null;
  kind?: string | null;
  upr_cd?: string | null;
  org_cd?: string | null;
  care_reg_no?: string;
  state?: string;
  neuter_yn?: string | null;
  numOfRows?: number;
  pageNo?: number;
}

interface Notice {
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

export interface GetNoticeListResponse {
  noticeList: Notice[];
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
