import { Link } from 'react-router-dom'

import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import { CatchingData } from '@/common/utils/handleErrorResponse'
import cn from 'classnames'

import s from './SignUpForm.module.scss'

import { SignUpFormValues, useSignUpForm } from '../../model/hooks/useSignUpForm'

interface Props {
  isLoading: boolean
  onSubmit: (body: SignUpFormValues) => Promise<CatchingData | undefined>
}

export const SignUpForm = ({ isLoading, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useSignUpForm()
  const handleSubmitAction = (data: SignUpFormValues) => {
    onSubmit(data).then(error => {
      if (error && error.fieldErrors) {
        error.fieldErrors?.forEach(el => {
          setError(el.field as keyof SignUpFormValues, { message: el.message })
        })
      }
    })
  }

  return (
    <Card as="form" className={s.formContent} onSubmit={handleSubmit(handleSubmitAction)}>
      <Typography as="h2" className={s.formTitle} variant={TypographyVariant.large}>
        Sign Up
      </Typography>
      <ControlledTextField
        className={s.input}
        control={control}
        disabled={isLoading}
        errorText={errors.email?.message}
        label="Email"
        name="email"
        type="email"
      />
      <ControlledTextField
        className={s.input}
        control={control}
        disabled={isLoading}
        errorText={errors.password?.message}
        label="Password"
        name="password"
        type="password"
      />
      <ControlledTextField
        className={s.input}
        control={control}
        disabled={isLoading}
        errorText={errors.confirmPassword?.message}
        label="Confirm password"
        name="confirmPassword"
        type="password"
      />
      <Button className={s.btnSubmit} disabled={isLoading} fullWidth type="submit">
        Sign Up
      </Button>
      <Typography className={s.formFooterText} variant={TypographyVariant.body2}>
        Already have an account?
      </Typography>
      <Button
        as={Link}
        className={cn(s.formBtnLink, { disabledLink: isLoading })}
        to="/sign-in"
        type="submit"
        variant={ButtonVariant.link}
      >
        Sign in
      </Button>
    </Card>
  )
}
