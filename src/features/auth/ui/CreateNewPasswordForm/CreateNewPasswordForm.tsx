import { useTranslation } from 'react-i18next'

import { TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import { CatchingData } from '@/common/utils'
import cn from 'classnames'

import s from './CreateNewPasswordForm.module.scss'

import {
  CreateNewPasswordFormValues,
  useCreateNewPasswordForm,
} from '../../model/hooks/useCreateNewPasswordForm'

interface Props {
  className?: string
  disabled?: boolean
  onSubmit: (data: CreateNewPasswordFormValues) => Promise<CatchingData | undefined>
}

export const CreateNewPasswordForm = ({ className, disabled, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useCreateNewPasswordForm()
  const handleSubmitAction = (data: CreateNewPasswordFormValues) => {
    onSubmit(data).then(error => {
      if (error && error.fieldErrors) {
        error.fieldErrors?.forEach(el => {
          setError(el.field as keyof CreateNewPasswordFormValues, { message: el.message })
        })
      }
    })
  }

  const { t } = useTranslation()

  return (
    <Card
      as="form"
      className={cn(s.formContent, className)}
      onSubmit={handleSubmit(handleSubmitAction)}
    >
      <Typography as="h2" className={s.formTitle} variant={TypographyVariant.large}>
        {t('Create new password')}
      </Typography>
      <ControlledTextField
        className={s.input}
        control={control}
        errorText={errors.password?.message}
        label={t('Password')}
        name="password"
        type="password"
      />
      <Typography className={s.formInfoText} variant={TypographyVariant.body2}>
        {t('Create new password and we will send you further instructions to email')}
      </Typography>
      <Button disabled={disabled} fullWidth type="submit">
        {t('Create new password')}
      </Button>
    </Card>
  )
}
