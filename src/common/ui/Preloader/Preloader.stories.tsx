import type { Meta, StoryObj } from '@storybook/react'

import { Preloader } from './Preloader'

const meta = {
  argTypes: {},
  component: Preloader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'components/Preloader',
} satisfies Meta<typeof Preloader>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    size: 100,
  },
}
