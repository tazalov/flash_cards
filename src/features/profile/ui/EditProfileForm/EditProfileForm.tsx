import { useForm } from 'react-hook-form'

import { Button } from '@/common/ui/Button'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import cn from 'classnames'

import s from './EditProfileForm.module.scss'

export interface EditProfileValues {
  nickname: string
}

interface Props {
  className?: string
  initialValue: string
  onSubmit: (data: EditProfileValues) => void
}

export const EditProfileForm = ({ className, initialValue, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<EditProfileValues>()

  return (
    <form className={cn(s.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField
        className={s.nickname}
        control={control}
        defaultValue={initialValue}
        label="Nickaname"
        name="nickname"
      />
      <Button fullWidth type="submit">
        Save changes
      </Button>
    </form>
  )
}
