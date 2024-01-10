import { baseApi } from '@/api'

import { Card } from '../types/cards.types'
import { GetCardsArgs, GetCardsResponse } from '../types/service.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, { body: FormData; id: string }>({
        invalidatesTags: ['Cards', 'Decks', 'Deck'],
        query: ({ body, id }) => ({
          body,
          method: 'POST',
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      getCardsById: builder.query<GetCardsResponse, { id: string; params: GetCardsArgs }>({
        providesTags: ['Cards'],
        query: ({ id, params }) => ({ params, url: `v1/decks/${id}/cards` }),
      }),
      removeCard: builder.mutation<Card, { id: string }>({
        invalidatesTags: ['Cards', 'Decks', 'Deck'],
        query: ({ id }) => ({ method: 'DELETE', url: `v1/cards/${id}` }),
      }),
      updateCard: builder.mutation<Card, { body: FormData; id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ body, id }) => ({
          body,
          method: 'PATCH',
          url: `/v1/cards/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useGetCardsByIdQuery,
  useRemoveCardMutation,
  useUpdateCardMutation,
} = cardsService
