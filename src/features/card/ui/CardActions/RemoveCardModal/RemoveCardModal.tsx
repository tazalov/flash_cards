import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
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

  const { t } = useTranslation()

  const handleRemoveCard = () => {
    removeCard({ id: cardId }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(t('The card has been deleted'))
      }
    })
  }

  return (
    <RemoveItemModal
      disabled={isLoading}
      handleRemoveItem={handleRemoveCard}
      itemName={cardName}
      title={t('Remove card')}
      {...rest}
    />
  )
}
