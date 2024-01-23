import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'
import { handleErrorResponse } from '@/common/utils'
import cn from 'classnames'

import s from './CreateCardModal.module.scss'

import { useCreateCardMutation } from '../../../model/services/cards.service'
import { ActionsCardForm } from '../ActionsCardForm/ActionsCardForm'

type Props = {
  className?: string
  deckId: string
}

export const CreateCardModal = ({ className, deckId }: Props) => {
  const [open, setOpen] = useState(false)
  const [createCard, { isLoading }] = useCreateCardMutation()
  const handleSubmit = (values: FormData) => {
    return createCard({ body: values, id: deckId }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(t('A new card has been created'))
        setOpen(false)
      }
    })
  }
  const { t } = useTranslation()

  return (
    <Modal
      className={cn(s.modal, className)}
      onOpenChange={setOpen}
      open={open}
      title={t('Add card title')}
      trigger={<Button>Create New Card</Button>}
    >
      <ActionsCardForm
        disabled={isLoading}
        onSubmit={handleSubmit}
        submitTitle={t('Add New Card')}
      />
    </Modal>
  )
}
