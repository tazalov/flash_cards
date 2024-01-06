import { baseApi } from '@/api'
import { User } from '@/features/auth'

const profileService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      updateProfile: builder.mutation<User, FormData>({
        invalidatesTags: ['Me'],
        query: body => ({ body, method: 'PATCH', url: `v1/auth/me` }),
      }),
    }
  },
})

export const { useUpdateProfileMutation } = profileService
