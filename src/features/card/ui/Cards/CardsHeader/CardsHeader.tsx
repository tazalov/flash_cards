import { ComponentPropsWithoutRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Edit, Info, Play, Trash } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Dropdown } from '@/common/ui/DropDownMenu'
import { IconButton } from '@/common/ui/IconButton'
import { Typography } from '@/common/ui/Typography'
import { Deck } from '@/features/deck/model/types/decks.types'
import { RemoveDeckModal } from '@/features/deck/ui/DeckActions/RemoveDeckModal/RemoveDeckModal'
import { UpdateDeckModal } from '@/features/deck/ui/DeckActions/UpdateDeckModal/UpdateDeckModal'
import cn from 'classnames'

import s from './CardsHeader.module.scss'

import { CreateCardModal } from '../../CardActions/CreateCardModal/CreateCardModal'

type Props = {
  deck: Deck
  deckId: string
  isEmpty?: boolean
  isOwner: boolean
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const CardsHeader = (props: Props) => {
  const { className, deck, deckId, isEmpty, isOwner } = props

  const handleSelectItem = (e: Event) => e.preventDefault()
  const { t } = useTranslation()

  return (
    <div className={cn(s.header, className)}>
      <div className={s.headerLeft}>
        <Typography className={s.title} variant={TypographyVariant.large}>
          {deck.name}
        </Typography>
        {!isEmpty && isOwner && (
          <Dropdown.Menu
            sideOffset={10}
            trigger={<IconButton className={s.btnIcon} icon={<Info />} size={1.125} />}
          >
            <Dropdown.Item startIcon={<Play />}>
              <Link to={`/${deckId}/learn/${deck.name}`}>{t('Learn')}</Link>
            </Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item onSelect={handleSelectItem} startIcon={<Edit />}>
              <UpdateDeckModal deck={deck} trigger={<span>{t('Edit')}</span>} />
            </Dropdown.Item>

            <Dropdown.Separator />
            <Dropdown.Item onSelect={handleSelectItem} startIcon={<Trash />}>
              <RemoveDeckModal
                deckId={deckId}
                deckName={deck.name}
                trigger={<span>{t('Delete')}</span>}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
      </div>
      {!isEmpty &&
        (isOwner ? (
          <CreateCardModal deckId={deckId} />
        ) : (
          <Button as={Link} to={`/${deckId}/learn/${deck.name}`}>
            {t('Learn to Pack')}
          </Button>
        ))}
    </div>
  )
}
