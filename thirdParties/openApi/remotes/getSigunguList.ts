import instance from "../instance";
import { RemoteConfig, Response, Payload } from "../models";

export type GetSigunguListRemoteRequest = Payload<{
  upr_cd: string;
}>;

export type GetSigunguListRemoteResponse = Response<{
  orgCd: string;
  orgdownNm: string;
}>;

export async function getSigunguListRemote(
  config: RemoteConfig<GetSigunguListRemoteRequest>
) {
  const response = await instance.get<GetSigunguListRemoteResponse>(
    "/sigungu",
    config
  );

  return [response.data, response] as const;
}
