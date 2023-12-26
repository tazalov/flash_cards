import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './Page.module.scss'

type Props = {
  mt?: CSSProperties['marginTop']
} & ComponentPropsWithoutRef<'div'>

export const Page = forwardRef<ElementRef<'div'>, Props>(
  ({ className, mt = '2.25rem', style, ...rest }, ref) => {
    return (
      <div
        className={cn(s.page, className)}
        ref={ref}
        style={{ marginTop: mt, ...style }}
        {...rest}
      />
    )
  }
)
