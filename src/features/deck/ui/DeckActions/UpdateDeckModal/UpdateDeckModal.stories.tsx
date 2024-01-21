import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/app/store'
import { Button } from '@/common/ui/Button'
import { Meta, StoryObj } from '@storybook/react'

import { UpdateDeckModal } from './UpdateDeckModal'

const meta = {
  component: UpdateDeckModal,
  parameters: {
    layout: 'centered',
  },
  title: 'features/Decks/Actions/UpdateDeckModal',
} satisfies Meta<typeof UpdateDeckModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    deck: {
      cover: null,
      id: '1',
      isPrivate: false,
      name: 'Deck name',
    },
    trigger: <Button>Edit Deck</Button>,
  },
  render: args => (
    <Provider store={store}>
      <MemoryRouter>
        <UpdateDeckModal {...args} />
      </MemoryRouter>
    </Provider>
  ),
}
