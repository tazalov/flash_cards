import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import Cross from '@/common/assets/icons/cross'
import { TypographyVariant } from '@/common/enums'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import * as RadixModal from '@radix-ui/react-dialog'
import cn from 'classnames'

import s from './Modals.module.scss'

import { ModalClose } from './ModalClose'

export type Props = {
  className?: string
  title?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof RadixModal.Root>

export const Modal = forwardRef<ElementRef<typeof RadixModal.Root>, Props>((props, ref) => {
  const { children, className, title, trigger, ...rest } = props

  return (
    <RadixModal.Root {...rest}>
      <RadixModal.Trigger asChild>{trigger}</RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay className={s.overlay} />
        <RadixModal.Content asChild className={cn(s.main, className)} ref={ref}>
          <Card>
            {title && (
              <div className={s.title}>
                <Typography as="h2" variant={TypographyVariant.h2}>
                  {title}
                </Typography>
                <ModalClose>
                  <Cross fill="#FFF" style={{ cursor: 'pointer' }} />
                </ModalClose>
              </div>
            )}
            {children}
          </Card>
        </RadixModal.Content>
      </RadixModal.Portal>
    </RadixModal.Root>
  )
})
