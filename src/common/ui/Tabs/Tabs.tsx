import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import * as RadixTabsUI from '@radix-ui/react-tabs'

import s from './Tabs.module.scss'

type Props = {
  label?: string
} & Omit<ComponentPropsWithoutRef<typeof RadixTabsUI.Root>, 'asChild'>

export const Tabs = forwardRef<ElementRef<typeof RadixTabsUI.Root>, Props>((props, ref) => {
  const { children, label, onChange, ...rest } = props

  return (
    <RadixTabsUI.Root className={s.root} {...rest} ref={ref}>
      {label && (
        <Typography as="label" className={s.label} variant={TypographyVariant.body2}>
          {label}
        </Typography>
      )}
      <RadixTabsUI.List className={s.list}>{children}</RadixTabsUI.List>
    </RadixTabsUI.Root>
  )
})
