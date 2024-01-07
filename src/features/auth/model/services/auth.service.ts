import { baseApi } from '@/api'
import { SignInFormData } from '@/features/auth/model/hooks/useSignInForm'

import { LoginResponse, User } from '../types/service.types'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, SignInFormData>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => ({ url: '/v1/auth/me' }),
      }),
      recoverPassword: builder.mutation<void, string>({
        query: email => ({
          body: {
            email,
            html: '<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/create-new-password/##token##">here</a> to create new password</p>',
            // subject: 'Recover password',
          },
          method: 'POST',
          url: '/v1/auth/recover-password',
        }),
      }),
      resetPassword: builder.mutation<void, { password: string; token: string }>({
        query: ({ password, token }) => ({
          body: {
            password,
          },
          method: 'POST',
          url: `/v1/auth/reset-password/${token}`,
        }),
      }),
    }
  },
})

export const {
  useLoginMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
} = authService
