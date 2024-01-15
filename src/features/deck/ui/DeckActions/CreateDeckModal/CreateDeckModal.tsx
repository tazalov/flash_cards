import { useState } from 'react'

import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'

import s from './CreateDeckModal.module.scss'

import { useCreateDeckMutation } from '../../../model/services/decks.service'
import { DeckActionsForm } from '../DeckActionsForm/DeckActionsForm'

export const CreateDeckModal = () => {
  const [open, setOpen] = useState(false)
  const [createDeck, { error, isLoading, isSuccess }] = useCreateDeckMutation()

  return (
    <Modal
      className={s.modal}
      onOpenChange={setOpen}
      open={open}
      title="Add new Deck"
      trigger={<Button>Add New Deck</Button>}
    >
      <DeckActionsForm isLoading={isLoading} onSubmit={createDeck} />
    </Modal>
  )
}
