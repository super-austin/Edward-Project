//  External Dependencies
import { NextApiRequest, NextApiResponse } from "next";

//  Internal Dependencies
import getCharacterData from "@/helpers/getCharacterData";

//  Consts
import { HTTP_STATUS_CODE, ERROR_MESSAGE } from "@consts/api.const";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, page, keyword } = req.query;
  const movieId = (id as string) || "";
  const pageId = (page as string) ? Number(page) : 1;
  const nameKeyword = (keyword as string) || "";

  try {
    switch (req.method) {
      case "GET":
        const moviesData = await getCharacterData(movieId, pageId, nameKeyword);
        return res.status(HTTP_STATUS_CODE.Success).send(moviesData);
      default:
        return res
          .status(HTTP_STATUS_CODE.NotFound)
          .send(ERROR_MESSAGE.ApiNotFound);
    }
  } catch (error) {
    return res.status(HTTP_STATUS_CODE.ServerError).json(error);
  }
};
