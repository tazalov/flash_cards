import { Meta, StoryObj } from '@storybook/react'

import { CardsHeader } from './CardsHeader'

const meta = {
  argTypes: {
    deck: {
      control: false,
      description: 'Current deck data',
    },
    deckId: {
      control: false,
      description: 'Current deckId from URI parameter',
    },
    isEmpty: {
      control: 'boolean',
      description: 'A flag indicating whether the deck is empty',
    },
    isOwner: {
      control: 'boolean',
      description: 'A flag indicating whether this is your deck',
    },
  },
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

export const IsOwner: Story = {
  args: {
    deck,
    deckId: '1',
    isOwner: true,
  },
}

export const NotIsOwner: Story = {
  args: {
    deck,
    deckId: '1',
    isEmpty: false,
    isOwner: false,
  },
}
