import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import { ControlledCheckbox } from '@/common/ui_controlled/ControlledCheckbox'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import cn from 'classnames'

import s from './SignInForm.module.scss'

import { SignInFormData, useSignInForm } from '../../model/hooks/useSignInForm'

interface Props {
  className?: string
  disabled?: boolean
  onSubmit: (data: SignInFormData) => void
}

export const SignInForm = ({ className, disabled, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useSignInForm()

  const { t } = useTranslation()

  return (
    <Card as="form" className={cn(s.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <Typography as="h2" className={s.headerText} variant={TypographyVariant.large}>
        {t('Sign In')}
      </Typography>
      <ControlledTextField
        className={s.input}
        control={control}
        disabled={disabled}
        errorText={errors?.email?.message}
        label={t('Email')}
        name="email"
        type="email"
      />
      <ControlledTextField
        className={s.input}
        control={control}
        disabled={disabled}
        errorText={errors?.password?.message}
        label={t('Password')}
        name="password"
        type="password"
      />
      <ControlledCheckbox
        className={s.checkbox}
        control={control}
        disabled={disabled}
        label={t('Remember me')}
        name="rememberMe"
      />
      <Typography
        as={Link}
        className={cn(s.forgotNav, { disabledLink: disabled })}
        to="/forgot-password"
        variant={TypographyVariant.body2}
      >
        {t('Forgot Password')}?
      </Typography>
      <Button className={s.signInBtn} disabled={disabled} fullWidth type="submit">
        {t('Sign In')}
      </Button>
      <Typography className={s.signUpText} variant={TypographyVariant.body2}>
        {t('Don`t have an account')}?
      </Typography>
      <Button
        as={Link}
        className={cn(s.signUpNav, { disabledLink: disabled })}
        to="/sign-up"
        variant={ButtonVariant.link}
      >
        {t('Sign Up')}
      </Button>
    </Card>
  )
}
