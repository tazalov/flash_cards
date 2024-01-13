import { ComponentPropsWithoutRef, useRef } from 'react'

import { LoadPicture, Trash } from '@/common/assets/icons'
import { ButtonVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { FileUploader } from '@/common/ui/FilesUploader'
import { IconButton } from '@/common/ui/IconButton'
import { ModalClose } from '@/common/ui/Modals/ModalClose'
import { ControlledCheckbox } from '@/common/ui_controlled/ControlledCheckbox'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import { CreateDeckFormData } from '@/features/deck/model/hooks/useCreateDeckForm'
import { useDeckActionsForm } from '@/features/deck/model/hooks/useUpdateDeckForm'
import { Deck } from '@/features/deck/model/types/decks.types'

import s from './DeckActionsForm.module.scss'

type Props = {
  deck?: Pick<Deck, 'cover' | 'isPrivate' | 'name'>
  isLoading: boolean
  onSubmit: (data: FormData) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const DeckActionsForm = ({ deck, isLoading, onSubmit }: Props) => {
  const {
    coverOptions: { cover, coverSchema, setCover },
    formOptions: {
      control,
      formState: { errors },
      handleSubmit,
    },
  } = useDeckActionsForm(deck)

  const fileRef = useRef<HTMLInputElement>(null)

  const isDefaultCover = typeof cover === 'string'

  const handleSubmitDeck = (data: CreateDeckFormData) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('isPrivate', `${data.isPrivate}`)
    !isDefaultCover && formData.append('cover', cover || '')

    onSubmit(formData)
  }

  const handleClearCover = () => {
    setCover(null)
  }

  return (
    <form className={s.addNewDeckForm} onSubmit={handleSubmit(handleSubmitDeck)}>
      {cover && (
        <div className={s.coverWrapper}>
          <img
            alt="cover"
            className={s.cover}
            src={isDefaultCover ? cover : URL.createObjectURL(cover)}
          />
          <IconButton
            className={s.clearCover}
            disabled={isLoading}
            icon={<Trash />}
            onClick={handleClearCover}
            size={1.5}
            type="button"
          >
            clear
          </IconButton>
        </div>
      )}
      <FileUploader
        disabled={isLoading}
        ref={fileRef}
        setFile={setCover}
        trigger={
          <Button
            as="span"
            className={s.marginItem}
            fullWidth
            startIcon={<LoadPicture />}
            variant={ButtonVariant.secondary}
          >
            Change Cover
          </Button>
        }
        validationSchema={coverSchema}
      />
      <ControlledTextField
        className={s.marginItem}
        control={control}
        disabled={isLoading}
        errorText={errors?.name?.message}
        label="Name Deck"
        name="name"
      />
      <ControlledCheckbox
        className={s.addNewDeckCheckBox}
        control={control}
        disabled={isLoading}
        label="Private Deck"
        name="isPrivate"
      />
      <div className={s.btnWrapper}>
        <ModalClose>
          <Button disabled={isLoading} variant={ButtonVariant.secondary}>
            Cancel
          </Button>
        </ModalClose>
        <Button disabled={isLoading} type="submit">
          Save Changes
        </Button>
      </div>
    </form>
  )
}
