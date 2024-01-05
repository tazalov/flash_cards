import { ComponentPropsWithoutRef } from 'react'

import { LoadPicture } from '@/common/assets/icons'
import { ALLOWED_IMAGES_FORMATS, MAX_SIZE_IMAGE } from '@/common/const'
import { ButtonVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { FileUploader } from '@/common/ui/FilesUploader'
import { ModalClose } from '@/common/ui/Modals/ModalClose'
import { ControlledCheckbox } from '@/common/ui_controlled/ControlledCheckbox'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import {
  CreateDeckFormData,
  useCreateDeckForm,
} from '@/features/deck/ui/DeckActions/CreateDeckModal/CreateDeckForm/useCreateDeckForm'

import s from './CreateDeckForm.module.scss'

type Props = {
  isLoading?: boolean
  onSubmit: (data: FormData) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const CreateDeckForm = ({ isLoading, onSubmit, ...props }: Props) => {
  const {
    coverOptions: { cover, coverSchema, setCover },
    formOptions: {
      control,
      formState: { errors },
      handleSubmit,
    },
  } = useCreateDeckForm()

  const coverIsValid =
    cover !== null && ALLOWED_IMAGES_FORMATS.includes(cover.type) && cover.size <= MAX_SIZE_IMAGE

  const handleSubmitDeck = (data: CreateDeckFormData) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('isPrivate', `${data.isPrivate}`)
    if (coverIsValid) {
      formData.append('cover', cover)
    }
    onSubmit(formData)
  }

  return (
    <form className={s.addNewDeckForm} onSubmit={handleSubmit(handleSubmitDeck)} {...props}>
      {coverIsValid && <img alt="cover" className={s.cover} src={URL.createObjectURL(cover)} />}
      <FileUploader
        setFile={setCover}
        trigger={
          <Button
            as="span"
            className={s.uploaderTrigger}
            fullWidth
            startIcon={<LoadPicture />}
            variant={ButtonVariant.secondary}
          >
            Add cover for Deck
          </Button>
        }
        validationSchema={coverSchema}
      />
      <ControlledTextField
        className={s.addNewDeckInput}
        control={control}
        errorText={errors?.name?.message}
        label="Name Deck"
        name="name"
      />
      <ControlledCheckbox
        className={s.addNewDeckCheckBox}
        control={control}
        label="Private Deck"
        name="isPrivate"
      />
      <div className={s.btnWrapper}>
        <ModalClose>
          <Button variant={ButtonVariant.secondary}>Cancel</Button>
        </ModalClose>
        <Button disabled={isLoading} type="submit">
          Add New Deck
        </Button>
      </div>
    </form>
  )
}
