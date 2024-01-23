import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { RemoveItemModal } from '@/common/ui/RemoveItemModal'
import { handleErrorResponse } from '@/common/utils'

import { useRemoveDeckMutation } from '../../../model/services/decks.service'

interface Props {
  className?: string
  deckId: string
  deckName: string
  trigger: ReactNode
}

export const RemoveDeckModal = ({ deckId, deckName, ...rest }: Props) => {
  const [removeDeck, { isLoading }] = useRemoveDeckMutation()

  const { t } = useTranslation()

  const handleRemoveDeck = () => {
    removeDeck({ id: deckId }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(`${t('Deck')} ${deckName} ${t('success deleted')}`)
      }
    })
  }

  return (
    <RemoveItemModal
      handleRemoveItem={handleRemoveDeck}
      isLoading={isLoading}
      itemName={deckName}
      title={t('Remove deck')}
      {...rest}
    />
  )
}
