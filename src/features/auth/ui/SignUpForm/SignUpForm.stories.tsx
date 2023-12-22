import { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from './'

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

export const SignUpFormStory: Story = {}
