import { useState } from 'react'
import { toast } from 'react-toastify'

import { Page } from '@/common/ui/Page'
import { handleErrorResponse } from '@/common/utils'
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
    return recoverPassword(email).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(`Instructions are sent by email ${email}`)
        setEmail(email)
      }
    })
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
