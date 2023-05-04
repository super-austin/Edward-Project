//  External Dependencies
import { useState, useEffect } from 'react';

//  Types & Consts
import { IAPIResponse } from '@type/api.types';
import { DEFAULT_API_RESPONSE } from '@consts/api.const';
interface IUseMovieResponse {
  response: IAPIResponse;
  isLoading: boolean;
  isError: boolean;
}

const useMovie = (page: number, keyword: string): IUseMovieResponse => {
  const [response, setResponse] = useState<IAPIResponse>(DEFAULT_API_RESPONSE);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovieData = async (page: number, keyword: string) => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/movies?page=${page}&keyword=${keyword}`
        );
        const data = await response.json();
        setResponse(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchMovieData(page, keyword);
  }, [page, keyword]);

  return { response, isLoading, isError };
};

export default useMovie;
