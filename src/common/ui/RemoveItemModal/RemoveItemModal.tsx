import { useState } from 'react'

import { Remove } from '@/common/assets/icons'
import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { IconButton } from '@/common/ui/IconButton'
import { Modal } from '@/common/ui/Modals'
import { ModalClose } from '@/common/ui/Modals/ModalClose'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './RemoveItemModal.module.scss'

interface Props {
  className?: string
  handleRemoveItem: () => void
  isLoading: boolean
  itemName: string
  title?: string
}

export const RemoveItemModal = ({
  className,
  handleRemoveItem,
  isLoading,
  itemName,
  title = 'Remove item',
}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      className={cn(s.modal, className)}
      onOpenChange={setOpen}
      open={open}
      title={title}
      trigger={<IconButton icon={<Remove />} />}
    >
      <div className={s.body}>
        <Typography className={s.text} variant={TypographyVariant.body1}>
          Do you really want to remove <b>{itemName}?</b>
        </Typography>
        <div className={s.buttons}>
          <ModalClose>
            <Button disabled={isLoading} variant={ButtonVariant.secondary}>
              Cancel
            </Button>
          </ModalClose>
          <Button disabled={isLoading} onClick={handleRemoveItem}>
            {title}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
