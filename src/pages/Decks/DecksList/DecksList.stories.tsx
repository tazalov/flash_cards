import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/app/store'

import { DecksList } from './DecksList'

const meta = {
  component: DecksList,
  title: 'pages/DecksList',
} satisfies Meta<typeof DecksList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <DecksList {...args} />
      </MemoryRouter>
    </Provider>
  ),
}
