import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Check } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import cn from 'classnames'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  label?: string
} & Omit<ComponentPropsWithoutRef<typeof RadixCheckbox.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ className, disabled, label, ...restProps }, ref) => {
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
