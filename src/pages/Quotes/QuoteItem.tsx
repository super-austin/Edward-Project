//  External Dependencies
import Link from "next/link";
import Dotdotdot from "react-dotdotdot";

//  Types
import { IQuoteData } from "@type/api.types";
interface IQuoteItemProps {
  quote: IQuoteData;
}

const QuoteItem = ({ quote }: IQuoteItemProps) => {
  const { dialog, movie, character } = quote;
  return (
    <div className="w-full h-30 flex flex-row justify-between gap-3 py-4 px-5 rounded-lg border-2 border-gray-200 hover:border-slate-700 hover:bg-slate-100 select-none">
      {/* Dialog */}
      <Dotdotdot clamp={5}>
        <h1 className="md:text-lg text-base font-bold w-full overflow-ellipsis">
          {dialog}
        </h1>
      </Dotdotdot>
      <div className="w-full px-5 flex flex-col md:flex-row items-end md:justify-end gap-3">
        <Link
          className="font-bold text-sm md:text-base text-blue-500"
          href={`/Movies/${movie}`}
        >
          Movie Info
        </Link>
        <Link
          className="font-bold text-sm md:text-base text-blue-500"
          href="/Character"
        >
          Character Info
        </Link>
      </div>
    </div>
  );
};

export default QuoteItem;
