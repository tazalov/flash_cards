import { ON_SUBMIT_SB } from '@/common/const'
import { Modal } from '@/common/ui/Modals'
import { Meta, StoryObj } from '@storybook/react'

import { ActionsCardForm } from './ActionsCardForm'

const meta = {
  argTypes: {
    btnTitle: {
      control: 'text',
      description: 'Title for button type submit',
    },
    card: {
      control: false,
      description: 'Current card data',
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
  component: ActionsCardForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'features/Card/Actions/ActionsCardForm',
} satisfies Meta<typeof ActionsCardForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    btnTitle: 'Action text',
    disabled: false,
    onSubmit: ON_SUBMIT_SB,
  },
  render: args => (
    <Modal title="Actions Card Form" trigger={<span>Click me</span>}>
      <ActionsCardForm {...args} />
    </Modal>
  ),
}
