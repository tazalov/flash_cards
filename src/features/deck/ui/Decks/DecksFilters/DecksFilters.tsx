import { ComponentPropsWithoutRef } from 'react'

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
  max,
  min = 0,
  searchValue,
  tabValue,
  ...rest
}: Props) => {
  return (
    <div className={cn(s.filters, className)} {...rest}>
      <TextField
        className={s.input}
        onChangeValue={handleChangeSearch}
        type="search"
        value={searchValue}
      ></TextField>
      <Tabs
        className={s.tabs}
        label="Show packs cards"
        onValueChange={handleChangeTabValue}
        value={tabValue}
      >
        <TabItem value="my">My Cards</TabItem>
        <TabItem value="all">All Cards</TabItem>
      </Tabs>
      <Slider
        className={s.slider}
        max={max}
        min={min}
        onValueChange={handleChangeCardsCounts}
        value={cardsCounts}
      />
      <Button
        className={s.button}
        onClick={handleClearFilters}
        startIcon={<Edit />}
        variant={ButtonVariant.secondary}
      >
        Clear filter
      </Button>
    </div>
  )
}
