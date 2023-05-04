//  Internal Dependencies
import { normalizeInfo } from "@utils/normalizeInfo";

//  Types
import { ICharacterData } from "@type/api.types";
import Link from "next/link";

interface ICharacterModalContentProps {
  character: ICharacterData;
}

const CharacterModalContent = ({ character }: ICharacterModalContentProps) => {
  if (!character) return <></>;
  const {
    race,
    gender,
    birth,
    spouse,
    death,
    realm,
    hair,
    name,
    wikiUrl,
    height,
  } = character;
  return (
    <div className="flex flex-col min-w-[250px] sm:min-w-[300px] justify-center gap-2 pb-4 px-5 select-none">
      {/* Character Name: if this character has wiki url then click name to redirect to wiki page */}
      <h1
        className={`text-lg font-bold px-5 w-full text-center ${
          wikiUrl ? "text-blue-500" : ""
        }`}
      >
        {wikiUrl ? <Link href={wikiUrl}>{name}</Link> : <>{name}</>}
      </h1>
      <hr className="w-full border-t-2 border-gray-900" />
      <div className="w-full flex flex-col gap-3 mt-2">
        {/* Gender */}
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Gender:</div>
          <div>{normalizeInfo(gender)}</div>
        </div>
        {/* Race */}
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Race:</div>
          <div>{normalizeInfo(race)}</div>
        </div>
        {/* Region */}
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Region:</div>
          <div>{normalizeInfo(realm)}</div>
        </div>
        {/* Hair */}
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Hair:</div>
          <div>{normalizeInfo(hair)}</div>
        </div>
        {/* Height */}
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Height:</div>
          <div>{normalizeInfo(height)}</div>
        </div>
        {/* Birth */}
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Birth:</div>
          <div>{normalizeInfo(birth)}</div>
        </div>
        {/* Death */}
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Death:</div>
          <div>{normalizeInfo(death)}</div>
        </div>
        {/* Spouse */}
        <div className="w-full flex flex-row">
          <div className="w-1/3 font-bold">Spouse:</div>
          <div>{normalizeInfo(spouse)}</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModalContent;
