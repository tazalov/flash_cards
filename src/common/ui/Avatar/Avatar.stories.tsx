import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta = {
  argTypes: {
    size: {
      control: 'radio',
      description: 'Size for avatar',
      options: ['small', 'large'],
    },
    src: {
      control: false,
      description: 'Source image (string)',
    },
    title: {
      description: 'title for fallback text',
    },
  },
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: 'small',
    src: 'https://semfamily.ru/wp-content/uploads/2020/07/tree-736885.jpg',
    title: 'image',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    src: 'https://semfamily.ru/wp-content/uploads/2020/07/tree-736885.jpg',
    title: 'image',
  },
}

export const FallbackSmall: Story = {
  args: {
    size: 'small',
    title: 'TDD',
  },
}

export const FallbackLarge: Story = {
  args: {
    size: 'large',
    title: 'TDD',
  },
}
