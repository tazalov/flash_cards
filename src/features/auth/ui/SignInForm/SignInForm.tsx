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
  onSubmit: (data: SignInFormData) => void
}
export const SignInForm = ({ className, onSubmit }: Props) => {
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
        errorText={errors?.email?.message}
        label="Email"
        name="email"
        type="email"
      />
      <ControlledTextField
        className={s.input}
        control={control}
        errorText={errors?.password?.message}
        label="Password"
        name="password"
        type="password"
      />
      <ControlledCheckbox
        className={s.checkbox}
        control={control}
        label="Remember me"
        name="rememberMe"
      />
      <Typography
        as={Link}
        className={s.forgotNav}
        to="/forgot-password"
        variant={TypographyVariant.body2}
      >
        Forgot Password?
      </Typography>
      <Button className={s.signInBtn} fullWidth type="submit">
        Sign In
      </Button>
      <Typography className={s.signUpText} variant={TypographyVariant.body2}>
        Don`t have an account?
      </Typography>
      <Button as={Link} className={s.signUpNav} to="/sign-up" variant={ButtonVariant.link}>
        Sign Up
      </Button>
    </Card>
  )
}
