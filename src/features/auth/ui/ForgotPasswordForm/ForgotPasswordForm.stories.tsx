import { ON_SUBMIT_SB } from '@/common/const'
import { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from './ForgotPasswordForm'

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
  component: ForgotPasswordForm,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'features/Auth/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

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
