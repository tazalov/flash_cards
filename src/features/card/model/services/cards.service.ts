import { baseApi } from '@/api'
import { handleErrorResponse } from '@/common/utils'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { Card } from '../types/cards.types'
import {
  ChangeGradeCardArgs,
  GetCardsArgs,
  GetCardsResponse,
  GetRandomCardArgs,
} from '../types/service.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      changeGradeCard: builder.mutation<Card, ChangeGradeCardArgs>({
        async onQueryStarted({ deckId }, { dispatch, queryFulfilled }) {
          try {
            const { data: nextCard } = await queryFulfilled

            dispatch(
              cardsService.util.updateQueryData('getRandomCard', { id: deckId }, () => nextCard)
            )
          } catch (error) {
            if (error && typeof error === 'object' && 'error' in error) {
              handleErrorResponse(error.error as FetchBaseQueryError)
            }
          }
        },
        query: ({ deckId, ...restArgs }) => ({
          body: restArgs,
          method: 'POST',
          url: `v1/decks/${deckId}/learn`,
        }),
      }),
      createCard: builder.mutation<Card, { body: FormData; id: string }>({
        invalidatesTags: ['Cards', 'Decks', 'Deck'],
        query: ({ body, id }) => ({
          body,
          method: 'POST',
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      getCardsById: builder.query<GetCardsResponse, { id: string; params: GetCardsArgs }>({
        providesTags: (_, error) => (error ? [] : ['Cards']),
        query: ({ id, params }) => ({ params, url: `v1/decks/${id}/cards` }),
        transformErrorResponse: error => handleErrorResponse(error),
      }),
      getRandomCard: builder.query<Card, GetRandomCardArgs>({
        query: ({ id, previousCardId }) => ({
          params: { previousCardId },
          url: `v1/decks/${id}/learn`,
        }),
        transformErrorResponse: error => handleErrorResponse(error),
      }),
      removeCard: builder.mutation<Card, { id: string }>({
        invalidatesTags: (_, error) => (error ? [] : ['Cards', 'Decks', 'Deck']),
        query: ({ id }) => ({ method: 'DELETE', url: `v1/cards/${id}` }),
      }),
      updateCard: builder.mutation<Card, { body: FormData; card: Card }>({
        invalidatesTags: (_, error) => (error ? [] : ['Cards']),
        query: ({ body, card }) => ({
          body,
          method: 'PATCH',
          url: `/v1/cards/${card.id}`,
        }),
      }),
    }
  },
})

export const {
  useChangeGradeCardMutation,
  useCreateCardMutation,
  useGetCardsByIdQuery,
  useGetRandomCardQuery,
  useRemoveCardMutation,
  useUpdateCardMutation,
} = cardsService
