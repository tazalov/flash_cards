import { baseApi } from '@/api'

import { GetCardsArgs, GetCardsResponse } from '../types/service.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCardsById: builder.query<GetCardsResponse, { id: string; params: GetCardsArgs }>({
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

export const { useGetCardsByIdQuery } = cardsService
