import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import { Arrow } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { PolymorphRef } from '@/common/types'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './BackToPreviousPage.module.scss'

type Props<T extends ElementType> = {
  as?: T
  handleNavigate: () => void
  title: string
} & ComponentPropsWithoutRef<T>

type BackToPreviousPageComponent = <T extends ElementType = 'div'>(
  props: Props<T> & PolymorphRef<T>
) => ReactNode

export const BackToPreviousPage: BackToPreviousPageComponent = forwardRef(
  <T extends ElementType = 'div'>(
    { as, className, handleNavigate, title, ...restProps }: Props<T>,
    ref: ElementRef<T>
  ) => {
    const Component: ElementType = as || 'div'

    return (
      <Component
        className={cn(s.link, className)}
        onClick={handleNavigate}
        ref={ref}
        {...restProps}
      >
        <Arrow className={s.iconArrow} />
        <Typography variant={TypographyVariant.body2}>{title}</Typography>
      </Component>
    )
  }
)
