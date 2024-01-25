import { ON_SUBMIT_SB } from '@/common/const'
import { Modal } from '@/common/ui/Modals'
import { Meta, StoryObj } from '@storybook/react'

import { DeckActionsForm } from './DeckActionsForm'

const meta = {
  argTypes: {
    btnTitle: {
      control: 'text',
      description: 'Title for button type submit',
    },
    deck: {
      control: false,
      description: 'Current deck data',
    },
    disabled: {
      control: 'boolean',
      description: 'Flag for disable buttons',
    },
    onSubmit: {
      action: 'Form submitted',
      description: 'Callback for send form data',
    },
  },
  component: DeckActionsForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'features/Decks/Actions/DeckActionsForm',
} satisfies Meta<typeof DeckActionsForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    btnTitle: 'Action text',
    onSubmit: ON_SUBMIT_SB,
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
    onSubmit: ON_SUBMIT_SB,
  },
  render: args => (
    <Modal title="Some title modal" trigger={<span>Click me</span>}>
      <DeckActionsForm {...args} />
    </Modal>
  ),
}
