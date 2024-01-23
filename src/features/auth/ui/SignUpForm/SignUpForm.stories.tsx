import { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from './SignUpForm'

const meta = {
  argTypes: {
    onSubmit: {
      action: 'sign up',
    },
  },
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'features/Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>

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
