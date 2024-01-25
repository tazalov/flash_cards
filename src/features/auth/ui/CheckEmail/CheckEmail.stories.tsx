import { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './CheckEmail'

const meta = {
  argTypes: {
    className: {
      control: false,
      description: 'The class that is passed from the parent component is used for positioning.',
    },
    email: {
      control: 'text',
      description: 'Current user email',
    },
  },
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'features/Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'example@mail.com',
  },
}
