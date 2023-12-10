import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './Button.module.scss'

type Props<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  icon?: string
  variant?: 'link' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    icon,
    variant = 'primary',
    ...rest
  } = props

  const finalClassNames = `${s.button} ${s[variant]}${fullWidth ? ' ' + s.fullWidth : ''}${
    className ? ' ' + className : ''
  }`

  return (
    <Component className={finalClassNames} {...rest}>
      {icon && <img alt="icon" src={icon} />}
      {children}
    </Component>
  )
}
