import { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'
import { ModalClose } from '@/common/ui/Modals/ModalClose'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './RemoveItemModal.module.scss'

interface Props {
  className?: string
  disabled?: boolean
  handleRemoveItem: () => void
  itemName: string
  title?: string
  trigger: ReactNode
}

export const RemoveItemModal = ({
  className,
  disabled,
  handleRemoveItem,
  itemName,
  title,
  trigger,
}: Props) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <Modal
      className={cn(s.modal, className)}
      onOpenChange={setOpen}
      open={open}
      title={title}
      trigger={trigger}
    >
      <div className={s.body}>
        <Typography className={s.text} variant={TypographyVariant.body1}>
          {t('Do you really want to remove')} <b>{itemName}?</b>
        </Typography>
        <div className={s.buttons}>
          <ModalClose>
            <Button disabled={disabled} variant={ButtonVariant.secondary}>
              {t('Cancel')}
            </Button>
          </ModalClose>
          <Button disabled={disabled} onClick={handleRemoveItem}>
            {title || t('Remove item')}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
