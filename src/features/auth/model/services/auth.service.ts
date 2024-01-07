import { baseApi } from '@/api'

import { SignUpArgs, User } from '../types/service.types'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => ({ url: '/v1/auth/me' }),
      }),
      signUp: builder.mutation<User, SignUpArgs>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
    }
  },
})

export const { useMeQuery, useSignUpMutation } = authService
