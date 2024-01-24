import type { Meta, StoryObj } from '@storybook/react'

import { Preloader } from './Preloader'

const meta = {
  argTypes: {
    fullHeight: {
      control: 'boolean',
      description: 'Flag for render component with 100vh',
    },
    size: {
      control: 'number',
      description: 'Size button in px (width + height)',
    },
  },
  component: Preloader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'components/Preloader',
} satisfies Meta<typeof Preloader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 100,
  },
}

export const FullHeight: Story = {
  args: {
    fullHeight: true,
    size: 100,
  },
}
