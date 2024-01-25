import { z } from 'zod'

import { Column } from '../types'

export const ALLOWED_IMAGES_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
export const MAX_SIZE_IMAGE = 1000000

export const COVER_SCHEMA = z
  .instanceof(File)
  .refine(
    file => file.size <= MAX_SIZE_IMAGE,
    `Max image size is 1MB. The file will not be uploaded.`
  )
  .refine(
    file => ALLOWED_IMAGES_FORMATS.includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported. The file will not be uploaded.'
  )

export const ON_SUBMIT_SB = () => Promise.resolve({ error: null, fieldErrors: null })

export const PAGINATION_OPTIONS = [
  { title: '5', value: '5' },
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
]

export const CARDS_COLUMNS: Column[] = [
  {
    key: 'question',
    sortable: true,
    title: 'Question',
  },
  {
    key: 'answer',
    sortable: true,
    title: 'Answer',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'grade',
    sortable: true,
    title: 'Grade',
  },
  {
    key: 'buttons',
    sortable: false,
  },
]
export const DECKS_COLUMNS: Column[] = [
  {
    key: 'name',
    sortable: true,
    title: 'Name',
  },
  {
    key: 'cardsCount',
    sortable: true,
    title: 'Cards',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'created',
    sortable: true,
    title: 'Created by',
  },
  {
    key: 'buttons',
    sortable: false,
  },
]
