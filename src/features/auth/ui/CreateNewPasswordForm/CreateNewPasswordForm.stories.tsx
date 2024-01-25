import { ON_SUBMIT_SB } from '@/common/const'
import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from './CreateNewPasswordForm'

const meta = {
  argTypes: {
    className: {
      control: false,
      description: 'The class that is passed from the parent component is used for positioning.',
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
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'features/Auth/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: ON_SUBMIT_SB,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    onSubmit: ON_SUBMIT_SB,
  },
}
