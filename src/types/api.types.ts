export type ApiQuery = undefined | string;

export interface IMovieData {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface IAPIResponse {
  docs: IMovieData[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
