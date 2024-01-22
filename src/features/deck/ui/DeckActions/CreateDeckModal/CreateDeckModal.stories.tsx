import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/app/store'
import { Meta, StoryObj } from '@storybook/react'

import { CreateDeckModal } from './CreateDeckModal'

const meta = {
  component: CreateDeckModal,
  parameters: {
    layout: 'centered',
  },
  title: 'features/Decks/Actions/CreateDeckModal',
} satisfies Meta<typeof CreateDeckModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Provider store={store}>
      <MemoryRouter>
        <CreateDeckModal />
      </MemoryRouter>
    </Provider>
  ),
}
