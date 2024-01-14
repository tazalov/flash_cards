import { RemoveItemModal } from '@/common/ui/RemoveItemModal'

import { useRemoveCardMutation } from '../../../model/services/cards.service'

interface Props {
  cardId: string
  cardName: string
  className?: string
}

export const RemoveCardModal = ({ cardId, cardName, className }: Props) => {
  const [removeCard, { isLoading }] = useRemoveCardMutation()

  const handleRemoveCard = () => {
    removeCard({ id: cardId })
  }

  return (
    <RemoveItemModal
      className={className}
      handleRemoveItem={handleRemoveCard}
      isLoading={isLoading}
      itemName={cardName}
      title="Remove card"
    />
  )
}
