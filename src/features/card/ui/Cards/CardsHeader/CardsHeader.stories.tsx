import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/app/store'
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
    deckId: 'clkyc7rlm0020yb2qwnggodrn',
    isOwner: true,
    name: 'JS',
  },
  render: args => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/`]}>
        <CardsHeader {...args} />
      </MemoryRouter>
    </Provider>
  ),
}
export const isEmpty: Story = {
  args: {
    deckId: 'clkyc7rlm0020yb2qwnggodrn',
    isEmpty: true,
    isOwner: true,
    name: 'JS',
  },
}
export const NotIsOwner: Story = {
  args: {
    deckId: 'clkyc7rlm0020yb2qwnggodrn',
    isEmpty: false,
    isOwner: false,
    name: 'JS',
  },
}
