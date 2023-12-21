import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  argTypes: {
    logout: {
      action: 'Logout!',
    },
  },
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'layout/Header',
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Auth: Story = {
  args: {
    data: {
      avatar: 'https://cojo.ru/wp-content/uploads/2022/12/menedzher-illiustratsiia-2.webp',
      email: 'some@email.com',
      username: 'MyUsername',
    },
    isAuth: true,
  },
}

export const NoAuth: Story = {
  args: {
    isAuth: false,
  },
}
