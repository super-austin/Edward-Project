//  External Dependencies
import Link from "next/link";

//  Types
import { IQuoteData } from "@type/api.types";
interface IQuoteItemProps {
  quote: IQuoteData;
}

const QuoteItem = ({ quote }: IQuoteItemProps) => {
  const { dialog, movie, character } = quote;
  return (
    <div className="w-full h-30 flex flex-col gap-3 py-4 px-5 rounded-lg border-2 border-gray-200 hover:border-slate-700 hover:bg-slate-100 select-none">
      {/* Dialog */}
      <h1 className="text-lg font-bold w-full text-center">{dialog}</h1>
      <hr className="w-full border-t-2 border-gray-900" />
      <div className="w-full px-5 flex flex-row justify-between gap-3 mt-2">
        <Link className="font-bold text-blue-500" href="/Movies">
          Movie Info
        </Link>
        <Link className="font-bold text-blue-500" href="/Character">
          Character Info
        </Link>
      </div>
    </div>
  );
};

export default QuoteItem;
