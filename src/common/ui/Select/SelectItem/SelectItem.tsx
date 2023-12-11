import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import * as RadixSelect from '@radix-ui/react-select'
import cn from 'classnames'

import s from './SelectItem.module.scss'

type Props = {
  className?: string
  pagination?: boolean
  variant: TypographyVariant
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

export const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, Props>(
  ({ children, className, pagination, variant, ...restProps }, ref) => {
    return (
      <RadixSelect.Item
        className={cn(s.item, { [s.paginationItem]: pagination }, className)}
        ref={ref}
        {...restProps}
      >
        <RadixSelect.ItemText>
          <Typography variant={variant}>{children}</Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
