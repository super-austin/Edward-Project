//  Types & Interface
import { IAPIResponse } from '@type/api.types';

export const getCharacterData = async (
  page: number,
  nameKey: string
): Promise<IAPIResponse> => {
  const apiRoute = `${process.env.BASE_URL}/character?limit=36&page=${page}&name=/${nameKey}/i`;
  const headers = {
    authorization: process.env.API_TOKEN || ''
  };
  const response = await fetch(apiRoute, { headers });
  const result = await response.json();

  return result;
};

export const getCharacterWithId = async (id: string): Promise<IAPIResponse> => {
  const apiRoute = `${process.env.BASE_URL}/character/${id}`;
  const headers = {
    authorization: process.env.API_TOKEN || ''
  };
  const response = await fetch(apiRoute, { headers });
  const result = await response.json();

  return result;
};
