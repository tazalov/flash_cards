import type { Meta, StoryObj } from '@storybook/react'

import { Search } from '@/common/assets/icons'

import { IconButton } from './IconButton'

const meta = {
  argTypes: {
    onClick: {
      action: 'Clicked!',
    },
  },
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  title: 'components/IconButton',
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    icon: <Search />,
  },
}
