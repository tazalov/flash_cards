import { RemoveItemModal } from '@/common/ui/RemoveItemModal'

import { useRemoveDeckMutation } from '../../../model/services/decks.service'

interface Props {
  className?: string
  deckId: string
  deckName: string
}

export const RemoveDeckModal = ({ className, deckId, deckName }: Props) => {
  const [removeDeck, { isLoading }] = useRemoveDeckMutation()

  const handleRemoveDeck = () => {
    removeDeck({ id: deckId })
  }

  return (
    <RemoveItemModal
      className={className}
      handleRemoveItem={handleRemoveDeck}
      isLoading={isLoading}
      itemName={deckName}
      title="Remove deck"
    />
  )
}
