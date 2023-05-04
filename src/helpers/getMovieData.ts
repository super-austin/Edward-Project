//  Types & Interface
import { IAPIResponse } from '@type/api.types';

export const getMovieData = async (
  page: number,
  nameKey: string
): Promise<IAPIResponse> => {
  const apiRoute = `${process.env.BASE_URL}/movie?limit=36&page=${page}&name=/${nameKey}/i`;
  const headers = {
    authorization: process.env.API_TOKEN || ''
  };
  const response = await fetch(apiRoute, { headers });
  const result = await response.json();

  return result;
};

export const getMovieWithId = async (id: string): Promise<IAPIResponse> => {
  const apiRoute = `${process.env.BASE_URL}/movie/${id}`;
  const headers = {
    authorization: process.env.API_TOKEN || ''
  };
  const response = await fetch(apiRoute, { headers });
  const result = await response.json();

  return result;
};
