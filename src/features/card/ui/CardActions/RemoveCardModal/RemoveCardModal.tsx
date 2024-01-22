import { ReactNode } from 'react'
import { toast } from 'react-toastify'

import { RemoveItemModal } from '@/common/ui/RemoveItemModal'
import { handleErrorResponse } from '@/common/utils'

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
    removeCard({ id: cardId }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success('The card has been deleted')
      }
    })
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
