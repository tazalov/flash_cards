import { ComponentPropsWithoutRef } from 'react'

import * as RadixTabItem from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './TabItem.module.scss'

type Props = ComponentPropsWithoutRef<typeof RadixTabItem.Trigger>

export const TabItem = (props: Props) => {
  const { children, className, ...rest } = props

  return (
    <RadixTabItem.Trigger className={cn(s.trigger, className)} {...rest}>
      {children}
    </RadixTabItem.Trigger>
  )
}
