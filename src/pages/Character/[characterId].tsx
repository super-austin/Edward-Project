//  External Dependencies
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

//  Internal Dependencies
import Modal from "@components/Common/Modal";
import CharacterModalContent from "./CharacterModalContent";

//  Custom Hooks
import useCharacterWithId from "@/hooks/useCharacterWithId";

//  Types
import { ICharacterData } from "@type/api.types";

const CharacterDetail = () => {
  const router = useRouter();
  const { characterId } = router.query;
  const { response, isLoading, isError } = useCharacterWithId(
    characterId as string
  );
  const [isModalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (!isModalVisible) {
      router.back();
    }
  }, [isModalVisible]);

  if (isError) return <h1>Oops! Error happened!</h1>;
  return (
    <>
      {!isLoading && isModalVisible && response.docs?.[0] && (
        <Modal setOpenModal={setModalVisible}>
          <CharacterModalContent
            character={response.docs[0] as ICharacterData}
          />
        </Modal>
      )}
    </>
  );
};

export default CharacterDetail;
