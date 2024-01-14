import { ReactNode } from 'react'

import { RemoveItemModal } from '@/common/ui/RemoveItemModal'

import { useRemoveDeckMutation } from '../../../model/services/decks.service'

interface Props {
  className?: string
  deckId: string
  deckName: string
  trigger: ReactNode
}

export const RemoveDeckModal = ({ deckId, deckName, ...rest }: Props) => {
  const [removeDeck, { isLoading }] = useRemoveDeckMutation()

  const handleRemoveDeck = () => {
    removeDeck({ id: deckId })
  }

  return (
    <RemoveItemModal
      handleRemoveItem={handleRemoveDeck}
      isLoading={isLoading}
      itemName={deckName}
      title="Remove deck"
      {...rest}
    />
  )
}
