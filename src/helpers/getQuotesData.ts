//  Types & Interface
import { IAPIResponse } from "@type/api.types";

const getQuotesData = async (
  page: number,
  nameKey: string
): Promise<IAPIResponse> => {
  const apiRoute = `${process.env.BASE_URL}/quote?limit=50&page=${page}&dialog=/${nameKey}/i`;
  const headers = {
    authorization: process.env.API_TOKEN || "",
  };
  const response = await fetch(apiRoute, { headers });
  const result = await response.json();

  return result;
};

export default getQuotesData;
