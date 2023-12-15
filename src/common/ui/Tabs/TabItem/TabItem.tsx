import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as RadixTabItem from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './TabItem.module.scss'

type Props = {
  children: ReactNode
  disabled?: boolean
  value: string
} & ComponentPropsWithoutRef<typeof RadixTabItem.Trigger>

export const TabItem = (props: Props) => {
  const { children, className, disabled, value } = props

  return (
    <RadixTabItem.Trigger className={cn(s.trigger, className)} disabled={disabled} value={value}>
      {children}
    </RadixTabItem.Trigger>
  )
}
