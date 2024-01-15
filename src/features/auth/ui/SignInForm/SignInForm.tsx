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
  isLoading: boolean
  onSubmit: (data: SignInFormData) => void
}
export const SignInForm = ({ className, isLoading, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useSignInForm()

  return (
    <Card as="form" className={cn(s.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <Typography as="h2" className={s.headerText} variant={TypographyVariant.large}>
        Sign In
      </Typography>
      <ControlledTextField
        className={s.input}
        control={control}
        disabled={isLoading}
        errorText={errors?.email?.message}
        label="Email"
        name="email"
        type="email"
      />
      <ControlledTextField
        className={s.input}
        control={control}
        disabled={isLoading}
        errorText={errors?.password?.message}
        label="Password"
        name="password"
        type="password"
      />
      <ControlledCheckbox
        className={s.checkbox}
        control={control}
        disabled={isLoading}
        label="Remember me"
        name="rememberMe"
      />
      <Typography
        as={Link}
        className={cn(s.forgotNav, { disabledLink: isLoading })}
        to="/forgot-password"
        variant={TypographyVariant.body2}
      >
        Forgot Password?
      </Typography>
      <Button className={s.signInBtn} disabled={isLoading} fullWidth type="submit">
        Sign In
      </Button>
      <Typography className={s.signUpText} variant={TypographyVariant.body2}>
        Don`t have an account?
      </Typography>
      <Button
        as={Link}
        className={cn(s.signUpNav, { disabledLink: isLoading })}
        to="/sign-up"
        variant={ButtonVariant.link}
      >
        Sign Up
      </Button>
    </Card>
  )
}
