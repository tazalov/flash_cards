import { Meta, StoryObj } from '@storybook/react'

import { CardsHeader } from './CardsHeader'

const meta = {
  component: CardsHeader,
  tags: ['autodocs'],
  title: 'features/Card/CardsHeader',
} satisfies Meta<typeof CardsHeader>

export default meta
type Story = StoryObj<typeof meta>

const deck = {
  author: {
    id: '1',
    name: 'Authorname',
  },
  cardsCount: 1,
  cover: null,
  created: '',
  id: '1',
  isPrivate: false,
  name: 'JS',
  shots: 10,
  updated: '',
  userId: '1',
}

export const isOwner: Story = {
  args: {
    deck,
    deckId: 'clkyc7rlm0020yb2qwnggodrn',
    isOwner: true,
  },
}
export const isEmpty: Story = {
  args: {
    deck,
    deckId: 'clkyc7rlm0020yb2qwnggodrn',
    isEmpty: true,
    isOwner: true,
  },
}
export const NotIsOwner: Story = {
  args: {
    deck,
    deckId: 'clkyc7rlm0020yb2qwnggodrn',
    isEmpty: false,
    isOwner: false,
  },
}
