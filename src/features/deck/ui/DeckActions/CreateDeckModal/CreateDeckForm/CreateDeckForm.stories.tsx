import { Button } from '@/common/ui/Button'
import { Modal } from '@/common/ui/Modals'
import { CreateDeckForm } from '@/features/deck/ui/DeckActions/CreateDeckModal/CreateDeckForm/CreateDeckForm'
import { Meta, StoryObj } from '@storybook/react'

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
    <Modal title="Add new Deck" trigger={<Button>Add New Deck</Button>}>
      <CreateDeckForm {...args} />
    </Modal>
  ),
}
