import { ReactNode, useState } from 'react'

import { Modal } from '@/common/ui/Modals'
import { useUpdateDeckMutation } from '@/features/deck/model/services/decks.service'
import { Deck } from '@/features/deck/model/types/decks.types'

import s from './UpdateDeckModal.module.scss'

import { DeckActionsForm } from '../DeckActionsForm/DeckActionsForm'

type Props = {
  deck: Deck
  trigger: ReactNode
}

export const UpdateDeckModal = ({ deck, trigger }: Props) => {
  const [open, setOpen] = useState(false)
  const [update, { isLoading }] = useUpdateDeckMutation()
  const handleSubmit = (body: FormData) => {
    update({ body, id: deck.id })
      .unwrap()
      .then(data => {
        if (data) {
          setOpen(false)
        }
      })
  }

  return (
    <Modal
      className={s.modal}
      onOpenChange={setOpen}
      open={open}
      title="Edit deck"
      trigger={trigger}
    >
      <DeckActionsForm deck={deck} isLoading={isLoading} onSubmit={handleSubmit} />
    </Modal>
  )
}
