//  External Dependencies
import { NextApiRequest, NextApiResponse } from 'next';

//  Internal Dependencies
import { getMovieWithId } from '@helpers/getMovieData';

//  Consts
import { HTTP_STATUS_CODE, ERROR_MESSAGE } from '@consts/api.const';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query;
  const id = movieId as string;

  try {
    switch (req.method) {
      case 'GET': {
        const moviesData = await getMovieWithId(id);
        if (moviesData.success === false) {
          return res
            .status(HTTP_STATUS_CODE.ServerError)
            .json(moviesData?.message);
        }
        return res.status(HTTP_STATUS_CODE.Success).send(moviesData);
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
