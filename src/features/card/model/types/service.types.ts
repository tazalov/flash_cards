import { Pagination } from '@/common/types'

import { Card } from './cards.types'

export interface GetCardsResponse {
  items: Card[]
  pagination: Pagination
}

export interface GetCardsArgs {
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string
  question?: string
}

export interface GetRandomCardArgs {
  id: string
  previousCardId?: string
}

export interface ChangeGradeCardArgs {
  cardId: string
  deckId: string
  grade: number
}
