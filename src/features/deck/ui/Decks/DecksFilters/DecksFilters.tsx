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
  handleChangeCardsCounts: (newCardsCounts: number[]) => void
  handleChangeSearch: (newValue: string) => void
  handleChangeTabValue: (newValue: string) => void
  handleClearFilters: () => void
  isLoading: boolean
  max: number | undefined
  min?: number
  searchValue: string
  tabValue: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const DecksFilters = ({
  cardsCounts,
  className,
  handleChangeCardsCounts,
  handleChangeSearch,
  handleChangeTabValue,
  handleClearFilters,
  isLoading,
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
        disabled={isLoading}
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
        <TabItem disabled={isLoading} value="my">
          {t('My Decks')}
        </TabItem>
        <TabItem disabled={isLoading} value="all">
          {t('All Decks')}
        </TabItem>
      </Tabs>
      <Slider
        className={s.slider}
        disabled={isLoading}
        max={max}
        min={min}
        onValueChange={handleChangeCardsCounts}
        value={cardsCounts}
      />
      <Button
        className={s.button}
        disabled={isLoading}
        onClick={handleClearFilters}
        startIcon={<Edit />}
        variant={ButtonVariant.secondary}
      >
        {t('Clear filter')}
      </Button>
    </div>
  )
}
