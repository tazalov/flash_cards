import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import { CatchingData } from '@/common/utils'
import cn from 'classnames'

import s from './ForgotPasswordForm.module.scss'

import { ForgotPasswordFormData, useForgotPassword } from '../../model/hooks/useForgotPasswordForm'

interface Props {
  className?: string
  disabled?: boolean
  onSubmit: (data: ForgotPasswordFormData) => Promise<CatchingData | undefined>
}
export const ForgotPasswordForm = ({ className, disabled, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForgotPassword()
  const handleSubmitAction = (data: ForgotPasswordFormData) => {
    onSubmit(data).then(error => {
      if (error && error.fieldErrors) {
        error.fieldErrors?.forEach(el => {
          setError(el.field as keyof ForgotPasswordFormData, { message: el.message })
        })
      }
    })
  }
  const { t } = useTranslation()

  return (
    <Card as="form" className={cn(s.form, className)} onSubmit={handleSubmit(handleSubmitAction)}>
      <Typography as="h2" className={s.headerText} variant={TypographyVariant.large}>
        {t('Forgot your password')}?
      </Typography>
      <ControlledTextField
        className={s.input}
        control={control}
        errorText={errors?.email?.message}
        label={t('Email')}
        name="email"
        type="email"
      />
      <Typography className={s.descriptionText} variant={TypographyVariant.body2}>
        {t('Enter email for instruction')}
      </Typography>
      <Button className={s.submitBtn} disabled={disabled} fullWidth type="submit">
        {t('Send Instructions')}
      </Button>
      <Typography className={s.forgotPasswordText} variant={TypographyVariant.body2}>
        {t('Did you remember your password')}?
      </Typography>
      <Button
        as={Link}
        className={cn(s.signUpNav, { disabledLink: disabled })}
        to="/sign-in"
        variant={ButtonVariant.link}
      >
        {t('Try logging in')}
      </Button>
    </Card>
  )
}
