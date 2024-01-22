import { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { Modal } from '@/common/ui/Modals'
import { handleErrorResponse } from '@/common/utils'
import { useUpdateDeckMutation } from '@/features/deck/model/services/decks.service'

import s from './UpdateDeckModal.module.scss'

import { Deck } from '../../../model/types/decks.types'
import { DeckActionsForm } from '../DeckActionsForm/DeckActionsForm'

type Props = {
  deck: Pick<Deck, 'cover' | 'id' | 'isPrivate' | 'name'>
  trigger: ReactNode
}

export const UpdateDeckModal = ({ deck, trigger }: Props) => {
  const [open, setOpen] = useState(false)
  const [update, { isLoading }] = useUpdateDeckMutation()

  const { t } = useTranslation()

  const handleSubmit = async (body: FormData) => {
    return update({ body, id: deck.id }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(`Deck "${body.get('name')}" success updated`)
        setOpen(false)
      }
    })
  }

  return (
    <Modal
      className={s.modal}
      onOpenChange={setOpen}
      open={open}
      title={t('Edit deck')}
      trigger={trigger}
    >
      <DeckActionsForm
        btnTitle={t('Save changes')}
        deck={deck}
        disabled={isLoading}
        onSubmit={handleSubmit}
      />
    </Modal>
  )
}
