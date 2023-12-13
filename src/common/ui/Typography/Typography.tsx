import { ComponentPropsWithoutRef, ElementType } from 'react'

import { TypographyVariant } from '@/common/enums'
import cn from 'classnames'

import s from './Typography.module.scss'

type TextAlign = 'center' | 'inherit' | 'left' | 'right'

type Props<T extends ElementType = 'p'> = {
  as?: T
  className?: string
  textAlign?: TextAlign
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const {
    as: Component = 'p',
    children,
    className,
    textAlign = 'left',
    variant = TypographyVariant.body1,
  } = props

  return (
    <Component className={cn(s.typography, s[variant], className)} style={{ textAlign }}>
      {children}
    </Component>
  )
}
