import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Checkbox } from '@/common/ui/Checkbox'
import { TextField } from '@/common/ui/TextField'
import { Typography } from '@/common/ui/Typography'

import s from './SignInForm.module.scss'

export const SignInForm = () => {
  return (
    <Card as="div" className={s.wrapper}>
      <Typography variant={TypographyVariant.large}>Sign In</Typography>
      <TextField className={s.input} label="Email" type="email"></TextField>
      <TextField className={s.input} label="Password" type="password"></TextField>
      <Checkbox className={s.checkbox} label="Remember me"></Checkbox>
      <Typography as="a" className={s.forgotNav} variant={TypographyVariant.body2}>
        Forgot Password?
      </Typography>
      <Button as="a" className={s.signInBtn} fullWidth>
        Sign In
      </Button>
      <Typography className={s.signUpText} variant={TypographyVariant.body2}>
        Don`t have an account?
      </Typography>
      <Button className={s.signUpNav} variant={ButtonVariant.link}>
        Sign Up
      </Button>
    </Card>
  )
}
