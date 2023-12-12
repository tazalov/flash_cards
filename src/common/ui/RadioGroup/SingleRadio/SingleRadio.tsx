import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/common/ui/Typography'
import * as RadixRadio from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './SingleRadio.module.scss'

export type SingleRadioProps = {
  className?: string
  title: string
} & Omit<ComponentPropsWithoutRef<typeof RadixRadio.Item>, 'asChild'>

export const SingleRadio = ({ className, disabled, title, ...rest }: SingleRadioProps) => {
  return (
    <Typography as="label" className={cn(s.labelWrapper, { [s.disabled]: disabled }, className)}>
      <RadixRadio.Item className={s.item} disabled={disabled} {...rest}>
        <RadixRadio.Indicator className={s.indicator} />
      </RadixRadio.Item>
      <div className={s.title}>{title}</div>
    </Typography>
  )
}
