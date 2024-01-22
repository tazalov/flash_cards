import { Page } from '@/common/ui/Page'
import { SignInForm, SignInFormData, useLoginMutation } from '@/features/auth'

export const SignIn = () => {
  const [login, { isLoading }] = useLoginMutation()

  const handleLoginSubmit = (args: SignInFormData) => {
    login(args)
  }

  return (
    <Page>
      <SignInForm isLoading={isLoading} onSubmit={handleLoginSubmit} />
    </Page>
  )
}
