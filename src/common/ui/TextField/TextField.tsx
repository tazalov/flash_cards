import { ChangeEvent, ComponentPropsWithoutRef, KeyboardEvent, forwardRef, useState } from 'react'

import { CloseEye, OpenEye, Search } from '@/common/assets/icons'
import Cross from '@/common/assets/icons/cross'
import { TypographyVariant } from '@/common/enums'
import cn from 'classnames'

import s from './TextField.module.scss'

import { Typography } from '../Typography'

export type TextFieldProps = {
  errorText?: string
  inputClassName?: string
  label?: string
  onChangeValue?: (value: string) => void
  onPressEnter?: ComponentPropsWithoutRef<'input'>['onKeyDown']
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    children,
    className,
    disabled,
    errorText,
    inputClassName,
    label,
    name,
    onChange,
    onChangeValue,
    onPressEnter,
    type,
    value,
    ...restProps
  } = props
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  const inputType = type === 'password' && showPassword ? 'text' : type
  const isShowCrossIcon = type === 'search' && value
  const cnStyle = {
    input: cn(
      s.input,
      {
        [s.active]: !!value,
        [s.error]: !!errorText,
        [s.isLeftIcon]: type === 'search',
        [s.isRightIcon]: type === 'password' || isShowCrossIcon,
      },
      inputClassName
    ),
    inputWrapper: s.inputWrapper,
    label: cn(s.label, { [s.disabled]: disabled }),
    labelError: cn({ [s.error]: errorText }),
    leftIcon: s.left,
    rightIcon: s.right,
    root: cn(s.root, className),
  }

  const handleClickClearField = () => {
    onChangeValue?.('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }

  const handlePressOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter?.(e)
    }
  }

  return (
    <div className={cnStyle.root}>
      {label && (
        <Typography as="label" className={cnStyle.label} variant={TypographyVariant.body2}>
          {label}
        </Typography>
      )}
      <div className={cnStyle.inputWrapper}>
        {type === 'search' && <Search className={cnStyle.leftIcon} />}
        <input
          className={cnStyle.input}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handlePressOnEnter}
          ref={ref}
          type={inputType}
          value={value}
          {...restProps}
        />
        {isShowCrossIcon && <Cross className={cnStyle.rightIcon} onClick={handleClickClearField} />}
        {type === 'password' && (
          <div onClick={handleClickShowPassword}>
            {showPassword ? (
              <CloseEye className={cnStyle.rightIcon} />
            ) : (
              <OpenEye className={cnStyle.rightIcon} />
            )}
          </div>
        )}
      </div>
      {!!errorText && (
        <Typography as="span" className={cnStyle.labelError} variant={TypographyVariant.caption}>
          {errorText}
        </Typography>
      )}
    </div>
  )
})
