import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ALLOWED_IMAGES_FORMATS, MAX_SIZE_IMAGE } from '@/common/const'
import { Card } from '@/features/card'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const coverSchema = z
  .instanceof(File)
  .refine(
    file => file.size <= MAX_SIZE_IMAGE,
    `Max image size is 1MB. The file will not be uploaded.`
  )
  .refine(
    file => ALLOWED_IMAGES_FORMATS.includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported. The file will not be uploaded.'
  )

const createCardSchema = z.object({
  answer: z.string().min(3, 'Answer must be longer than or equal to 3 characters').trim(),
  question: z.string().min(3, 'Question must be longer than or equal to 3 characters').trim(),
})

export type CreateCardFormData = z.input<typeof createCardSchema>

export const useCreateCardForm = (card?: Card) => {
  const [questionCover, setQuestionCover] = useState<File | null | string>(
    card?.questionImg || null
  )
  const [answerCover, setAnswerCover] = useState<File | null | string>(card?.answerImg || null)
  const formValues = useForm<CreateCardFormData>({
    defaultValues: {
      answer: card?.answer || '',
      question: card?.question || '',
    },
    resolver: zodResolver(createCardSchema),
  })

  return {
    coverOptions: {
      answerCover,
      coverSchema,
      questionCover,
      setAnswerCover,
      setQuestionCover,
    },
    formValues,
  }
}
