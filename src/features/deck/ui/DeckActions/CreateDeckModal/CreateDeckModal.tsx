import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'
import { useCreateDeckMutation } from '@/features/deck/model/services/decks.service'

import { CreateDeckForm } from './CreateDeckForm'

export const CreateDeckModal = () => {
  const [createDeck, { isLoading }] = useCreateDeckMutation()

  return (
    <Modal title="Add new Deck" trigger={<Button>Add New Deck</Button>}>
      <CreateDeckForm isLoading={isLoading} onSubmit={createDeck} />
    </Modal>
  )
}
