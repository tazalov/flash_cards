import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signUpSchema = z
  .object({
    confirmPassword: z.string().trim(),
    email: z.string().email('Enter valid email').trim(),
    password: z.string().min(3, 'password must be longer than or equal to 3 characters').trim(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Password mismatch',
    path: ['confirmPassword'],
  })

export type SignUpFormValues = z.input<typeof signUpSchema>

export const useSignUpForm = () =>
  useForm<SignUpFormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })
