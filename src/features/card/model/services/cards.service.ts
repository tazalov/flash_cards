import { baseApi } from '@/api'

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
            console.log(error)
          }
        },
        query: ({ deckId, ...restArgs }) => ({
          body: restArgs,
          method: 'POST',
          url: `v1/decks/${deckId}/learn`,
        }),
      }),
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
        query: ({ id, params }) => ({ params, url: `v1/decks/${id}/cards` }),
      }),
      getRandomCard: builder.query<Card, GetRandomCardArgs>({
        query: ({ id, previousCardId }) => ({
          params: { previousCardId },
          url: `v1/decks/${id}/learn`,
        }),
      }),
      removeCard: builder.mutation<Card, { id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ id }) => ({ method: 'DELETE', url: `v1/cards/${id}` }),
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
} = cardsService
