import { ReactNode, useState } from 'react'

import { Edit } from '@/common/assets/icons'
import { IconButton } from '@/common/ui/IconButton'
import { Modal } from '@/common/ui/Modals'
import { Card } from '@/features/card'
import cn from 'classnames'

import s from './UpdateCardModal.module.scss'

import { useUpdateCardMutation } from '../../../model/services/cards.service'
import { ActionsCardForm } from '../CreateCardForm/ActionsCardForm'

type Props = {
  card: Card
  className?: string
  currentPage: number
  handleChangePage: (newPage: number) => void
  trigger?: ReactNode
}

export const UpdateCardModal = ({
  card,
  className,
  currentPage,
  handleChangePage,
  trigger = <IconButton icon={<Edit />} />,
}: Props) => {
  const [open, setOpen] = useState(false)

  const [update, { isLoading }] = useUpdateCardMutation()
  const handleUpdateCard = (formValues: FormData) => {
    setOpen(false)
    handleChangePage(1)
    update({ body: formValues, card })
      .unwrap()
      .finally(() => setOpen(false))
      .catch(() => {
        handleChangePage(currentPage)
      })
  }

  return (
    <Modal
      className={cn(s.modal, className)}
      onOpenChange={setOpen}
      open={open}
      title="Update Card"
      trigger={trigger}
    >
      <ActionsCardForm
        card={card}
        isLoading={isLoading}
        onSubmit={handleUpdateCard}
        submitTitle="Update Card"
      />
    </Modal>
  )
}
