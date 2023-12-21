import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from './'

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

export const CreateNewPasswordStory: Story = {}
