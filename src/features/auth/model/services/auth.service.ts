import { baseApi } from '@/api'

import { User } from '../types/service.types'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => ({ url: '/v1/auth/me' }),
      }),
    }
  },
})

export const { useMeQuery } = authService
