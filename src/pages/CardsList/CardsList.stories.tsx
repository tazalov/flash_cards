import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { store } from '@/app/store'

import { CardsList } from './CardsList'

const meta = {
  args: {},
  component: CardsList,
  title: 'pages/CardsList',
} satisfies Meta<typeof CardsList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/clplfkvwx07k1wv2qode45fge/cards`]}>
        <Routes>
          <Route element={<CardsList {...args} />} path="/:deckId/cards" />
        </Routes>
      </MemoryRouter>
    </Provider>
  ),
}
