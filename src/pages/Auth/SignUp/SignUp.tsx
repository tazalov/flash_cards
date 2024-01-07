import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Page } from '@/common/ui/Page'
import { SignUpArgs, SignUpForm, useSignUpMutation } from '@/features/auth'

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
