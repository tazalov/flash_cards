import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  KeyboardEvent,
  useState,
} from 'react'

import { CloseEye, OpenEye, Search } from '@/common/assets/icons'
import Cross from '@/common/assets/icons/cross'
import { TypographyVariant } from '@/common/enums'
import cn from 'classnames'

import s from './TextField.module.scss'

import { Typography } from '../Typography'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  errorText?: string
  label?: string
  onPressEnter?: ComponentPropsWithoutRef<'input'>['onKeyDown']
  setValue?: (value: string) => void
}

export const TextField = (props: TextFieldProps) => {
  const {
    children,
    className,
    error,
    errorText,
    label = 'Input',
    name,
    onChange,
    onPressEnter,
    setValue,
    type,
    ...restProps
  } = props
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  const inputType = type === 'password' && showPassword ? 'text' : type
  const cnStyle = {
    crossIcon: s.cross,
    input: cn(
      s.input,
      type === 'search' && s.isLeftIcon,
      type === 'password' && s.isRightIcon,
      type === 'search' && s.isCrossIcon
    ),
    inputWrapper: cn(
      s.inputWrapper,
      !!restProps.value && s.active,
      restProps.disabled && s.disabled,
      !!error && s.error
    ),
    label: cn(s.label, restProps.disabled && s.disabledText),
    leftIcon: s.left,
    rightIcon: s.right,
    root: cn(s.root, className),
  }

  const handleClickClearField = () => {
    setValue?.('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
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
      <div className={cnStyle.inputWrapper} tabIndex={0}>
        {type === 'search' && <Search className={cnStyle.leftIcon} fill="currentColor" />}
        {type === 'search' && restProps.value && (
          <Cross
            className={cnStyle.crossIcon}
            fill="currentColor"
            onClick={handleClickClearField}
          />
        )}
        <input
          className={cnStyle.input}
          onChange={handleChange}
          onKeyDown={handlePressOnEnter}
          type={inputType}
          {...restProps}
        />
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
      {error && (
        <Typography as="span" className={error && s.labelError} variant={TypographyVariant.caption}>
          {errorText}
        </Typography>
      )}
    </div>
  )
}
