import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/app/store'

import { RemoveDeckModal } from './RemoveDeckModal'

const meta = {
  component: RemoveDeckModal,
  parameters: {
    layout: 'centered',
  },
  title: 'features/Decks/Actions/RemoveDeckModal',
} satisfies Meta<typeof RemoveDeckModal>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    deckId: '123',
    deckName: 'Some deck name',
  },
  render: args => (
    <Provider store={store}>
      <MemoryRouter>
        <RemoveDeckModal {...args} />
      </MemoryRouter>
    </Provider>
  ),
}
