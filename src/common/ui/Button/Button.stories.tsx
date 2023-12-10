import type { Meta, StoryObj } from '@storybook/react'

import exitIcon from '../../assets/sprites/exitIcon.svg'
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

export const PrimaryWithExitIcon: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    icon: exitIcon,
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

export const SecondaryWithExitIcon: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    icon: exitIcon,
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
