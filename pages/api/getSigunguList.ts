import type { NextApiRequest, NextApiResponse } from "next";
import {
  getSigunguListRemote,
  type GetSigunguListRemoteRequest,
  type GetSigunguListRemoteResponse,
} from "../../thirdParties/openApi/remotes";

export type Response = {
  sigunguList: Array<{
    code: string;
    name: string;
  }>;
};

const parseResponse = (response: GetSigunguListRemoteResponse): Response => {
  const sigunguList = response.response.body.items.item.map((sigungu) => ({
    code: sigungu.orgCd,
    name: sigungu.orgdownNm,
  }));
  return {
    sigunguList,
  };
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
    const error = e as Error;
    res.status(500).send({
      a: error?.message,
      b: JSON.stringify(error, null, 3),
    } as unknown as Response);
  }
}
