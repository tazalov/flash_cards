import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { Edit, Info, Play, Trash } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Dropdown } from '@/common/ui/DropDownMenu'
import { IconButton } from '@/common/ui/IconButton'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './CardsHeader.module.scss'

import { CreateCardModal } from '../../CardActions/CreateCardModal/CreateCardModal'

type Props = {
  deckId: string
  isEmpty?: boolean
  isOwner: boolean
  name?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const CardsHeader = (props: Props) => {
  const { className, deckId, isEmpty, isOwner, name } = props

  return (
    <div className={cn(s.header, className)}>
      <div className={s.headerLeft}>
        <Typography variant={TypographyVariant.large}>{name}</Typography>
        {!isEmpty && isOwner && (
          <Dropdown.Menu
            sideOffset={10}
            trigger={<IconButton className={s.btnIcon} icon={<Info />} size={1.125} />}
          >
            <Dropdown.Item startIcon={<Play />}>Learn</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item startIcon={<Edit />}>Edit</Dropdown.Item>
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
