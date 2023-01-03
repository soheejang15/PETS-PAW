import { AxiosRequestConfig } from "axios";

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

export type RemoteConfig<Params = unknown> = Params extends unknown
  ? AxiosRequestConfig<any>
  : Omit<AxiosRequestConfig<any>, "params"> & {
      params: Params;
    };

type Omit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P];
};
