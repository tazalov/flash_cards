import { baseApi } from '@/api'

import { User } from '../types/service.types'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => ({ method: 'POST', url: '/v1/auth/logout' }),
      }),
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => ({ url: '/v1/auth/me' }),
      }),
    }
  },
})

export const { useLogoutMutation, useMeQuery } = authService
