import type { Meta, StoryObj } from '@storybook/react'

import { DecksFilters } from './DecksFilters'

const meta = {
  argTypes: {
    handleChangeCardsCounts: {
      action: 'Cards counts changed',
    },
    handleChangeSearch: {
      action: 'Search value changed',
    },
    handleChangeTabValue: {
      action: 'Tab value changed',
    },
    handleClearFilters: {
      action: 'Filters cleared',
    },
    tabValue: {
      control: {
        type: 'radio',
      },
      options: ['all', 'my'],
    },
  },
  component: DecksFilters,
  title: 'features/Decks/DecksFilters',
} satisfies Meta<typeof DecksFilters>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cardsCounts: [10, 90],
    isLoading: false,
    max: 100,
    min: 0,
    searchValue: '',
    tabValue: 'all',
  },
}
