import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from '@/app/store'
import { Meta, StoryObj } from '@storybook/react'

import { UpdateCardModal } from './UpdateCardModal'

const meta = {
  args: {
    card: {
      answer: 'answer',
      answerImg: '',
      answerVideo: '',
      created: '10.01.2024',
      deckId: 'deck1',
      grade: 1,
      id: '1',
      question: 'question?',
      questionImg: '',
      questionVideo: '',
      shots: 1,
      updated: new Date('10.01.2024'),
      userId: 'user',
    },
  },
  component: UpdateCardModal,
  tags: ['autodocs'],
  title: 'features/Card/Actions/UpdateCardModal',
} satisfies Meta<typeof UpdateCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/`]}>
        <UpdateCardModal {...args} />
      </MemoryRouter>
    </Provider>
  ),
}
