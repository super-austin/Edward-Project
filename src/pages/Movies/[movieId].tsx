//  External Dependencies
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//  Internal Dependencies
import Modal from '@components/Common/Modal';
import MovieModalContent from './MovieModalContent';

//  Custom Hooks
import useMovieWithId from '@hooks/useMovieWithId';

//  Types
import { IMovieData } from '@type/api.types';

const MovieDetail = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { response, isLoading, isError } = useMovieWithId(movieId as string);
  const [isModalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (!isModalVisible) {
      router.back();
    }
  }, [isModalVisible]);

  if (isError) {
    return <h1>Oops! Error happened!</h1>;
  }
  return (
    <>
      {!isLoading && isModalVisible && response.docs?.[0] && (
        <Modal setOpenModal={setModalVisible}>
          <MovieModalContent movie={response.docs[0] as IMovieData} />
        </Modal>
      )}
    </>
  );
};

export default MovieDetail;
