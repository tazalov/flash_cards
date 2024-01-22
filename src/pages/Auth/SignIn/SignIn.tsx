import { Page } from '@/common/ui/Page'
import { handleErrorResponse } from '@/common/utils'
import { SignInForm, SignInFormData, useLoginMutation } from '@/features/auth'

export const SignIn = () => {
  const [login, { isLoading }] = useLoginMutation()

  const handleLoginSubmit = (args: SignInFormData) => {
    login(args).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      }
    })
  }

  return (
    <Page>
      <SignInForm isLoading={isLoading} onSubmit={handleLoginSubmit} />
    </Page>
  )
}
