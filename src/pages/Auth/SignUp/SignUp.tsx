import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Page } from '@/common/ui/Page'
import { SignUpForm } from '@/features/auth'
import { useSignUpMutation } from '@/features/auth/model/services/auth.service'
import { SignUpArgs } from '@/features/auth/model/types/service.types'

export const SignUp = () => {
  const [signUp] = useSignUpMutation()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async ({ email, password }: SignUpArgs) => {
    try {
      await signUp({ email, password }).unwrap()
      navigate('/sign-in')
    } catch (err) {
      const error = err as { data: { errorMessages: string[] } }

      setError(error.data.errorMessages[0])
    }
  }

  return (
    <Page>
      <SignUpForm errorMessage={error} onSubmit={handleSubmit} setError={setError} />
    </Page>
  )
}
