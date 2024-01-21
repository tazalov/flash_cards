import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Deck } from '../types/decks.types'

const createDeckSchema = z.object({
  isPrivate: z.boolean().default(false),
  name: z.string().min(1, 'Name should be required'),
})

export type CreateDeckFormData = z.infer<typeof createDeckSchema>
export const useDeckActionsForm = (deck?: Pick<Deck, 'cover' | 'isPrivate' | 'name'>) => {
  const [cover, setCover] = useState<File | null | string>(deck?.cover || null)
  const formOptions = useForm<CreateDeckFormData>({
    defaultValues: {
      isPrivate: deck?.isPrivate || false,
      name: deck?.name || '',
    },
    resolver: zodResolver(createDeckSchema),
  })

  return { coverOptions: { cover, setCover }, formOptions }
}
