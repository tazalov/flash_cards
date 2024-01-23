import { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './SignInForm'

const meta = {
  argTypes: {
    onSubmit: {
      action: 'Form is submitted',
    },
  },
  component: SignInForm,
  tags: ['autodocs'],
  title: 'features/Auth/SignInForm',
} satisfies Meta<typeof SignInForm>

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
