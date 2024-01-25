import type { Meta, StoryObj } from '@storybook/react'

import { DecksFilters } from './DecksFilters'

const meta = {
  argTypes: {
    cardsCounts: {
      control: { type: 'radio' },
      description: 'Array numbers for current slider value',
      options: [
        [1, 10],
        [10, 20],
        [40, 80],
        [20, 90],
        [1, 100],
      ],
    },
    disabled: {
      control: 'boolean',
      description: 'Flag for disable buttons',
    },
    handleChangeCardsCounts: {
      action: 'Cards counts changed',
      description: 'Callback for change current slider value',
    },
    handleChangeSearch: {
      action: 'Search value changed',
      description: 'Callback for change current search value',
    },
    handleChangeTabValue: {
      action: 'Tab value changed',
      description: 'Callback for change current tab value',
    },
    handleClearFilters: {
      action: 'Filters cleared',
      description: 'Callback for clear all filters',
    },
    max: {
      control: 'number',
      description: 'Max value',
    },
    min: {
      control: 'number',
      description: 'Min value',
    },
    searchValue: {
      control: 'text',
      description: 'Current search value',
    },
    tabValue: {
      control: {
        type: 'radio',
      },
      description: 'Tab value for show all/my decks',
      options: ['all', 'my'],
    },
  },
  component: DecksFilters,
  tags: ['autodocs'],
  title: 'features/Decks/DecksFilters',
} satisfies Meta<typeof DecksFilters>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cardsCounts: [10, 90],
    max: 100,
    min: 0,
    searchValue: 'Some search value',
    tabValue: 'all',
  },
}

export const Disabled: Story = {
  args: {
    cardsCounts: [20, 50],
    disabled: true,
    max: 100,
    min: 0,
    searchValue: 'Some search value',
    tabValue: 'all',
  },
}
