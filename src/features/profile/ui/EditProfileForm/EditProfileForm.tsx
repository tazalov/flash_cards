import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Cross, Edit } from '@/common/assets/icons'
import { ALLOWED_IMAGES_FORMATS, COVER_SCHEMA, MAX_SIZE_IMAGE } from '@/common/const'
import { ButtonVariant } from '@/common/enums'
import { Cover } from '@/common/types'
import { Avatar } from '@/common/ui/Avatar'
import { Button } from '@/common/ui/Button'
import { FileUploader } from '@/common/ui/FilesUploader'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import cn from 'classnames'

import s from './EditProfileForm.module.scss'

export interface EditProfileValues {
  username: string
}

interface Props {
  avatarUrl?: string
  className?: string
  disabled?: boolean
  handleDeactivateEditMode: () => void
  initialValue?: string
  onSubmit: (data: FormData) => void
}

export const EditProfileForm = ({
  avatarUrl,
  className,
  disabled,
  handleDeactivateEditMode,
  initialValue,
  onSubmit,
}: Props) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const [avatar, setAvatar] = useState<Cover>(null)

  const avatarIsValid =
    avatar instanceof File &&
    ALLOWED_IMAGES_FORMATS.includes(avatar.type) &&
    avatar.size <= MAX_SIZE_IMAGE

  const { control, handleSubmit } = useForm<EditProfileValues>()

  const { t } = useTranslation()
  const handleOnSubmit = (data: EditProfileValues) => {
    const formData = new FormData()

    formData.append('name', data.username)
    if (avatarIsValid) {
      formData.append('avatar', avatar)
    }

    onSubmit(formData)
  }

  const handleClearCover = () => {
    setAvatar(null)
    if (fileRef.current) {
      fileRef.current.value = ''
    }
  }

  return (
    <form className={cn(s.form, className)} onSubmit={handleSubmit(handleOnSubmit)}>
      <div className={s.avatarWrapper}>
        <Avatar src={avatarIsValid ? URL.createObjectURL(avatar) : avatarUrl} title="UN" />
        {avatarIsValid && (
          <Button
            className={s.crossBtn}
            disabled={disabled}
            onClick={handleClearCover}
            startIcon={<Cross className={s.crossIcon} />}
            variant={ButtonVariant.secondary}
          />
        )}
        <FileUploader
          className={s.avatarLoader}
          disabled={disabled}
          ref={fileRef}
          setFile={setAvatar}
          trigger={<Button as="span" className={s.trigger} startIcon={<Edit />} />}
          validationSchema={COVER_SCHEMA}
        />
      </div>
      <ControlledTextField
        className={s.nickname}
        control={control}
        defaultValue={initialValue}
        disabled={disabled}
        label={t('Nickname')}
        name="username"
      />
      <Button
        className={s.cancel}
        disabled={disabled}
        fullWidth
        onClick={handleDeactivateEditMode}
        type="button"
        variant={ButtonVariant.secondary}
      >
        {t('Cancel')}
      </Button>
      <Button disabled={disabled} fullWidth type="submit">
        {t('Save changes')}
      </Button>
    </form>
  )
}
