import { baseApi } from '@/api'
import { handleErrorResponse } from '@/common/utils'

import { Deck } from '../types/decks.types'
import { GetDecksArgs, GetDecksResponse } from '../types/service.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, FormData>({
        invalidatesTags: (_, error) => (error ? [] : ['Decks']),
        query: body => ({ body, method: 'POST', url: `v1/decks` }),
      }),
      getDeckById: builder.query<Deck, { id: string }>({
        providesTags: ['Deck'],
        query: ({ id }) => ({ url: `v1/decks/${id}` }),
        transformErrorResponse: error => handleErrorResponse(error),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: params => ({ params: params ?? {}, url: `v1/decks` }),
        transformErrorResponse: error => handleErrorResponse(error),
      }),
      removeDeck: builder.mutation<Deck, { id: string }>({
        invalidatesTags: (_, error) => (error ? [] : ['Decks']),
        query: ({ id }) => ({ method: 'DELETE', url: `v1/decks/${id}` }),
      }),
      updateDeck: builder.mutation<Deck, { body: FormData; id: string }>({
        invalidatesTags: (_, error) => (error ? [] : ['Decks']),
        query: ({ body, id }) => ({
          body,
          method: 'PATCH',
          url: `/v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useRemoveDeckMutation,
  useUpdateDeckMutation,
} = decksService
