import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './PersonalInformation'

const meta = {
  argTypes: {
    handleLogout: {
      action: 'Success logout',
      control: false,
    },
    handleUpdate: {
      action: 'Success update username',
      control: false,
    },
    isLoadUpdate: {
      control: 'boolean',
    },
    setEditMode: {
      action: 'Edit mode changed',
      control: false,
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

export const Default: Story = {
  args: {
    data: {
      avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-1024.png',
      email: 'example@email.com',
      username: 'MyUsername',
    },
    editMode: false,
    isLoadLogout: false,
    isLoadUpdate: false,
  },
}

export const DefaultIsLoading: Story = {
  args: {
    data: {
      avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-1024.png',
      email: 'example@email.com',
      username: 'MyUsername',
    },
    editMode: false,
    isLoadLogout: true,
    isLoadUpdate: false,
  },
}

export const NoAvatar: Story = {
  args: {
    data: {
      email: 'example@email.com',
      username: 'MyUsername',
    },
    editMode: false,
    isLoadLogout: false,
    isLoadUpdate: false,
  },
}

export const ActiveEditMode: Story = {
  args: {
    data: {
      email: 'example@email.com',
      username: 'MyUsername',
    },
    editMode: true,
    isLoadLogout: false,
    isLoadUpdate: false,
  },
}

export const ActiveEditModeIsLoading: Story = {
  args: {
    data: {
      email: 'example@email.com',
      username: 'MyUsername',
    },
    editMode: true,
    isLoadLogout: false,
    isLoadUpdate: true,
  },
}
