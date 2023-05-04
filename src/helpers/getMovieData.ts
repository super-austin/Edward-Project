//  Types & Interface
import { ApiQuery, IAPIResponse } from "@type/api.types";

const getMovieData = async (
  search: string,
  page: number,
  nameKey: string
): Promise<IAPIResponse> => {
  const apiRoute = `${process.env.BASE_URL}/movie/${
    search || ""
  }?limit=12&page=${page}&name=/${nameKey}/i`;
  const headers = {
    authorization: process.env.API_TOKEN || "",
  };
  const response = await fetch(apiRoute, { headers });
  const result = await response.json();

  return result;
};

export default getMovieData;
