import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import { TypographyVariant } from '@/common/enums'
import { PolymorphRef } from '@/common/types'
import cn from 'classnames'

import s from './Typography.module.scss'

type TextAlign = 'center' | 'inherit' | 'left' | 'right'

type Props<T extends ElementType = 'p'> = {
  as?: T
  className?: string
  textAlign?: TextAlign
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

type TypographyComponent = <T extends ElementType = 'p'>(
  props: Props<T> & PolymorphRef<T>
) => ReactNode

export const Typography: TypographyComponent = forwardRef(
  <T extends ElementType = 'p'>(
    {
      as,
      children,
      className,
      textAlign = 'left',
      variant = TypographyVariant.body1,
      ...rest
    }: Props<T>,
    ref: ElementRef<T>
  ) => {
    const Component: ElementType = as || 'p'

    return (
      <Component
        className={cn(s.typography, s[variant], className)}
        ref={ref}
        style={{ textAlign }}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)
