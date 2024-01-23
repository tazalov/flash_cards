import type { Meta, StoryObj } from '@storybook/react'

import { DecksTable } from './DecksTable'

const meta = {
  argTypes: {
    handleChangeSort: {
      action: 'Sort value changed',
    },
  },
  component: DecksTable,
  title: 'features/Decks/DecksTable',
} satisfies Meta<typeof DecksTable>

export default meta

type Story = StoryObj<typeof meta>

const items = [
  {
    author: {
      id: '1',
      name: 'Gaius Julius Caesar',
    },
    cardsCount: 100,
    cover:
      'https://fikiwiki.com/uploads/posts/2022-02/1644966430_33-fikiwiki-com-p-kartinki-yulii-tsezar-34.png',
    created: '2023-07-15T05:35:43.102Z',
    id: 'this-deck-1111',
    isPrivate: false,
    name: 'Veni, vidi, vici',
    shots: 0,
    updated: '2023-12-15T05:35:43.102Z',
    userId: '1',
  },
  {
    author: {
      id: '2',
      name: 'Marcus Junius Brutus',
    },
    cardsCount: 1,
    cover: 'https://i.ytimg.com/vi/aYvTgYGGljs/maxresdefault.jpg',
    created: '2023-012-15T05:35:43.102Z',
    id: 'this-deck-1111',
    isPrivate: false,
    name: 'Sic semper tyrannis',
    shots: 0,
    updated: '2023-12-31T11:59:59Z',
    userId: '2',
  },
  {
    author: {
      id: '3',
      name: 'Napoléon Bonaparte',
    },
    cardsCount: 999,
    cover: 'https://w.forfun.com/fetch/c1/c1c7ac2c48a5e3a17e5bab2632fb07ec.jpeg',
    created: '2023-012-15T05:35:43.102Z',
    id: 'this-deck-1111',
    isPrivate: false,
    name: 'The Battle of Borodino',
    shots: 0,
    updated: '2024-01-01T11:59:59Z',
    userId: '3',
  },
]

export const Default: Story = {
  args: {
    authId: '1',
    isLoading: false,
    items,
    itemsPerPage: 3,
  },
}

export const IsLoading: Story = {
  args: {
    authId: '1',
    isLoading: true,
    items,
    itemsPerPage: 3,
  },
}
