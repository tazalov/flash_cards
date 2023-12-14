import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'

import s from './Menu.module.scss'

type MenuProps = {
  children: ReactNode
  className?: string
  trigger: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof RadixDropdown.Content>, 'asChild'>

export const Menu = forwardRef<ElementRef<typeof RadixDropdown.Content>, MenuProps>(
  ({ children, className, trigger, ...restProps }: MenuProps) => {
    return (
      <RadixDropdown.Root>
        <RadixDropdown.Trigger className={cn(s.trigger)}>{trigger}</RadixDropdown.Trigger>
        <RadixDropdown.Portal>
          <RadixDropdown.Content className={cn(s.content, className)} {...restProps}>
            {children}
            <RadixDropdown.Arrow className={s.arrow} />
          </RadixDropdown.Content>
        </RadixDropdown.Portal>
      </RadixDropdown.Root>
    )
  }
)
