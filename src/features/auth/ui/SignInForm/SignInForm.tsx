import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import { ControlledCheckbox } from '@/common/ui_controlled/ControlledCheckbox'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import { SignInFormData, useSignInForm } from '@/features/auth/ui/SignInForm/useSignInForm'
import cn from 'classnames'

import s from './SignInForm.module.scss'

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
      <Typography as="header" className={s.headerText} variant={TypographyVariant.large}>
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
        as="a"
        className={s.forgotNav}
        onClick={() => 'navigate to forgot password form'}
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
      <Button
        as="a"
        className={s.signUpNav}
        onClick={() => 'navigate to Sign up form'}
        variant={ButtonVariant.link}
      >
        Sign Up
      </Button>
    </Card>
  )
}
