import { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from './ForgotPasswordForm'

const meta = {
  argTypes: {
    onSubmit: {
      action: 'Form is submitted',
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
    isLoading: false,
    onSubmit: () => new Promise(res => res({ error: null, fieldErrors: null })),
  },
}

export const IsLoading: Story = {
  args: {
    isLoading: true,
    onSubmit: () => new Promise(res => res({ error: null, fieldErrors: null })),
  },
}
