import { baseApi } from '@/api'

import { Card } from '../types/cards.types'
import { GetCardsArgs, GetCardsResponse } from '../types/service.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCardsById: builder.query<GetCardsResponse, { id: string; params: GetCardsArgs }>({
        providesTags: ['Cards'],
        query: ({ id, params }) => ({ params, url: `v1/decks/${id}/cards` }),
      }),
      removeCard: builder.mutation<Card, { id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ id }) => ({ method: 'DELETE', url: `v1/cards/${id}` }),
      }),
    }
  },
})

export const { useGetCardsByIdQuery, useRemoveCardMutation } = cardsService
