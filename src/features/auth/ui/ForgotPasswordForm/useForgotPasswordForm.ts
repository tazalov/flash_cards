import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Incorrect email address' }),
})

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export const useForgotPassword = () =>
  useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })
