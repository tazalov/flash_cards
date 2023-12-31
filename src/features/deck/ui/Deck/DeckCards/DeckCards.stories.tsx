import { Meta, StoryObj } from '@storybook/react'

import { DeckCards } from './DeckCards'

const meta = {
  component: DeckCards,
  tags: ['autodocs'],
  title: 'Features/Deck/DeckCards',
} satisfies Meta<typeof DeckCards>

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

export const NotEmptyAndOwner: Story = {
  args: {
    deckItems: initialState,
    isOwner: true,
    sort: null,
  },
}
export const EmptyAndOwner: Story = {
  args: {
    isOwner: false,
    sort: null,
  },
}
