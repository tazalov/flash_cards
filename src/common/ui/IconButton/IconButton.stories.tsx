import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from './IconButton'

const meta = {
  argTypes: {},
  component: IconButton,
  parameters: {
    layout: 'fullscreen', //change
  },
  title: 'components/IconButton', //change
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
