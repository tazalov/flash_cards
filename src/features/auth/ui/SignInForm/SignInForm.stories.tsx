import { MemoryRouter } from 'react-router-dom'

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

export const SignInFormDefault: Story = {
  render: args => (
    <MemoryRouter initialEntries={['/']}>
      <SignInForm {...args} />
    </MemoryRouter>
  ),
}
