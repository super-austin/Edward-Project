//  Types & Interface
import { IAPIResponse } from "@type/api.types";

const getCharacterData = async (
  search: string,
  page: number,
  nameKey: string
): Promise<IAPIResponse> => {
  const apiRoute = `${process.env.BASE_URL}/character/${
    search || ""
  }?limit=36&page=${page}&name=/${nameKey}/i`;
  const headers = {
    authorization: process.env.API_TOKEN || "",
  };
  const response = await fetch(apiRoute, { headers });
  const result = await response.json();

  return result;
};

export default getCharacterData;
