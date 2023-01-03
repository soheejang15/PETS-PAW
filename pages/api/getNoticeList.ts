import type { NextApiRequest, NextApiResponse } from "next";
import {
  getNoticeListRemote,
  type GetNoticeListRemoteResponse,
  type Notice,
} from "../../thirdParties/openApi/remotes";

export type Response = {
  noticeList: Array<Notice>;
  numOfRows: number;
  pageNo: number;
  totalCount: number;
};

const parseResponse = (response: GetNoticeListRemoteResponse) => {
  const noticeList = response.response.body.items.item;

  return {
    noticeList,
    numOfRows: response.response.body.numOfRows,
    pageNo: response.response.body.pageNo,
    totalCount: response.response.body.totalCount,
  };
};

export default async function getNoticeList(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const [data] = await getNoticeListRemote({
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
