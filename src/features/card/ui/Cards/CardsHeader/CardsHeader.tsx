import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { Edit, Info, Play, Trash } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Dropdown } from '@/common/ui/DropDownMenu'
import { IconButton } from '@/common/ui/IconButton'
import { Typography } from '@/common/ui/Typography'
import { Deck } from '@/features/deck/model/types/decks.types'
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

  return (
    <div className={cn(s.header, className)}>
      <div className={s.headerLeft}>
        <Typography variant={TypographyVariant.large}>{deck?.name}</Typography>
        {!isEmpty && isOwner && (
          <Dropdown.Menu
            sideOffset={10}
            trigger={<IconButton className={s.btnIcon} icon={<Info />} size={1.125} />}
          >
            <Dropdown.Item startIcon={<Play />}>Learn</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item onSelect={(e: Event) => e.preventDefault()} startIcon={<Edit />}>
              <UpdateDeckModal deck={deck} trigger={<span>Edit</span>} />
            </Dropdown.Item>

            <Dropdown.Separator />
            <Dropdown.Item startIcon={<Trash />}>Delete</Dropdown.Item>
          </Dropdown.Menu>
        )}
      </div>
      {!isEmpty &&
        (isOwner ? (
          <CreateCardModal deckId={deckId} />
        ) : (
          <Button as={Link} to={`/${deckId}/learn/${name}`}>
            Learn to Pack
          </Button>
        ))}
    </div>
  )
}
