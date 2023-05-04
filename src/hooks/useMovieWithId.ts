//  External Dependencies
import { useState, useEffect } from "react";

//  Types & Consts
import { IAPIResponse } from "@type/api.types";
import { DEFAULT_API_RESPONSE } from "@consts/api.const";
interface IUseMovieWithIdResponse {
  response: IAPIResponse;
  isLoading: boolean;
  isError: boolean;
}

const useMovieWithId = (movieId: string): IUseMovieWithIdResponse => {
  const [response, setResponse] = useState<IAPIResponse>(DEFAULT_API_RESPONSE);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    console.log("@hook", movieId);
    if (!movieId) {
      setResponse(DEFAULT_API_RESPONSE);
      setLoading(true);
      setError(false);
      return;
    }

    const fetchMovieData = async (movieId: string) => {
      setLoading(true);
      try {
        const response = await fetch(`/api/movies/${movieId}`);
        const data = await response.json();
        setResponse(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchMovieData(movieId);
  }, [movieId]);

  return { response, isLoading, isError };
};

export default useMovieWithId;
