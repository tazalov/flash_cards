import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Cover } from '@/common/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Card } from '../types/cards.types'

const createCardSchema = z.object({
  answer: z.string().min(3, 'Answer must be longer than or equal to 3 characters').trim(),
  question: z.string().min(3, 'Question must be longer than or equal to 3 characters').trim(),
})

export type ActionsCardFormData = z.input<typeof createCardSchema>

export const useActionsCardForm = (card?: Card) => {
  const [questionCover, setQuestionCover] = useState<Cover>(card?.questionImg || null)
  const [answerCover, setAnswerCover] = useState<Cover>(card?.answerImg || null)
  const formValues = useForm<ActionsCardFormData>({
    defaultValues: {
      answer: card?.answer || '',
      question: card?.question || '',
    },
    resolver: zodResolver(createCardSchema),
  })

  return {
    coverOptions: {
      answerCover,
      questionCover,
      setAnswerCover,
      setQuestionCover,
    },
    formValues,
  }
}
