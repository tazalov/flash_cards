import { Modal } from '@/common/ui/Modals'
import { Meta, StoryObj } from '@storybook/react'

import { ActionsCardForm } from './ActionsCardForm'

const meta = {
  component: ActionsCardForm,
  tags: ['autodocs'],
  title: 'features/Card/Actions/CreateCardForm',
} satisfies Meta<typeof ActionsCardForm>

export default meta
type Story = StoryObj<typeof meta>

export const CreateCardFormStory: Story = {
  args: {
    disabled: false,
    onSubmit: () => new Promise(res => res({ error: null, fieldErrors: null })),
    submitTitle: 'Action text',
  },
  render: args => (
    <Modal title="Some title modal" trigger={<span>Click me</span>}>
      <ActionsCardForm {...args} />
    </Modal>
  ),
}
