//  External Dependencies
import { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import ResponsivePagination from 'react-responsive-pagination';

//  Internal Dependencies
import Modal from '@components/Common/Modal';
import CharacterModalContent from './CharacterModalContent';
import CharacterCard from './CharacterCard';

//  Hooks
import useCharacters from '@/hooks/useCharacters';

//  Types
import { ICharacterData } from '@type/api.types';

const Characters = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<ICharacterData>();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [pageId, setPageId] = useState<number>(1);
  const debouncedKeyword = useDebounce<string>(keyword, 300);
  const debouncedPageId = useDebounce<number>(pageId, 100);
  const { response, isError } = useCharacters(
    debouncedPageId,
    debouncedKeyword
  );

  useEffect(() => {
    if (response.pages && pageId > response.pages) {
      setPageId(response.pages);
    }
  }, [response.pages]);

  const handleSelectMovie = (newData: ICharacterData) => {
    setSelectedItem(newData);
    setModalVisible(true);
  };

  // If there are some errors, custom error page
  if (isError) {
    return <h1>Oops! Error happened!</h1>;
  } else {
    return (
      <>
        <main className="w-full flex justify-center overflow-y-auto">
          <div className="container h-full pt-20 pb-40 px-10 flex flex-col items-center gap-20">
            {/* Title */}
            <h1 className="text-2xl sm:text-6xl underline underline-offset-8">
              &nbsp;&nbsp;Characters&nbsp;&nbsp;
            </h1>

            {/* Content */}
            <div className="w-full flex flex-col items-center justify-center gap-7 pb-20">
              {/* Search Bar */}
              <input
                type="text"
                className="w-5/6 rounded-md border-none px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:text-sm sm:leading-6 focus-visible:outline-none"
                value={keyword}
                placeholder="Character Name here..."
                onChange={e => setKeyword(e.target.value)}
                autoFocus
              />
              {/* Character List */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-between place-items-center gap-5">
                {(response.docs as ICharacterData[]).map(
                  (item: ICharacterData) => (
                    <CharacterCard
                      key={item._id}
                      character={item}
                      selectItem={handleSelectMovie}
                    />
                  )
                )}
              </div>

              {/* Pagination Component */}
              {response.pages > 1 && (
                <div className="w-1/3">
                  <ResponsivePagination
                    current={pageId}
                    total={response.pages}
                    onPageChange={setPageId}
                  />
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Detail Modal */}
        {selectedItem && isModalVisible && (
          <Modal setOpenModal={setModalVisible}>
            <CharacterModalContent character={selectedItem} />
          </Modal>
        )}
      </>
    );
  }
};

export default Characters;
