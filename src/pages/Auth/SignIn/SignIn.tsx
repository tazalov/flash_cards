import { Page } from '@/common/ui/Page'
import { SignInForm, SignInFormData, useLoginMutation } from '@/features/auth'

export const SignIn = () => {
  const [login, { isLoading }] = useLoginMutation()
  const handleLoginSubmit = (args: SignInFormData) => {
    login(args)
  }

  if (isLoading) {
    return <div>Login request...</div>
  }

  return (
    <Page>
      <SignInForm onSubmit={handleLoginSubmit} />
    </Page>
  )
}
