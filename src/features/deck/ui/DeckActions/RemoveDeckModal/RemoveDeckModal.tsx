import { useState } from 'react'

import { Remove } from '@/common/assets/icons'
import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { IconButton } from '@/common/ui/IconButton'
import { Modal } from '@/common/ui/Modals'
import { ModalClose } from '@/common/ui/Modals/ModalClose'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './RemoveDeckModal.module.scss'

import { useRemoveDeckMutation } from '../../../model/services/decks.service'

interface Props {
  className?: string
  deckId: string
  deckName: string
}

export const RemoveDeckModal = ({ className, deckId, deckName }: Props) => {
  const [open, setOpen] = useState(false)

  const [removeDeck, { isLoading }] = useRemoveDeckMutation()

  const handleRemoveDeck = () => {
    removeDeck({ id: deckId })
  }

  return (
    <Modal
      className={cn(s.modal, className)}
      onOpenChange={setOpen}
      open={open}
      title="Remove deck"
      trigger={<IconButton icon={<Remove />} />}
    >
      <div className={s.body}>
        <Typography className={s.text} variant={TypographyVariant.body1}>
          Do you really want to remove <b>{deckName}?</b>
          <br />
          All cards will be deleted.
        </Typography>
        <div className={s.buttons}>
          <ModalClose>
            <Button disabled={isLoading} variant={ButtonVariant.secondary}>
              Cancel
            </Button>
          </ModalClose>
          <Button disabled={isLoading} onClick={handleRemoveDeck}>
            Remove Deck
          </Button>
        </div>
      </div>
    </Modal>
  )
}
