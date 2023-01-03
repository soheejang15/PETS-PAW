import instance from "../instance";
import { RemoteConfig, ResponseWithPage } from "../models";

export type GetSidoListRemoteResponse = ResponseWithPage<{
  orgCd: string;
  orgdownNm: string;
}>;

export async function getSidoListRemote(config?: RemoteConfig) {
  const response = await instance.get<GetSidoListRemoteResponse>(
    "/sido",
    config
  );

  return [response.data, response] as const;
}
