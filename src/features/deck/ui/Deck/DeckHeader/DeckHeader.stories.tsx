import { Meta, StoryObj } from '@storybook/react'

import { DeckHeader } from './DeckHeader'

const meta = {
  component: DeckHeader,
  tags: ['autodocs'],
  title: 'Features/Deck/DeckHeader',
} satisfies Meta<typeof DeckHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Owner: Story = {
  args: {
    isOwner: true,
    name: 'JS',
  },
}
export const OwnerAndEmpty: Story = {
  args: {
    isEmpty: true,
    isOwner: true,
    name: 'JS',
  },
}
export const NotOwner: Story = {
  args: {
    isEmpty: false,
    isOwner: false,
    name: 'JS',
  },
}
export const NotOwnerAndEmpty: Story = {
  args: {
    isEmpty: true,
    isOwner: false,
    name: 'JS',
  },
}
