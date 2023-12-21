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
    <Card className={s.formContent}>
      <Typography className={s.formTitle} variant={TypographyVariant.large}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorText={errors.email?.message}
          label="Email"
          name="email"
          type="email"
        />
        <ControlledTextField
          control={control}
          errorText={errors.password?.message}
          label="Password"
          name="password"
          type="password"
        />
        <ControlledTextField
          control={control}
          errorText={errors.confirmPassword?.message}
          label="Confirm password"
          name="confirmPassword"
          type="password"
        />
        <Button fullWidth type="submit">
          Sign Up
        </Button>
      </form>
      <Typography className={s.formFooterText} variant={TypographyVariant.body2}>
        Already have an account?
      </Typography>
      <Button as="a" className={s.formBtnLink} href="#" variant={ButtonVariant.link}>
        Sign in
      </Button>
    </Card>
  )
}
