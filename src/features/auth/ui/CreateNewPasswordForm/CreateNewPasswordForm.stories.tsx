import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from './'
import { CreateNewPasswordFormValues } from './useCreateNewPasswordForm'

const meta = {
  args: {
    onSubmit: (data: CreateNewPasswordFormValues) => console.log(data),
  },
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'features/Auth/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpFormStory: Story = {}
