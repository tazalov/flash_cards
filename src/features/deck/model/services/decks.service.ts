import { baseApi } from '@/api'
import { Deck } from '@/features/deck/model/types/decks.types'

import {
  GetCardsArgs,
  GetCardsResponse,
  GetDecksArgs,
  GetDecksResponse,
} from '../types/service.types'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
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
      getDecksCardsById: builder.query<GetCardsResponse, { id: string; params: GetCardsArgs }>({
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

export const { useGetDeckByIdQuery, useGetDecksCardsByIdQuery, useGetDecksQuery } = decksService
