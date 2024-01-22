import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'
import { handleErrorResponse } from '@/common/utils'

import s from './CreateDeckModal.module.scss'

import { useCreateDeckMutation } from '../../../model/services/decks.service'
import { DeckActionsForm } from '../DeckActionsForm/DeckActionsForm'

export const CreateDeckModal = () => {
  const [open, setOpen] = useState(false)

  const [createDeck, { isLoading: isLoadCreateDeck }] = useCreateDeckMutation()

  const handleSubmit = async (body: FormData) => {
    return createDeck(body).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(`Deck "${body.get('name')}" created successfully`)
        setOpen(false)
      }
    })
  }

  return (
    <Modal
      className={s.modal}
      onOpenChange={setOpen}
      open={open}
      title="Add new Deck"
      trigger={<Button>Add New Deck</Button>}
    >
      <DeckActionsForm disabled={isLoadCreateDeck} onSubmit={handleSubmit} />
    </Modal>
  )
}
