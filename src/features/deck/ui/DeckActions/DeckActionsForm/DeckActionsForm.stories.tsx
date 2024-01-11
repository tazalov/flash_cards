import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'
import { Meta, StoryObj } from '@storybook/react'

import s from '../CreateDeckModal/CreateDeckModal.module.scss'

import { DeckActionsForm } from './DeckActionsForm'

const meta = {
  args: {
    isLoading: false,
    onSubmit: (data: FormData) => console.log(data),
  },
  component: DeckActionsForm,
  tags: ['autodocs'],
  title: 'features/Decks/Actions/DeckActionsModal',
} satisfies Meta<typeof DeckActionsForm>

export default meta
type Story = StoryObj<typeof meta>

export const CreateDeckForm: Story = {
  render: args => (
    <Modal className={s.modal} title="Add new Deck" trigger={<Button>Add New Deck</Button>}>
      <DeckActionsForm {...args} />
    </Modal>
  ),
}
export const UpdateDeckForm: Story = {
  args: {
    deck: {
      cover: null,
      isPrivate: false,
      name: 'change name',
    },
  },
  render: args => (
    <Modal className={s.modal} title="Edit Deck" trigger={<Button>Edit Deck</Button>}>
      <DeckActionsForm {...args} />
    </Modal>
  ),
}
