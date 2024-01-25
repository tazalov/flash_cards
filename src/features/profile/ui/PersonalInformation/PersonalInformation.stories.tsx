import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './PersonalInformation'

const meta = {
  argTypes: {
    data: {
      control: false,
      description: 'Current auth user data',
    },
    editMode: {
      control: 'boolean',
      description: 'Flag for show/hide edit profile form',
    },
    handleLogout: {
      action: 'Success logout',
      control: false,
      description: 'Callback for logout user',
    },
    handleUpdate: {
      action: 'Success update username',
      control: false,
      description: 'Callback for change user data',
    },
    isLoadLogout: {
      control: 'boolean',
      description: 'Flag for disabled buttons in no-active edit mode',
    },
    isLoadUpdate: {
      control: 'boolean',
      description: 'Flag for disabled buttons in active edit mode',
    },
    setEditMode: {
      action: 'Edit mode changed',
      control: false,
      description: 'Callback for change current state for edit mode',
    },
  },
  component: PersonalInformation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
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

export const DefaultDisabled: Story = {
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

export const EditMode: Story = {
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

export const EditModeDisabled: Story = {
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
