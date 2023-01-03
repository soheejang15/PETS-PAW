import type { NextApiRequest, NextApiResponse } from "next";
import {
  getSidoListRemote,
  type GetSidoListRemoteResponse,
} from "../../thirdParties/openApi/remotes";

export type Response = {
  sidoList: Array<{
    code: string;
    name: string;
  }>;
};

const parseResponse = (response: GetSidoListRemoteResponse): Response => {
  const sidoList = response.response.body.items.item.map((sido) => ({
    code: sido.orgCd,
    name: sido.orgdownNm,
  }));
  return { sidoList };
};

export default async function getSidoList(
  _: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const [data] = await getSidoListRemote();

    res.status(200).json(parseResponse(data));
  } catch (e) {
    console.log(e);
  }
}