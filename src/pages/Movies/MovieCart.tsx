//  External Dependencies
import Image from "next/image";

//  Types
import { IMovieData } from "@type/api.types";

interface IMovieCartProps {
  movie: IMovieData;
}

const MovieCart = ({ movie }: IMovieCartProps) => {
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
    <div className="flex flex-col justify-center gap-2 w-[310px] h-40 py-4 px-5 rounded-lg border-2 border-gray-200 hover:border-slate-700 hover:bg-slate-100 select-none">
      <h1 className="text-lg font-bold w-full text-center">{name}</h1>
      <hr className="w-full border-t-2 border-gray-900" />
      <table className="w-full table-fixed mt-2">
        <tr>
          <th className="text-left">PlayTime:</th>
          <td>{runtimeInMinutes} mins</td>
        </tr>
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

export default MovieCart;
