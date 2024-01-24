import type { Meta, StoryObj } from '@storybook/react'

import { Search } from '@/common/assets/icons'

import { IconButton } from './IconButton'

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Flag for disabling the component',
    },
    icon: {
      control: false,
      description: 'Icon for render component',
    },
    size: {
      control: 'number',
      description: 'Size button in rem (width + height)',
    },
  },
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'components/IconButton',
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <Search />,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: <Search />,
  },
}
