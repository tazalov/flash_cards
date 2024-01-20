import { ElementRef, ElementType, Ref } from 'react'

import { Draft } from '@reduxjs/toolkit'

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

export type Cover = File | null | string

export type AppMaybeDrafted<T> = Draft<T> | T
