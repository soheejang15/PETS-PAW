import type { NextApiRequest, NextApiResponse } from "next";
import {
  getSigunguListRemote,
  type GetSigunguListRemoteRequest,
  type GetSigunguListRemoteResponse,
} from "../../thirdParties/openApi/remotes";

export type Response = Array<{
  code: string;
  name: string;
}>;

const parseResponse = (response: GetSigunguListRemoteResponse): Response => {
  const sigungus = response.response.body.items.item;
  return sigungus.map((sigungu) => ({
    code: sigungu.orgCd,
    name: sigungu.orgdownNm,
  }));
};

export default async function getSigunguList(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const [data] = await getSigunguListRemote({
      params: {
        ...req.query,
      },
    });

    res.status(200).json(parseResponse(data));
  } catch (e) {
    console.log(e);
  }
}
