import { Meta, StoryObj } from '@storybook/react'

import { CardsTable } from './CardsTable'

const meta = {
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
    deckItems: initialState,
    isOwner: true,
    sort: null,
  },
}
export const NotIsOwner: Story = {
  args: {
    deckItems: initialState,
    isOwner: false,
    sort: null,
  },
}
