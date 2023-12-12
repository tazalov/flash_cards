import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Check } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import cn from 'classnames'

import s from './Checkbox.module.scss'

type Props = {
  checked: boolean
  className?: string
  label?: string
  onCheckedChange: (checked: boolean) => void
} & Omit<ComponentPropsWithoutRef<typeof RadixCheckbox.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, Props>(
  ({ className, disabled, label, ...restProps }: Props, ref) => {
    return (
      <Typography
        as="label"
        className={cn(s.label, { [s.disabled]: disabled }, className)}
        variant={TypographyVariant.body2}
      >
        <RadixCheckbox.Root className={s.root} disabled={disabled} ref={ref} {...restProps}>
          <RadixCheckbox.Indicator className={s.indicator}>
            <Check />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label}
      </Typography>
    )
  }
)
