import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import type { FC } from 'react'
import type { LanguageMenu } from '../Types/generalTypes'

interface TogglableMenuPropsType {
    changeChange: (
      newLanguage: LanguageMenu | null,
      newCurrency: LanguageMenu | null,
    ) => void
    items: LanguageMenu[]
    isLanguageMenu?: boolean
    isVisible: boolean
  }

const MenuItem: FC<{ item: LanguageMenu; onClick: () => void }> = ({
  item,
  onClick,
}) => {
  const { t } = useTranslation()

  return (
    <button
      data-testid="currency-selector"
      onClick={onClick}
      className="w-full flex items-center space-x-2 md:space-x-4 cursor-pointer my-1 p-2 rounded-lg hover:bg-gray-200"
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.content}
          className="w-4 h-4 rounded-full"
        />
      )}
      <div className="flex items-center text-xs md:text-sm">
        <p>{t(item.title)}</p>
        <p>({t(item.content)})</p>
      </div>
    </button>
  )
}

const TogglableMenu: FC<TogglableMenuPropsType> = ({
  changeChange,
  items,
  isLanguageMenu,
  isVisible,
}) => {
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortedItems, setSortedItems] = useState<LanguageMenu[]>(items)

  const onClickHandler = (item: LanguageMenu) => {
    if (isLanguageMenu) {
      changeChange(item, null)
    } else {
      changeChange(null, item)
    }
  }

  useEffect(() => {
    setSortedItems(
      items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.content.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    )
  }, [searchTerm, items])

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isVisible])

  return (
    <div className="">
      <input
        id="search"
        type="text"
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={t('Search')}
        className="w-full p-2 mb-2 rounded-lg border border-gray-300"
      />
      <ul
        data-testid={isLanguageMenu ? 'language-select' : 'currency-select'}
        className="max-h-[300px] w-[250px] overflow-y-auto"
      >
        {sortedItems.map((item: LanguageMenu) => (
          <MenuItem
            key={item.id}
            item={item}
            onClick={() => onClickHandler(item)}
          />
        ))}
      </ul>
    </div>
  )
}

export default TogglableMenu