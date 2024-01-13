import { baseApi } from '@/api'
import { getOptimisticUpdateCardPatch } from '@/common/utils'

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
      getRandomCard: builder.query<Card, GetRandomCardArgs>({
        query: ({ id, previousCardId }) => ({
          params: { previousCardId },
          url: `v1/decks/${id}/learn`,
        }),
      }),
      removeCard: builder.mutation<Card, { id: string }>({
        invalidatesTags: ['Cards', 'Decks', 'Deck'],
        query: ({ id }) => ({ method: 'DELETE', url: `v1/cards/${id}` }),
      }),
      updateCard: builder.mutation<Card, { body: FormData; card: Card }>({
        invalidatesTags: ['Cards'],
        async onQueryStarted({ body, card }, { dispatch, getState, queryFulfilled }) {
          let patchResult

          for (const { endpointName, originalArgs } of cardsService.util.selectInvalidatedBy(
            getState(),
            ['Cards']
          )) {
            if (endpointName === 'getCardsById') {
              patchResult = dispatch(
                cardsService.util.updateQueryData(
                  'getCardsById',
                  {
                    id: card.deckId,
                    params: originalArgs.params,
                  },
                  draft => {
                    const findedCard = draft.items.find(el => el.id === card.id)

                    if (findedCard) {
                      const patchedCard = Object.assign(
                        findedCard,
                        getOptimisticUpdateCardPatch(body, card)
                      )

                      dispatch(
                        cardsService.util.updateQueryData(
                          'getCardsById',
                          {
                            id: card.deckId,
                            params: { ...originalArgs.params, currentPage: 1 },
                          },
                          draft => {
                            const findIndex = draft.items.findIndex(el => el.id === card.id)
                            const spliceIndex =
                              findIndex === -1 ? draft.items.length - 1 : findIndex

                            draft.items.splice(spliceIndex, 1)
                            draft.items.unshift(patchedCard)
                          }
                        )
                      )
                    }
                  }
                )
              )
            }
          }
          try {
            await queryFulfilled
          } catch {
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
