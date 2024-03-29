import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '../Table'

const meta = {
  argTypes: {
    columns: {
      control: false,
      description: 'Array of columns for render',
    },
    onSort: {
      action: 'Sort value changed',
      description: 'Callback for change current value Sort',
    },
    sort: {
      control: false,
      description: 'Current sort value',
    },
  },
  component: Table.SortableHeader,
  tags: ['autodocs'],
  title: 'components/Table/SortableHeader',
} satisfies Meta<typeof Table.SortableHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    columns: [
      {
        key: 'name',
        sortable: true,
        title: 'Name',
      },
      {
        key: 'cardsCount',
        sortable: true,
        title: 'Cards',
      },
      {
        key: 'updated',
        sortable: true,
        title: 'Last Updated',
      },
    ],
    sort: {
      direction: 'asc',
      key: 'name',
    },
  },
}
