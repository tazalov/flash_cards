import { ComponentPropsWithoutRef } from 'react'

import { Edit, Info, Play, Trash } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Dropdown } from '@/common/ui/DropDownMenu'
import { IconButton } from '@/common/ui/IconButton'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './DeckHeader.module.scss'

type Props = {
  isEmpty?: boolean
  isOwner: boolean
  name?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const DeckHeader = (props: Props) => {
  const { className, isEmpty, isOwner, name } = props

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
            <Dropdown.Separator />
          </Dropdown.Menu>
        )}
      </div>
      {!isEmpty && !isOwner && <Button>Learn to Pack</Button>}
      {!isEmpty && isOwner && <Button>Add New Pack</Button>}
    </div>
  )
}
