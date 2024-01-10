import { useForm } from 'react-hook-form'

import { Button } from '@/common/ui/Button'
import { RadioOption } from '@/common/ui/RadioGroup'
import { ControlledRadioGroup } from '@/common/ui_controlled/ControlledRadioGroup'

import s from './ChangeGradeCardForm.module.scss'

import { Rate } from '../../../model/types/cards.types'

const options: RadioOption[] = [
  { disabled: false, label: 'Did not know', value: '1' },
  { disabled: false, label: 'Forgot', value: '2' },
  { disabled: false, label: 'A lot of thought', value: '3' },
  { disabled: false, label: 'Confused', value: '4' },
  { disabled: false, label: 'Knew the answer', value: '5' },
]

type Props = {
  onSubmit: (data: Rate) => void
}

export const ChangeGradeCardForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<Rate>({
    defaultValues: { grade: '1' },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledRadioGroup className={s.rate} control={control} name="grade" options={options} />
      <Button fullWidth>Next Question</Button>
    </form>
  )
}
