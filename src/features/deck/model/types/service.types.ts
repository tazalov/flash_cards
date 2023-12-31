import { Card, Deck, Pagination } from './decks.types'

export interface GetDecksResponse {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}

export interface GetCardsResponse {
  items: Card[]
  pagination: Pagination
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export interface GetCardsArgs {
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string
  question?: string
}
