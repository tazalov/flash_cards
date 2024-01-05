import { baseApi } from '@/api'
import { Card } from '@/features/card'

import { GetCardsArgs, GetCardsResponse } from '../types/service.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, { body: FormData; id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ body, id }) => ({
          body,
          method: 'POST',
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      getCardsById: builder.query<GetCardsResponse, { id: string; params: GetCardsArgs }>({
        providesTags: ['Cards'],
        query: ({ id, params }) => {
          return {
            method: 'GET',
            params: params,
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
    }
  },
})

export const { useCreateCardMutation, useGetCardsByIdQuery } = cardsService
