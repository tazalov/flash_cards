import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Page } from '@/common/ui/Page'
import { handleErrorResponse } from '@/common/utils'
import { SignUpArgs, SignUpForm, useSignUpMutation } from '@/features/auth'

export const SignUp = () => {
  const [signUp, { isLoading }] = useSignUpMutation()

  const navigate = useNavigate()

  const handleSubmit = async ({ email, password }: SignUpArgs) => {
    return signUp({ email, password }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success('The account has been created. Try to log in!')
        navigate('/sign-in')
      }
    })
  }

  return (
    <Page>
      <SignUpForm disabled={isLoading} onSubmit={handleSubmit} />
    </Page>
  )
}
