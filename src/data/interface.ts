export type Payload<T> = T & {
  serviceKey: string;
  _type: string;
};

export type PayloadWithPage<T> = Payload<T> & {
  numOfRows?: number;
  pageNo?: number;
};

export interface Response<T> {
  response: {
    header: {
      reqNo: number;
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items: {
        item: T[];
      };
    };
  };
}

export type ResponseWithPage<T> = Response<T> & {
  response: {
    body: {
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
};

// 1. getSido

export type GetSidoPayload = PayloadWithPage<{}>;

export interface Sido {
  orgCd: string;
  orgdownNm: string;
}

export type GetSidoResponse = ResponseWithPage<Sido>;

// 2. getSigungu

export type GetSigunguPayload = Payload<{ upr_cd: string }>;

export interface Sigungu {
  uprCd: string;
  orgCd: string;
  orgdownNm: string;
}

export type GetSigunguResponse = Response<Sigungu>;

// 3. getShelter

export type GetShelterPayload = Payload<{ upr_cd: string; org_cd: string }>;

export interface Shelter {
  careRegNo: string;
  careNm: string;
}

export type GetShelterResponse = Response<Shelter>;

// 4. getKind

export type GetKindPayload = Payload<{ up_kind_cd: string }>;

export interface Kind {
  kindCd: string;
  knm: string;
}

export type GetKindResponse = Response<Kind>;

// 5. getNoticeList

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

export type GetNoticeListPayload = PayloadWithPage<NoticeFilter>;

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

export type GetNoticeListResponse = ResponseWithPage<Notice>;
