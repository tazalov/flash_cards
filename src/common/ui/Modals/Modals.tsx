import { ComponentProps, ReactNode } from 'react'

import Cross from '@/common/assets/icons/cross'
import { TypographyVariant } from '@/common/enums'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import * as RadixModal from '@radix-ui/react-dialog'
import cn from 'classnames'

import s from './Modals.module.scss'

export type Props = {
  open: boolean
  setOpenModal: (open: boolean) => void
  title?: string
  trigger: ReactNode
} & ComponentProps<'div'>

export const Modal = (props: Props) => {
  const { children, className, open, setOpenModal, title, trigger } = props

  return (
    <RadixModal.Root onOpenChange={setOpenModal} open={open}>
      <RadixModal.Trigger asChild>{trigger}</RadixModal.Trigger>
      {open && (
        <RadixModal.Portal forceMount>
          <RadixModal.Overlay className={s.overlay} />
          <div className={cn(s.main, className)}>
            <RadixModal.Content>
              <Card>
                {title && (
                  <div className={s.title}>
                    <Typography variant={TypographyVariant.h2}>{title}</Typography>
                    <RadixModal.Close asChild>
                      <Cross fill="#FFF" style={{ cursor: 'pointer' }} />
                    </RadixModal.Close>
                  </div>
                )}
                <div>{children}</div>
              </Card>
            </RadixModal.Content>
          </div>
        </RadixModal.Portal>
      )}
    </RadixModal.Root>
  )
}
