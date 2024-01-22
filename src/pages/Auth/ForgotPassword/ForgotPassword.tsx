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

  return (
    <Page>
      {isSuccess ? (
        <CheckEmail email={email} />
      ) : (
        <ForgotPasswordForm isLoading={isLoading} onSubmit={handleLoginSubmit} />
      )}
    </Page>
  )
}
