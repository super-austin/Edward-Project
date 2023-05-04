//  External Dependencies
import { useState, useEffect } from 'react';

//  Types & Consts
import { IAPIResponse } from '@type/api.types';
import { DEFAULT_API_RESPONSE } from '@consts/api.const';
interface IUseQuotesResponse {
  response: IAPIResponse;
  isLoading: boolean;
  isError: boolean;
}

const useQuotes = (page: number, keyword: string): IUseQuotesResponse => {
  const [response, setResponse] = useState<IAPIResponse>(DEFAULT_API_RESPONSE);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuotesData = async (page: number, keyword: string) => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/quotes?page=${page}&keyword=${keyword}`
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

    fetchQuotesData(page, keyword);
  }, [page, keyword]);

  return { response, isLoading, isError };
};

export default useQuotes;
