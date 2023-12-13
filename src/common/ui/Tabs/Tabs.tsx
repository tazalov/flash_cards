import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import * as RadixTabsUI from '@radix-ui/react-tabs'

import s from './Tabs.module.scss'

type Props = {
  children: ReactNode
  label?: string
  value: string
} & Omit<ComponentPropsWithoutRef<typeof RadixTabsUI.Root>, 'asChild'>

export const Tabs = (props: Props) => {
  const { children, label, onChange, ...rest } = props

  return (
    <RadixTabsUI.Root className={s.root} {...rest}>
      {label && (
        <Typography as="label" className={s.label} variant={TypographyVariant.body2}>
          {label}
        </Typography>
      )}
      <RadixTabsUI.List>{children}</RadixTabsUI.List>
    </RadixTabsUI.Root>
  )
}
