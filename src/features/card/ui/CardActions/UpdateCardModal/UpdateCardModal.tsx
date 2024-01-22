import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { Modal } from '@/common/ui/Modals'
import { handleErrorResponse } from '@/common/utils'
import { Card } from '@/features/card'
import cn from 'classnames'

import s from './UpdateCardModal.module.scss'

import { useUpdateCardMutation } from '../../../model/services/cards.service'
import { ActionsCardForm } from '../ActionsCardForm/ActionsCardForm'

type Props = {
  card: Card
  className?: string
  handleChangePage: (newPage: number) => void
  trigger: ReactNode
}

export const UpdateCardModal = ({ card, className, handleChangePage, trigger }: Props) => {
  const [open, setOpen] = useState(false)

  const [update, { isLoading }] = useUpdateCardMutation()

  const handleUpdateCard = (formValues: FormData) => {
    return update({ body: formValues, card }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        handleChangePage(1)
        toast.success('The card has been successfully updated')
      }
    })
  }

  return (
    <Modal
      className={cn(s.modal, className)}
      onOpenChange={setOpen}
      open={open}
      title="Update Card"
      trigger={trigger}
    >
      <ActionsCardForm
        card={card}
        disabled={isLoading}
        onSubmit={handleUpdateCard}
        submitTitle="Update Card"
      />
    </Modal>
  )
}
