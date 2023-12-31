import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'

import s from './Menu.module.scss'

type MenuProps = { trigger: ReactNode } & ComponentPropsWithoutRef<typeof RadixDropdown.Content>

export const Menu = forwardRef<ElementRef<typeof RadixDropdown.Content>, MenuProps>(
  ({ asChild, children, className, trigger, ...rest }, ref) => {
    return (
      <RadixDropdown.Root>
        <RadixDropdown.Trigger asChild>{trigger}</RadixDropdown.Trigger>
        <RadixDropdown.Portal>
          <RadixDropdown.Content className={cn(s.content, className)} ref={ref} {...rest}>
            {children}
            <RadixDropdown.Arrow className={s.arrow} />
          </RadixDropdown.Content>
        </RadixDropdown.Portal>
      </RadixDropdown.Root>
    )
  }
)
