import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  argTypes: {
    data: {
      control: false,
      description: 'Current auth user data',
    },
    isAuth: {
      control: 'boolean',
      description: 'Flag for render profile/sign-in button',
    },
    logout: {
      action: 'Success logout',
      control: false,
      description: 'Callback for logout user',
    },
  },
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'layout/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

const userData = {
  avatar: 'https://cojo.ru/wp-content/uploads/2022/12/menedzher-illiustratsiia-2.webp',
  email: 'some@email.com',
  username: 'MyUsername',
}

export const Auth: Story = {
  args: {
    data: userData,
    isAuth: true,
  },
}

export const NoAuth: Story = {
  args: {
    data: userData,
    isAuth: false,
  },
}
