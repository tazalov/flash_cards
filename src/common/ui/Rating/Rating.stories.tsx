import { Meta, StoryObj } from '@storybook/react'

import { Rating } from './'

const meta = {
  argTypes: {
    maxRating: {
      control: false,
      description: 'Max value for rating',
    },
    rating: {
      control: { type: 'radio' },
      description: 'Current rating value',
      options: [0, 1, 2, 3, 4, 5],
    },
  },
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rating: 3,
  },
}
