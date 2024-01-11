import { useState } from 'react'

import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'
import cn from 'classnames'

import s from './CreateCardModal.module.scss'

import { useCreateCardMutation } from '../../../model/services/cards.service'
import { CreateCardForm } from '../CreateCardForm/CreateCardForm'

type Props = {
  className?: string
  deckId: string
}

export const CreateCardModal = ({ className, deckId }: Props) => {
  const [open, setOpen] = useState(false)
  const [createCard, { isLoading }] = useCreateCardMutation()
  const handleSubmit = (values: FormData) => {
    createCard({ body: values, id: deckId })
      .unwrap()
      .then(data => {
        if (data) {
          setOpen(false)
        }
      })
  }

  return (
    <Modal
      className={cn(s.modal, className)}
      onOpenChange={setOpen}
      open={open}
      title="Add new Card"
      trigger={<Button>Create New Card</Button>}
    >
      <CreateCardForm isLoading={isLoading} onSubmit={handleSubmit} />
    </Modal>
  )
}
