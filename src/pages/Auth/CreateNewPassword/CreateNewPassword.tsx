import { useNavigate, useParams } from 'react-router-dom'

import { Page } from '@/common/ui/Page'
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
    if (token) {
      await resetPassword({ password, token })
      navigate('/sign-in')
    }
  }

  if (isLoading) {
    return <div>Create new password request...</div>
  }

  return (
    <Page>
      <CreateNewPasswordForm onSubmit={handleLoginSubmit} />
    </Page>
  )
}
