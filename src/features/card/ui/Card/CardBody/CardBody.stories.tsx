import type { Meta, StoryObj } from '@storybook/react'

import { CardBody } from './CardBody'

const meta = {
  argTypes: {
    handleShowAnswer: {
      action: 'State changed',
    },
    onSubmit: {
      action: 'Form submitted',
    },
  },
  component: CardBody,
  parameters: {
    layout: 'fullscreen',
  },
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
      deckId: 'cllpefqyo07j9vo2qe7cvwgut',
      grade: 0,
      id: 'cllpl1b9d07qjvo2qa3oxgaie',
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
      deckId: 'cllpefqyo07j9vo2qe7cvwgut',
      grade: 0,
      id: 'cllpl1b9d07qjvo2qa3oxgaie',
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
