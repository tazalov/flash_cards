import { useState } from 'react'

import { Remove } from '@/common/assets/icons'
import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { IconButton } from '@/common/ui/IconButton'
import { Modal } from '@/common/ui/Modals'
import { ModalClose } from '@/common/ui/Modals/ModalClose'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './RemoveCardModal.module.scss'

import { useRemoveCardMutation } from '../../../model/services/cards.service'

interface Props {
  cardId: string
  cardName: string
  className?: string
}

export const RemoveCardModal = ({ cardId, cardName, className }: Props) => {
  const [open, setOpen] = useState(false)

  const [removeCard, { isLoading }] = useRemoveCardMutation()

  const handleRemoveCard = () => {
    removeCard({ id: cardId })
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
          Do you really want to remove <b>{cardName}?</b>
        </Typography>
        <div className={s.buttons}>
          <ModalClose>
            <Button disabled={isLoading} variant={ButtonVariant.secondary}>
              Cancel
            </Button>
          </ModalClose>
          <Button disabled={isLoading} onClick={handleRemoveCard}>
            Remove Card
          </Button>
        </div>
      </div>
    </Modal>
  )
}
