import { ComponentPropsWithoutRef } from 'react'
import { useTranslation } from 'react-i18next'

import { Edit } from '@/common/assets/icons'
import { ButtonVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Slider } from '@/common/ui/Slider'
import { Tabs } from '@/common/ui/Tabs'
import { TabItem } from '@/common/ui/Tabs/TabItem'
import { TextField } from '@/common/ui/TextField'
import cn from 'classnames'

import s from './DecksFilters.module.scss'

type Props = {
  cardsCounts: number[]
  disabled?: boolean
  handleChangeCardsCounts: (newCardsCounts: number[]) => void
  handleChangeSearch: (newValue: string) => void
  handleChangeTabValue: (newValue: string) => void
  handleClearFilters: () => void
  max: number | undefined
  min?: number
  searchValue: string
  tabValue: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const DecksFilters = ({
  cardsCounts,
  className,
  disabled,
  handleChangeCardsCounts,
  handleChangeSearch,
  handleChangeTabValue,
  handleClearFilters,
  max,
  min = 0,
  searchValue,
  tabValue,
  ...rest
}: Props) => {
  const { t } = useTranslation()

  return (
    <div className={cn(s.filters, className)} {...rest}>
      <TextField
        className={s.input}
        disabled={disabled}
        onChangeValue={handleChangeSearch}
        type="search"
        value={searchValue}
      />
      <Tabs
        className={s.tabs}
        label={t('Show decks')}
        onValueChange={handleChangeTabValue}
        value={tabValue}
      >
        <TabItem disabled={disabled} value="my">
          {t('My Decks')}
        </TabItem>
        <TabItem disabled={disabled} value="all">
          {t('All Decks')}
        </TabItem>
      </Tabs>
      <Slider
        className={s.slider}
        disabled={disabled}
        max={max}
        min={min}
        onValueChange={handleChangeCardsCounts}
        value={cardsCounts}
      />
      <Button
        className={s.button}
        disabled={disabled}
        onClick={handleClearFilters}
        startIcon={<Edit />}
        variant={ButtonVariant.secondary}
      >
        {t('Clear filter')}
      </Button>
    </div>
  )
}
