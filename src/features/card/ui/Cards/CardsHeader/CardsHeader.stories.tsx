import { Meta, StoryObj } from '@storybook/react'

import { CardsHeader } from './CardsHeader'

const meta = {
  component: CardsHeader,
  tags: ['autodocs'],
  title: 'features/Card/CardsHeader',
} satisfies Meta<typeof CardsHeader>

export default meta
type Story = StoryObj<typeof meta>

export const isOwner: Story = {
  args: {
    isOwner: true,
    name: 'JS',
  },
}
export const isEmpty: Story = {
  args: {
    isEmpty: true,
    isOwner: true,
    name: 'JS',
  },
}
export const NotIsOwner: Story = {
  args: {
    isEmpty: false,
    isOwner: false,
    name: 'JS',
  },
}
