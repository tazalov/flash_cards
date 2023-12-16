import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'

import s from './Item.module.scss'

type Props = {
  endIcon?: ReactNode
  startIcon?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropdown.Item>

export const Item = ({ children, className, endIcon, startIcon, ...restProps }: Props) => {
  return (
    <RadixDropdown.Item className={cn(s.item, className)} {...restProps}>
      {startIcon}
      {children}
      {endIcon}
    </RadixDropdown.Item>
  )
}
