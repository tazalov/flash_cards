import { ComponentPropsWithoutRef, ElementRef, ElementType, forwardRef } from 'react'

import cn from 'classnames'

import s from './Card.module.scss'

type Props<T extends ElementType> = {
  as?: T
  className?: string
  height?: string
  width?: string
} & ComponentPropsWithoutRef<T>

export const Card = forwardRef(
  <T extends ElementType = 'div'>(
    {
      as,
      className,
      height,
      style,
      width,
      ...restProps
    }: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
    ref: ElementRef<T>
  ) => {
    const Component: ElementType = as || 'div'

    return (
      <Component
        className={cn(s.card, className)}
        {...restProps}
        ref={ref}
        style={{ ...style, height, width }}
      />
    )
  }
)
