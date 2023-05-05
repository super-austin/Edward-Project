//  External Dependencies
import Link from 'next/link';

//  Internal Dependencies
import { normalizeInfo } from '@utils/normalizeInfo';

//  Types
import { ICharacterData } from '@type/api.types';

interface ICharacterCardProps {
  character: ICharacterData;
  selectItem: (newItem: ICharacterData) => void;
}

const CharacterCard = ({ character, selectItem }: ICharacterCardProps) => {
  if (!character) {
    return <></>;
  }
  const { name, race, gender, wikiUrl } = character;
  return (
    <div
      className="flex flex-col justify-center gap-2 w-[310px] h-44 py-4 px-5 rounded-lg border-2 border-gray-200 hover:border-slate-700 hover:bg-slate-100 select-none"
      onClick={() => {
        selectItem(character);
      }}
    >
      {/* Title */}
      <h1 className="text-lg font-bold w-full text-center">{name}</h1>
      <hr className="w-full border-t-2 border-gray-900" />
      {/* Content */}
      <table className="w-full table-fixed mt-2">
        {/* Gender */}
        <tr>
          <th className="text-left">Gender:</th>
          <td>{normalizeInfo(gender)}</td>
        </tr>
        {/* Race */}
        <tr>
          <th className="text-left">Race:</th>
          <td>{normalizeInfo(race)}</td>
        </tr>
        {/* Wiki */}
        {wikiUrl && (
          <tr>
            <th className="text-left text-blue-500">
              <Link href={normalizeInfo(wikiUrl, '')}>Wiki Info</Link>
            </th>
          </tr>
        )}
      </table>
    </div>
  );
};

export default CharacterCard;
