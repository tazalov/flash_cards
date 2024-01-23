import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from './CreateNewPasswordForm'

const meta = {
  argTypes: {
    onSubmit: {
      action: 'Create new password',
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
