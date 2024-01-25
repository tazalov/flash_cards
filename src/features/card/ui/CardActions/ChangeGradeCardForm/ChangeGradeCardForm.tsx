import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '@/common/ui/Button'
import { RadioOption } from '@/common/ui/RadioGroup'
import { ControlledRadioGroup } from '@/common/ui_controlled/ControlledRadioGroup'

import s from './ChangeGradeCardForm.module.scss'

import { Rate } from '../../../model/types/cards.types'

const options: RadioOption[] = [
  { label: 'Did not know', value: '1' },
  { label: 'Forgot', value: '2' },
  { label: 'A lot of thought', value: '3' },
  { label: 'Confused', value: '4' },
  { label: 'Knew the answer', value: '5' },
]

type Props = {
  disabled?: boolean
  onSubmit: (data: Rate) => void
}

export const ChangeGradeCardForm = ({ disabled, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<Rate>({
    defaultValues: { grade: '1' },
  })
  const { t } = useTranslation()

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledRadioGroup className={s.rate} control={control} name="grade" options={options} />
      <Button disabled={disabled} fullWidth>
        {t('Next Question')}
      </Button>
    </form>
  )
}
