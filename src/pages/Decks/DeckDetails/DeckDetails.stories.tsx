import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { store } from '@/app/store'

import { DeckDetails } from './DeckDetails'

const meta = {
  args: {},
  component: DeckDetails,
  title: 'pages/DeckDetails',
} satisfies Meta<typeof DeckDetails>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/clplfkvwx07k1wv2qode45fge`]}>
        <Routes>
          <Route element={<DeckDetails {...args} />} path="/:deckId" />
        </Routes>
      </MemoryRouter>
    </Provider>
  ),
}
