import { Modal } from '@/common/ui/Modals'
import { Meta, StoryObj } from '@storybook/react'

import { DeckActionsForm } from './DeckActionsForm'

const meta = {
  argTypes: {
    onSubmit: {
      action: 'Action work!',
    },
  },
  component: DeckActionsForm,
  parameters: {
    layout: 'centered',
  },
  title: 'features/Decks/Actions/DeckActionsForm',
} satisfies Meta<typeof DeckActionsForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    btnTitle: 'Action text',
    disabled: false,
    onSubmit: () => new Promise(res => res({ error: null, fieldErrors: null })),
  },
  render: args => (
    <Modal title="Some title modal" trigger={<span>Click me</span>}>
      <DeckActionsForm {...args} />
    </Modal>
  ),
}

export const Disabled: Story = {
  args: {
    btnTitle: 'Action text',
    disabled: true,
    onSubmit: () => new Promise(res => res({ error: null, fieldErrors: null })),
  },
  render: args => (
    <Modal title="Some title modal" trigger={<span>Click me</span>}>
      <DeckActionsForm {...args} />
    </Modal>
  ),
}
