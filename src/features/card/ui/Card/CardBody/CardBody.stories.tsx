import type { Meta, StoryObj } from '@storybook/react'

import { CardBody } from './CardBody'

const meta = {
  argTypes: {
    card: {
      control: false,
      description: 'Current card data',
    },
    className: {
      control: false,
      description: 'The class that is passed from the parent component is used for positioning.',
    },
    deckName: {
      control: 'text',
      description: 'Deck name for title current card',
    },
    disabled: {
      control: 'boolean',
      description: 'Flag for disable buttons',
    },
    handleShowAnswer: {
      action: 'State changed',
      description: 'Callback for change show/hide state for answer',
    },
    hideAnswer: {
      control: 'boolean',
      description: 'Flag for show/hide state for answer',
    },
    onSubmit: {
      action: 'Form submitted',
      description: 'Callback for send form data',
    },
  },
  component: CardBody,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'features/Card/CardBody',
} satisfies Meta<typeof CardBody>

export default meta

type Story = StoryObj<typeof meta>

export const ShowAnswer: Story = {
  args: {
    card: {
      answer: 'Метод pop() удаляет последний элемент из массива и возвращает его значение.',
      answerImg: null,
      answerVideo: null,
      created: '2023-08-24T19:54:22.655Z',
      deckId: '1',
      grade: 0,
      id: '1',
      question: 'Что делает метод pop() в JavaScript?',
      questionImg: null,
      questionVideo: null,
      shots: 6,
      updated: new Date(),
    },
    deckName: 'Some deck name',
    hideAnswer: false,
  },
}

export const HideAnswer: Story = {
  args: {
    card: {
      answer: 'Метод pop() удаляет последний элемент из массива и возвращает его значение.',
      answerImg: null,
      answerVideo: null,
      created: '2023-08-24T19:54:22.655Z',
      deckId: '1',
      grade: 0,
      id: '1',
      question: 'Что делает метод pop() в JavaScript?',
      questionImg: null,
      questionVideo: null,
      shots: 6,
      updated: new Date(),
    },
    deckName: 'Some deck name',
    hideAnswer: true,
  },
}
