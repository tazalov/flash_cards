import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ALLOWED_IMAGES_FORMATS, MAX_SIZE_IMAGE } from '@/common/const'
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

const createDeckSchema = z.object({
  isPrivate: z.boolean().default(false),
  name: z.string().min(1, 'Name should be required'),
})

export type CreateDeckFormData = z.infer<typeof createDeckSchema>
export const useCreateDeckForm = () => {
  const [cover, setCover] = useState<File | null>(null)
  const formOptions = useForm<CreateDeckFormData>({
    defaultValues: {
      isPrivate: false,
      name: '',
    },
    resolver: zodResolver(createDeckSchema),
  })

  return { coverOptions: { cover, coverSchema, setCover }, formOptions }
}
