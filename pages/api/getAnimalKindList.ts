import type { NextApiRequest, NextApiResponse } from "next";
import {
  getAnimalKindListRemote,
  type GetAnimalKindListRemoteResponse,
} from "../../thirdParties/openApi/remotes";

export type Response = {
  kindList: Array<{
    code: string;
    name: string;
  }>;
};

const parseResponse = (response: GetAnimalKindListRemoteResponse): Response => {
  const kindList = response.response.body.items.item.map((kind) => ({
    code: kind.kindCd,
    name: kind.knm,
  }));

  return { kindList };
};

export default async function getKindList(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const [data] = await getAnimalKindListRemote({
      params: {
        ...req.query,
      },
    });

    res.status(200).json(parseResponse(data));
  } catch (e) {
    const error = e as Error;
    res
      .status(500)
      .send({
        a: error?.message,
        b: JSON.stringify(error, null, 3),
      } as unknown as Response);
  }
}
