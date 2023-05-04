//  External Dependencies
import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

//  Internal Dependencies
import QuoteItem from "./QuoteItem";

//  Hooks
import useQuotes from "@/hooks/useQuotes";

//  Types
import { IQuoteData } from "@type/api.types";

const Quotes = () => {
  const [pageId, setPageId] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const debouncedPageId = useDebounce(pageId, 100);
  const debouncedKeyword = useDebounce<string>(keyword, 300);
  const { response, isError } = useQuotes(debouncedPageId, debouncedKeyword);

  useEffect(() => {
    if (response.pages && pageId > response.pages) setPageId(response.pages);
  }, [response.pages]);

  // If there are some errors, custom error page
  if (isError) return <h1>Oops! Error happened!</h1>;
  else
    return (
      <>
        <main className="w-full flex justify-center overflow-y-auto">
          <div className="container h-full pt-20 pb-40 px-10 flex flex-col items-center gap-20">
            {/* Title */}
            <h1 className="text-2xl sm:text-6xl underline underline-offset-8">
              &nbsp;&nbsp;Quotes&nbsp;&nbsp;
            </h1>

            {/* Content */}
            <div className="w-full flex flex-col items-center justify-center gap-7 pb-20">
              {/* Search Bar */}
              <input
                type="text"
                className="w-5/6 rounded-md border-none px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6 focus-visible:outline-none"
                value={keyword}
                placeholder="Movie Name here..."
                onChange={(e) => setKeyword(e.target.value)}
                autoFocus
              />
              {/* Movie List */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-between place-items-center gap-5">
                {(response.docs as IQuoteData[]).map((item: IQuoteData) => (
                  <QuoteItem key={item._id} quote={item} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </>
    );
};

export default Quotes;
