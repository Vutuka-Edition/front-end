import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';
import type { LanguageMenu } from '../Types/generalTypes';

interface TogglableMenuPropsType {
  changeChange: (newLanguage: LanguageMenu | null, newCurrency: LanguageMenu | null) => void;
  items: LanguageMenu[];
  isLanguageMenu?: boolean;
  isVisible: boolean;
}

const MenuItem: FC<{ item: LanguageMenu; onClick: () => void }> = ({ item, onClick }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center space-x-2 md:space-x-4 cursor-pointer my-1 p-2 rounded-lg hover:bg-gray-200"
    >
      {item.image && <img src={item.image} alt={item.content} className="w-4 h-4 rounded-full" />}
      <div className="flex items-center text-xs md:text-sm">
        <p>{t(item.title)}</p>
        <p>({t(item.content)})</p>
      </div>
    </button>
  );
};

const TogglableMenu: FC<TogglableMenuPropsType> = ({
  changeChange,
  items,
  isLanguageMenu,
  isVisible,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = (item: LanguageMenu) => {
    if (isLanguageMenu) {
      changeChange(item, null);
    } else {
      changeChange(null, item);
    }
  };

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  return (
    <div className="">
      <ul className="max-h-[200px] w-[150px] overflow-y-auto">
        {items.map((item: LanguageMenu) => (
          <MenuItem key={item.id} item={item} onClick={() => onClickHandler(item)} />
        ))}
      </ul>
    </div>
  );
};

export default TogglableMenu;
