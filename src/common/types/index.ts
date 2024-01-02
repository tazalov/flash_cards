import { ElementRef, ElementType, Ref } from 'react'

export interface PolymorphRef<T extends ElementType> {
  ref?: Ref<ElementRef<T>>
}

export interface ProfileData {
  avatar?: string
  email: string
  username: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export interface Column {
  key: string
  sortable: boolean
  title: string
}

export interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
