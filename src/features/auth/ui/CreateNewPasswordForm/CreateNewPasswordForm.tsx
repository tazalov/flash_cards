import { TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'

import s from './CreateNewPasswordForm.module.scss'

import { CreateNewPasswordFormValues, useCreateNewPasswordForm } from './useCreateNewPasswordForm'

type Props = {
  onSubmit: (data: CreateNewPasswordFormValues) => void
}

export const CreateNewPasswordForm = ({ onSubmit }: Props) => {
  const { control, errors, handleSubmit } = useCreateNewPasswordForm()

  return (
    <Card className={s.formContent}>
      <Typography className={s.formTitle} variant={TypographyVariant.large}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorText={errors.password?.message}
          label="Password"
          name="password"
          type="password"
        />
        <Typography className={s.formInfoText} variant={TypographyVariant.body2}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth type="submit">
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
