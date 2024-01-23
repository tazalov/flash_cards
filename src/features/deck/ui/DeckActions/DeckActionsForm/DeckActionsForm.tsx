import { ComponentPropsWithoutRef, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { LoadPicture, Trash } from '@/common/assets/icons'
import { COVER_SCHEMA } from '@/common/const'
import { ButtonVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { FileUploader } from '@/common/ui/FilesUploader'
import { IconButton } from '@/common/ui/IconButton'
import { ModalClose } from '@/common/ui/Modals/ModalClose'
import { ControlledCheckbox } from '@/common/ui_controlled/ControlledCheckbox'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import { CatchingData } from '@/common/utils/handleErrorResponse'

import s from './DeckActionsForm.module.scss'

import { CreateDeckFormData, useDeckActionsForm } from '../../../model/hooks/useDeckActionsForm'
import { Deck } from '../../../model/types/decks.types'

type Props = {
  btnTitle: string
  deck?: Pick<Deck, 'cover' | 'isPrivate' | 'name'>
  disabled: boolean
  onSubmit: (body: FormData) => Promise<CatchingData | undefined>
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const DeckActionsForm = ({ btnTitle, deck, disabled, onSubmit }: Props) => {
  const {
    coverOptions: { cover, setCover },
    formOptions: {
      control,
      formState: { errors },
      handleSubmit,
      setError,
    },
  } = useDeckActionsForm(deck)

  const { t } = useTranslation()

  const fileRef = useRef<HTMLInputElement>(null)

  const isDefaultCover = typeof cover === 'string'

  const handleSubmitAction = (data: CreateDeckFormData) => {
    const body = new FormData()

    body.append('name', data.name)
    body.append('isPrivate', `${data.isPrivate}`)
    typeof cover !== 'string' && body.append('cover', cover || '')

    onSubmit(body).then(error => {
      if (error && error.fieldErrors) {
        error.fieldErrors?.forEach(el => {
          setError(el.field as keyof CreateDeckFormData, { message: el.message })
        })
      }
    })
  }

  const handleClearCover = () => {
    setCover(null)
  }

  return (
    <form className={s.addNewDeckForm} onSubmit={handleSubmit(handleSubmitAction)}>
      {cover && (
        <div className={s.coverWrapper}>
          <img
            alt="cover"
            className={s.cover}
            src={isDefaultCover ? cover : URL.createObjectURL(cover)}
          />
          <IconButton
            className={s.clearCover}
            disabled={disabled}
            icon={<Trash />}
            onClick={handleClearCover}
            size={1.5}
            type="button"
          >
            {t('clear')}
          </IconButton>
        </div>
      )}
      <FileUploader
        disabled={disabled}
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
            {t('Change cover')}
          </Button>
        }
        validationSchema={COVER_SCHEMA}
      />
      <ControlledTextField
        className={s.marginItem}
        control={control}
        disabled={disabled}
        errorText={errors?.name?.message}
        label={t('Name Deck')}
        name="name"
      />
      <ControlledCheckbox
        className={s.addNewDeckCheckBox}
        control={control}
        disabled={disabled}
        label={t('Private Deck')}
        name="isPrivate"
      />
      <div className={s.btnWrapper}>
        <ModalClose>
          <Button disabled={disabled} variant={ButtonVariant.secondary}>
            {t('Cancel')}
          </Button>
        </ModalClose>
        <Button disabled={disabled} type="submit">
          {btnTitle}
        </Button>
      </div>
    </form>
  )
}
