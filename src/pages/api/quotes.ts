//  External Dependencies
import { NextApiRequest, NextApiResponse } from "next";

//  Internal Dependencies
import getQuotesData from "@/helpers/getQuotesData";

//  Consts
import { HTTP_STATUS_CODE, ERROR_MESSAGE } from "@consts/api.const";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page, keyword } = req.query;
  const pageId = (page as string) ? Number(page) : 1;
  const nameKeyword = (keyword as string) || "";

  try {
    switch (req.method) {
      case "GET":
        const quotesData = await getQuotesData(pageId, nameKeyword);
        if (quotesData.success === false) {
          return res
            .status(HTTP_STATUS_CODE.ServerError)
            .json(quotesData?.message);
        }
        return res.status(HTTP_STATUS_CODE.Success).send(quotesData);
      default:
        return res
          .status(HTTP_STATUS_CODE.NotFound)
          .send(ERROR_MESSAGE.ApiNotFound);
    }
  } catch (error) {
    return res.status(HTTP_STATUS_CODE.ServerError).json(error);
  }
};
