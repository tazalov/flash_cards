import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Cross, Edit } from '@/common/assets/icons'
import { ALLOWED_IMAGES_FORMATS, MAX_SIZE_IMAGE } from '@/common/const'
import { ButtonVariant } from '@/common/enums'
import { Avatar } from '@/common/ui/Avatar'
import { Button } from '@/common/ui/Button'
import { FileUploader } from '@/common/ui/FilesUploader'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import cn from 'classnames'
import { z } from 'zod'

import s from './EditProfileForm.module.scss'

const coverSchema = z
  .instanceof(File)
  .refine(
    file => file.size <= MAX_SIZE_IMAGE,
    `Max image size is 1MB. The file will not be uploaded.`
  )
  .refine(
    file => ALLOWED_IMAGES_FORMATS.includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported. The file will not be uploaded.'
  )

export interface EditProfileValues {
  username: string
}

interface Props {
  avatarUrl?: string
  className?: string
  initialValue?: string
  onSubmit: (data: FormData) => void
}

export const EditProfileForm = ({ avatarUrl, className, initialValue, onSubmit }: Props) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const [avatar, setAvatar] = useState<File | null>(null)

  const avatarIsValid =
    avatar !== null && ALLOWED_IMAGES_FORMATS.includes(avatar.type) && avatar.size <= MAX_SIZE_IMAGE

  const { control, handleSubmit } = useForm<EditProfileValues>()

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
            onClick={handleClearCover}
            startIcon={<Cross className={s.crossIcon} />}
            variant={ButtonVariant.secondary}
          />
        )}
        <FileUploader
          className={s.avatarLoader}
          ref={fileRef}
          setFile={setAvatar}
          trigger={<Button as="span" className={s.trigger} startIcon={<Edit />} />}
          validationSchema={coverSchema}
        />
      </div>
      <ControlledTextField
        className={s.nickname}
        control={control}
        defaultValue={initialValue}
        label="Nickname"
        name="username"
      />
      <Button fullWidth type="submit">
        Save changes
      </Button>
    </form>
  )
}
