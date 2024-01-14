import { ComponentPropsWithoutRef } from 'react'

import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'

import s from './DecksHeader.module.scss'

import { CreateDeckModal } from '../../DeckActions/CreateDeckModal'

type Props = {
  headerText?: string
  isLoading: boolean
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>
export const DecksHeader = ({ headerText = 'Decks list', isLoading, ...props }: Props) => {
  return (
    <div className={s.header} {...props}>
      <Typography as="h1" variant={TypographyVariant.large}>
        {headerText}
      </Typography>
      <CreateDeckModal isLoading={isLoading} />
    </div>
  )
}
