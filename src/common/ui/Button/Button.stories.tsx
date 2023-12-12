import type { Meta, StoryObj } from '@storybook/react'

import { CloseEye } from '@/common/assets/icons'

import { Button } from './Button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outlined', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryWithIcons: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    endIcon: <CloseEye />,
    startIcon: <CloseEye />,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary Disabled',
    disabled: true,
    variant: 'secondary',
  },
}

export const SecondaryWithIcons: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    endIcon: <CloseEye />,
    startIcon: <CloseEye />,
    variant: 'secondary',
  },
}
export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    disabled: false,
    variant: 'outlined',
  },
}
export const Link: Story = {
  args: {
    children: 'Link Button',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    disabled: true,
    fullWidth: true,
    variant: 'primary',
  },
}
