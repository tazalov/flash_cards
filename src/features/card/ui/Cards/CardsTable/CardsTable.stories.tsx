import { Meta, StoryObj } from '@storybook/react'

import { CardsTable } from './CardsTable'

const meta = {
  argTypes: {
    cards: {
      control: false,
      description: 'Array of cards',
    },
    currentPage: {
      control: 'number',
      description: 'Current page for render',
    },
    handleChangePage: {
      action: 'Page changed',
      description: 'Callback for change current page',
    },
    handleChangeSort: {
      action: 'Sort changed',
      description: 'Callback for change current sort direction',
    },
    isLoading: {
      control: 'boolean',
      description: 'Flag for hide/show table skeleton',
    },
    isOwner: {
      control: 'boolean',
      description: 'A flag indicating whether this is your deck',
    },
    itemsPerPage: {
      control: 'number',
      description: 'Count items per page for render skeletons',
    },
    sort: {
      control: false,
      description: 'Current sort value',
    },
  },
  component: CardsTable,
  tags: ['autodocs'],
  title: 'features/Card/CardsTable',
} satisfies Meta<typeof CardsTable>

export default meta
type Story = StoryObj<typeof meta>

const cards = [
  {
    answer: 'i dont know',
    answerImg: '',
    answerVideo: '',
    created: '',
    deckId: '',
    grade: 3,
    id: '',
    question: 'what it?',
    questionImg: '',
    questionVideo: '',
    shots: 1,
    updated: new Date(),
    userId: '',
  },
  {
    answer: 'i dont know',
    answerImg: '',
    answerVideo: '',
    created: '',
    deckId: '',
    grade: 0,
    id: '',
    question: 'what it?',
    questionImg: '',
    questionVideo: '',
    shots: 1,
    updated: new Date(),
    userId: '',
  },
]

export const IsOwner: Story = {
  args: {
    cards,
    currentPage: 1,
    isLoading: false,
    isOwner: true,
    itemsPerPage: 5,
    sort: null,
  },
}

export const NotIsOwner: Story = {
  args: {
    cards,
    currentPage: 1,
    isLoading: false,
    isOwner: false,
    itemsPerPage: 5,
    sort: null,
  },
}

export const IsLoading: Story = {
  args: {
    cards,
    currentPage: 1,
    isLoading: true,
    isOwner: false,
    itemsPerPage: 5,
    sort: null,
  },
}
