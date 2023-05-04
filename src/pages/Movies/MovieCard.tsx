//  External Dependencies
import Image from "next/image";

//  Types
import { IMovieData } from "@type/api.types";

interface IMovieCardProps {
  movie: IMovieData;
  selectItem: (newItem: IMovieData) => void;
}

const MovieCard = ({ movie, selectItem }: IMovieCardProps) => {
  const {
    name,
    runtimeInMinutes,
    academyAwardNominations,
    academyAwardWins,
    rottenTomatoesScore,
  } = movie;
  return (
    <div
      className="flex flex-col justify-center gap-2 w-[310px] h-44 py-4 px-5 rounded-lg border-2 border-gray-200 hover:border-slate-700 hover:bg-slate-100 select-none"
      onClick={() => {
        selectItem(movie);
      }}
    >
      {/* Title */}
      <h1 className="text-lg font-bold w-full text-center">{name}</h1>
      <hr className="w-full border-t-2 border-gray-900" />
      {/* Content */}
      <table className="w-full table-fixed mt-2">
        {/* Playtime */}
        <tr>
          <th className="text-left">PlayTime:</th>
          <td>{runtimeInMinutes} mins</td>
        </tr>
        {/* Score */}
        <tr>
          <th className="text-left">Score:</th>
          <td>{rottenTomatoesScore.toFixed(2)}</td>
        </tr>
        {/* Award Info */}
        <tr>
          <th className="text-left">Award:</th>
          <td className="flex flex-row gap-3">
            <div className="flex flex-row gap-1">
              <Image
                src="/images/thumbsup.png"
                alt="nomination"
                height={22}
                width={22}
                priority
              />{" "}
              {academyAwardNominations}{" "}
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
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MovieCard;
