import { ComponentPropsWithoutRef } from 'react'

import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import * as RadixRadio from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './SingleRadio.module.scss'

export type SingleRadioProps = {
  className?: string
  label: string
} & Omit<ComponentPropsWithoutRef<typeof RadixRadio.Item>, 'asChild'>

export const SingleRadio = ({ className, disabled, label, ...rest }: SingleRadioProps) => {
  return (
    <Typography as="label" className={cn(s.labelWrapper, { [s.disabled]: disabled }, className)}>
      <RadixRadio.Item className={s.item} disabled={disabled} {...rest}>
        <RadixRadio.Indicator className={s.indicator} />
      </RadixRadio.Item>
      <Typography as="span" className={s.label} variant={TypographyVariant.body2}>
        {label}
      </Typography>
    </Typography>
  )
}
