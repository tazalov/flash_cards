import { ComponentPropsWithoutRef } from 'react'

import { TypographyVariant } from '@/common/enums'
import { Icon } from '@/common/ui/Icon'
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

export const Checkbox = ({ className, disabled, label, ...restProps }: Props) => {
  return (
    <Typography
      as="label"
      className={cn(s.label, { [s.disabled]: disabled }, className)}
      variant={TypographyVariant.body2}
    >
      <div className={cn(s.checkboxWrapper, { [s.disabled]: disabled })}>
        <RadixCheckbox.Root className={s.root} disabled={disabled} {...restProps}>
          <RadixCheckbox.Indicator className={s.indicator}>
            <Icon
              className={cn(s.checked, { [s.disabled]: disabled })}
              height="24px"
              iconId="checked"
              viewBox="0 0 24 24"
              width="24px"
            />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
      </div>
      {label}
    </Typography>
  )
}
