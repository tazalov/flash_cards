import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/app/store'
import { Meta, StoryObj } from '@storybook/react'

import { CreateCardModal } from './CreateCardModal'

const meta = {
  args: {
    deckId: 'clkyc7rlm0020yb2qwnggodrn',
  },
  component: CreateCardModal,
  tags: ['autodocs'],
  title: 'features/Card/Actions/CreateCardModal',
} satisfies Meta<typeof CreateCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/`]}>
        <CreateCardModal {...args} />
      </MemoryRouter>
    </Provider>
  ),
}
