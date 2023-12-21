import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import cn from 'classnames'

import s from './IconButton.module.scss'

type Props = {
  icon: ReactNode
  size?: number
} & ComponentPropsWithoutRef<'button'>

export const IconButton = forwardRef<ElementRef<'button'>, Props>(
  ({ className, icon, size = 1, ...restProps }, ref) => {
    return (
      <button
        className={cn(s.iconBtn, className)}
        ref={ref}
        style={{ height: size + 'rem', width: size + 'rem' }}
        {...restProps}
      >
        {icon}
      </button>
    )
  }
)
