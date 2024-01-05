import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'
import { useCreateDeckMutation } from '@/features/deck/model/services/decks.service'

import s from './CreateDeckModal.module.scss'

import { CreateDeckForm } from './CreateDeckForm'

export const CreateDeckModal = () => {
  const [createDeck, { isLoading }] = useCreateDeckMutation()

  return (
    <Modal className={s.modal} title="Add new Deck" trigger={<Button>Add New Deck</Button>}>
      <CreateDeckForm isLoading={isLoading} onSubmit={createDeck} />
    </Modal>
  )
}
