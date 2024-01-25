import { Meta, StoryObj } from '@storybook/react'

import { EditProfileForm } from './EditProfileForm'

const meta = {
  argTypes: {
    avatarUrl: {
      control: false,
      description: 'Src for user avatar',
    },
    disabled: {
      control: 'boolean',
      description: 'Flag for disable buttons',
    },
    handleDeactivateEditMode: {
      action: 'Edit mode deactivated',
      control: false,
      description: 'Callback for deactivate edit mode',
    },
    initialValue: {
      control: 'text',
      description: 'Initial value for input with username',
    },
    onSubmit: {
      action: 'Form submitted',
      description: 'Callback for send form data',
    },
  },
  component: EditProfileForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'features/Profile/EditProfileForm',
} satisfies Meta<typeof EditProfileForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    initialValue: 'username value',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    initialValue: 'username value',
  },
}
