import { baseApi } from '@/api'

import { GetDecksArgs, GetDecksResponse } from '../types/service.types'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: params => ({ params: params ?? {}, url: `v1/decks` }),
      }),
    }
  },
})

export const { useGetDecksQuery } = decksService
