import { ComponentPropsWithoutRef } from 'react'

import { TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Typography } from '@/common/ui/Typography'

import s from './DecksHeader.module.scss'

type Props = {
  headerText?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>
export const DecksHeader = ({ headerText = 'DecksList', ...props }: Props) => {
  return (
    <div className={s.header} {...props}>
      <Typography as="h1" variant={TypographyVariant.large}>
        {headerText}
      </Typography>
      <Button onClick={() => alert('Откроет модалку добавления колоды')}>Add New Deck</Button>
    </div>
  )
}
