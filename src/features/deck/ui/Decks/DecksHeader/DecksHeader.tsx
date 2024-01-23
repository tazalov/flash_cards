import { ComponentPropsWithoutRef } from 'react'
import { useTranslation } from 'react-i18next'

import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'

import s from './DecksHeader.module.scss'

import { CreateDeckModal } from '../../DeckActions/CreateDeckModal/CreateDeckModal'

type Props = {
  headerText?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>
export const DecksHeader = ({ headerText, ...props }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={s.header} {...props}>
      <Typography as="h1" variant={TypographyVariant.large}>
        {headerText || t('Decks list')}
      </Typography>
      <CreateDeckModal />
    </div>
  )
}
