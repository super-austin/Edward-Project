//  External Dependencies
import { NextApiRequest, NextApiResponse } from 'next';

//  Internal Dependencies
import { getCharacterData } from '@/helpers/getCharacterData';

//  Consts
import { HTTP_STATUS_CODE, ERROR_MESSAGE } from '@consts/api.const';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page, keyword } = req.query;
  const pageId = (page as string) ? Number(page) : 1;
  const nameKeyword = (keyword as string) || '';

  try {
    switch (req.method) {
      case 'GET': {
        const characterData = await getCharacterData(pageId, nameKeyword);
        if (characterData.success === false) {
          return res
            .status(HTTP_STATUS_CODE.ServerError)
            .json(characterData?.message);
        }
        return res.status(HTTP_STATUS_CODE.Success).send(characterData);
      }
      default: {
        return res
          .status(HTTP_STATUS_CODE.NotFound)
          .send(ERROR_MESSAGE.ApiNotFound);
      }
    }
  } catch (error) {
    return res.status(HTTP_STATUS_CODE.ServerError).json(error);
  }
};
