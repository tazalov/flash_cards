import { Meta, StoryObj } from '@storybook/react'

import { CardsTable } from './CardsTable'

const meta = {
  argTypes: {
    handleChangePage: {
      action: 'Page changed',
    },
    handleChangeSort: {
      action: 'Sort changed',
    },
  },
  component: CardsTable,
  tags: ['autodocs'],
  title: 'features/Card/CardsTable',
} satisfies Meta<typeof CardsTable>

export default meta
type Story = StoryObj<typeof meta>

const initialState = [
  {
    answer: 'i dont know',
    answerImg: '',
    answerVideo: '',
    created: '',
    deckId: '',
    grade: 3,
    id: '',
    question: 'what it?',
    questionImg: '',
    questionVideo: '',
    shots: 1,
    updated: new Date(),
    userId: '',
  },
  {
    answer: 'i dont know',
    answerImg: '',
    answerVideo: '',
    created: '',
    deckId: '',
    grade: 0,
    id: '',
    question: 'what it?',
    questionImg: '',
    questionVideo: '',
    shots: 1,
    updated: new Date(),
    userId: '',
  },
]

export const isOwner: Story = {
  args: {
    currentPage: 1,
    deckItems: initialState,
    isLoading: false,
    isOwner: true,
    itemsPerPage: 5,
    sort: null,
  },
}
export const NotIsOwner: Story = {
  args: {
    currentPage: 1,
    deckItems: initialState,
    isLoading: false,
    isOwner: false,
    itemsPerPage: 5,
    sort: null,
  },
}
