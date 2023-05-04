//  External Dependencies
import { useState } from "react";

//  Internal Dependencies
import Modal from "@components/Common/Modal";
import MovieModalContent from "./MovieModalContent";

//  Hooks
import useMovie from "@hooks/useMovie";

//  Types
import { IMovieData } from "@type/api.types";
import MovieCart from "./MovieCard";

const Movies = () => {
  const [pageId, setPageId] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<IMovieData>();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const { response, isError } = useMovie("", pageId, keyword);

  const handleSelectMovie = (newData: IMovieData) => {
    setSelectedItem(newData);
    setModalVisible(true);
  };

  // If there are some errors, custom error page
  if (isError) return <h1>Oops! Error happened!</h1>;
  else
    return (
      <>
        <main className="w-full flex justify-center overflow-y-auto">
          <div className="container h-full pt-20 pb-40 px-10 flex flex-col items-center gap-20">
            {/* Title */}
            <h1 className="text-2xl sm:text-6xl underline underline-offset-8">
              &nbsp;&nbsp;Movies&nbsp;&nbsp;
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
                {response.docs.map((item: IMovieData) => (
                  <MovieCart
                    key={item._id}
                    movie={item}
                    selectItem={handleSelectMovie}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Detail Modal */}
        {selectedItem && isModalVisible && (
          <Modal setOpenModal={setModalVisible}>
            <MovieModalContent movie={selectedItem} />
          </Modal>
        )}
      </>
    );
};

export default Movies;
