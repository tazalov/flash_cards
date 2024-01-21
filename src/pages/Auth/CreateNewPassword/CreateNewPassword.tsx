import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Page } from '@/common/ui/Page'
import { handleErrorResponse } from '@/common/utils'
import {
  CreateNewPasswordForm,
  CreateNewPasswordFormValues,
  useResetPasswordMutation,
} from '@/features/auth'

export const CreateNewPassword = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation()

  const navigate = useNavigate()

  const { token } = useParams<{ token: string }>()

  const handleLoginSubmit = async ({ password }: CreateNewPasswordFormValues) => {
    if (!token) {
      return
    }

    return resetPassword({ password, token }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(`A new password has been created`)
        navigate('/sign-in')
      }
    })
  }

  return (
    <Page>
      <CreateNewPasswordForm isLoading={isLoading} onSubmit={handleLoginSubmit} />
    </Page>
  )
}
