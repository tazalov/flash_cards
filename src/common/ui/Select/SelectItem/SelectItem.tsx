import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import * as RadixSelect from '@radix-ui/react-select'
import cn from 'classnames'

import s from './SelectItem.module.scss'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

export const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <RadixSelect.Item className={cn(s.item, className)} ref={ref} {...props}>
        <RadixSelect.ItemText>
          <Typography variant={TypographyVariant.body1}>{children}</Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
