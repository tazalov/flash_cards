import { baseApi } from '@/api'

import { Deck } from '../types/decks.types'
import { GetDecksArgs, GetDecksResponse } from '../types/service.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, FormData>({
        invalidatesTags: ['Decks'],
        query: body => ({ body, method: 'POST', url: `v1/decks` }),
      }),
      getDeckById: builder.query<Deck, { id: string }>({
        providesTags: ['Decks', { id: 'List', type: 'Decks' }],
        query: ({ id }) => ({
          method: 'GET',
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: params => ({ params: params ?? {}, url: `v1/decks` }),
      }),
    }
  },
})

export const { useCreateDeckMutation, useGetDeckByIdQuery, useGetDecksQuery } = decksService
