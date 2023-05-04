//  External Dependencies
import { useState, useEffect } from "react";

//  Types & Consts
import { IAPIResponse } from "@type/api.types";
import { DEFAULT_API_RESPONSE } from "@consts/api.const";
interface IUseCharacterWithIdResponse {
  response: IAPIResponse;
  isLoading: boolean;
  isError: boolean;
}

const useCharacterWithId = (
  characterId: string
): IUseCharacterWithIdResponse => {
  const [response, setResponse] = useState<IAPIResponse>(DEFAULT_API_RESPONSE);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    console.log("@hook", characterId);
    if (!characterId) {
      setResponse(DEFAULT_API_RESPONSE);
      setLoading(true);
      setError(false);
      return;
    }

    const fetchMovieData = async (characterId: string) => {
      setLoading(true);
      try {
        const response = await fetch(`/api/characters/${characterId}`);
        const data = await response.json();
        setResponse(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchMovieData(characterId);
  }, [characterId]);

  return { response, isLoading, isError };
};

export default useCharacterWithId;
