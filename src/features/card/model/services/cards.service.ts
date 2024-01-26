import { baseApi } from '@/api'
import { Cover } from '@/common/types'
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
        invalidatesTags: (_, error) => (error ? [] : ['Cards', 'Decks', 'Deck']),
        query: ({ body, id }) => ({
          body,
          method: 'POST',
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      getCardsById: builder.query<GetCardsResponse, { id: string; params: GetCardsArgs }>({
        providesTags: ['Cards'],
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
        onQueryStarted: async ({ body, card }, { dispatch, getState, queryFulfilled }) => {
          let patchResult

          for (const { endpointName, originalArgs } of cardsService.util.selectInvalidatedBy(
            getState(),
            ['Cards']
          )) {
            if (endpointName !== 'getCardsById') {
              continue
            }

            patchResult = dispatch(
              cardsService.util.updateQueryData(
                'getCardsById',
                {
                  id: card.deckId,
                  params: originalArgs.params,
                },
                draft => {
                  const idxForUpdate = draft.items.findIndex(el => el.id === card.id)

                  if (idxForUpdate !== -1) {
                    const updatedCardData: Partial<Card> = {
                      answer: getTextFormData(body.get('answer')),
                      question: getTextFormData(body.get('question')),
                    }

                    const questionImg = getFileFormData(body.get('questionImg'))
                    const answerImg = getFileFormData(body.get('answerImg'))

                    if (questionImg) {
                      updatedCardData.questionImg = URL.createObjectURL(questionImg)
                    }

                    if (answerImg) {
                      updatedCardData.answerImg = URL.createObjectURL(answerImg)
                    }

                    draft.items[idxForUpdate] = {
                      ...draft.items[idxForUpdate],
                      ...updatedCardData,
                    }
                  }
                }
              )
            )
          }

          try {
            await queryFulfilled
          } catch (e) {
            patchResult?.undo()
          }
        },
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

export const getFileFormData = (item: Cover) => {
  if (item !== null && item instanceof File) {
    return item
  }

  return null
}

export const getTextFormData = (item: Cover) => {
  if (typeof item === 'string') {
    return item
  }

  return ''
}
