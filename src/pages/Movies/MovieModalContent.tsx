//  External Dependencies
import Image from "next/image";

//  Types
import { IMovieData } from "@type/api.types";

interface IMovieModalContentProps {
  movie: IMovieData;
}

const MovieModalContent = ({ movie }: IMovieModalContentProps) => {
  const {
    name,
    runtimeInMinutes,
    budgetInMillions,
    boxOfficeRevenueInMillions,
    academyAwardNominations,
    academyAwardWins,
    rottenTomatoesScore,
  } = movie;
  return (
    <div className="flex flex-col justify-center gap-2 pb-4 px-5 select-none">
      <h1 className="text-lg font-bold px-5 w-full text-center">{name}</h1>
      <hr className="w-full border-t-2 border-gray-900" />
      <div className="w-full flex flex-col gap-3 mt-2">
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Runtime:</div>
          <div>{runtimeInMinutes} mins</div>
        </div>
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Score:</div>
          <div>{rottenTomatoesScore.toFixed(2)}</div>
        </div>
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Awards:</div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-row gap-1">
              <Image
                src="/images/thumbsup.png"
                alt="nomination"
                height={22}
                width={22}
                priority
              />{" "}
              {academyAwardNominations}
            </div>
            <div className="flex flex-row gap-1">
              <Image
                src="/images/trophy.png"
                alt="win"
                height={22}
                width={22}
                priority
              />{" "}
              {academyAwardWins}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Budget:</div>
          <div>{budgetInMillions} M</div>
        </div>
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Revenue:</div>
          <div>{boxOfficeRevenueInMillions} M</div>
        </div>
      </div>
    </div>
  );
};

export default MovieModalContent;
