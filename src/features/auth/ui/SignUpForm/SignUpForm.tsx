import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'

import s from './SignUpForm.module.scss'

import { SignUpFormValues, useSignUpForm } from './useSignUpForm'

type Props = {
  onSubmit: (data: SignUpFormValues) => void
}

export const SignUpForm = ({ onSubmit }: Props) => {
  const { control, errors, handleSubmit } = useSignUpForm()

  return (
    <Card as="form" className={s.formContent} onSubmit={handleSubmit(onSubmit)}>
      <Typography as="h2" className={s.formTitle} variant={TypographyVariant.large}>
        Sign Up
      </Typography>
      <ControlledTextField
        className={s.input}
        control={control}
        errorText={errors.email?.message}
        label="Email"
        name="email"
        type="email"
      />
      <ControlledTextField
        className={s.input}
        control={control}
        errorText={errors.password?.message}
        label="Password"
        name="password"
        type="password"
      />
      <ControlledTextField
        className={s.input}
        control={control}
        errorText={errors.confirmPassword?.message}
        label="Confirm password"
        name="confirmPassword"
        type="password"
      />
      <Button className={s.btnSubmit} fullWidth type="submit">
        Sign Up
      </Button>
      <Typography className={s.formFooterText} variant={TypographyVariant.body2}>
        Already have an account?
      </Typography>
      <Button as="a" className={s.formBtnLink} href="#" variant={ButtonVariant.link}>
        Sign in
      </Button>
    </Card>
  )
}
