import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'
import { Meta, StoryObj } from '@storybook/react'

import s from '../CreateDeckModal.module.scss'

import { CreateDeckForm } from './CreateDeckForm'

const meta = {
  argTypes: {
    onSubmit: {
      action: 'Form is submitted',
    },
  },
  component: CreateDeckForm,
  tags: ['autodocs'],
  title: 'features/Decks/Actions/CreateDeckModal',
} satisfies Meta<typeof CreateDeckForm>

export default meta
type Story = StoryObj<typeof meta>

export const CreateDeckFormDefault: Story = {
  render: args => (
    <Modal className={s.modal} title="Add new Deck" trigger={<Button>Add New Deck</Button>}>
      <CreateDeckForm {...args} />
    </Modal>
  ),
}
