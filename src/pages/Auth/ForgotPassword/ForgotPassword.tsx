import { useState } from 'react'

import { Page } from '@/common/ui/Page'
import {
  CheckEmail,
  ForgotPasswordForm,
  ForgotPasswordFormData,
  useRecoverPasswordMutation,
} from '@/features/auth'

export const ForgotPassword = () => {
  const [recoverPassword, { isLoading, isSuccess }] = useRecoverPasswordMutation()
  const [email, setEmail] = useState('')
  const handleLoginSubmit = async ({ email }: ForgotPasswordFormData) => {
    await recoverPassword(email)
    setEmail(email)
  }

  if (isLoading) {
    return <div>Forgot password request...</div>
  }

  return (
    <Page>
      {isSuccess ? (
        <CheckEmail email={email} />
      ) : (
        <ForgotPasswordForm onSubmit={handleLoginSubmit} />
      )}
    </Page>
  )
}
