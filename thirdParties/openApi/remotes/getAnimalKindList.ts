import instance from "../instance";
import { RemoteConfig, ResponseWithPage } from "../models";

export type GetAnimalKindListRemoteRequest = ResponseWithPage<{
  up_kind_cd: string;
}>;
export type GetAnimalKindListRemoteResponse = ResponseWithPage<{
  kindCd: string;
  knm: string;
}>;

export async function getAnimalKindListRemote(
  config: RemoteConfig<GetAnimalKindListRemoteRequest>
) {
  const response = await instance.get<GetAnimalKindListRemoteResponse>(
    "/kind",
    config
  );

  return [response.data, response] as const;
}
