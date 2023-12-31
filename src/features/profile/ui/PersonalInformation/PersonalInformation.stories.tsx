import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './PersonalInformation'

const meta = {
  argTypes: {
    handleLogout: {
      action: 'Success logout',
    },
    handleUpdate: {
      action: 'Success update username',
    },
  },
  component: PersonalInformation,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'features/Profile/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta

type Story = StoryObj<typeof meta>

export const WithAvatar: Story = {
  args: {
    data: {
      avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-1024.png',
      email: 'example@email.com',
      username: 'MyUsername',
    },
  },
}

export const NoAvatar: Story = {
  args: {
    data: {
      email: 'example@email.com',
      username: 'MyUsername',
    },
  },
}
