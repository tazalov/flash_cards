import { baseApi } from '@/api'

import { Deck } from '../types/decks.types'
import { GetDecksArgs, GetDecksResponse } from '../types/service.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, FormData>({
        invalidatesTags: ['Decks'],
        query: body => ({ body, method: 'POST', url: `v1/decks` }),
      }),
      getDeckById: builder.query<Deck, { id: string }>({
        providesTags: ['Deck'],
        query: ({ id }) => ({ url: `v1/decks/${id}` }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: params => ({ params: params ?? {}, url: `v1/decks` }),
      }),
      removeDeck: builder.mutation<Deck, { id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({ method: 'DELETE', url: `v1/decks/${id}` }),
      }),
      updateDeck: builder.mutation<Deck, { body: FormData; id: string }>({
        invalidatesTags: ['Decks'],

        // async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        //   const patchResult = dispatch(
        //     decksService.util.updateQueryData('getDecks', {}, draft => {
        //       Object.assign(draft, patch)
        //     })
        //   )
        //
        //   try {
        //     await queryFulfilled
        //   } catch {
        //     patchResult.undo()
        //   }
        // },
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
