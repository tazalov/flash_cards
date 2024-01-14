import { ReactNode } from 'react'

import { RemoveItemModal } from '@/common/ui/RemoveItemModal'

import { useRemoveCardMutation } from '../../../model/services/cards.service'

interface Props {
  cardId: string
  cardName: string
  className?: string
  trigger: ReactNode
}

export const RemoveCardModal = ({ cardId, cardName, ...rest }: Props) => {
  const [removeCard, { isLoading }] = useRemoveCardMutation()

  const handleRemoveCard = () => {
    removeCard({ id: cardId })
  }

  return (
    <RemoveItemModal
      handleRemoveItem={handleRemoveCard}
      isLoading={isLoading}
      itemName={cardName}
      title="Remove card"
      {...rest}
    />
  )
}
