import type { Meta, StoryObj } from '@storybook/react'

import { CloseEye } from '@/common/assets/icons'
import { ButtonVariant } from '@/common/enums'

import { Button } from './Button'

const meta = {
  argTypes: {
    as: {
      control: false,
      description: 'Prop for polymorph render',
    },
    disabled: {
      control: 'boolean',
      description: 'Flag for disabling the component',
    },
    endIcon: {
      control: false,
      description: 'Icon after text',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Flag for fullwidth style',
    },
    ref: {
      control: false,
      description: 'Standard React ref obj',
    },
    startIcon: {
      control: false,
      description: 'Icon before text',
    },
    variant: {
      control: { type: 'radio' },
      description: 'Variant for button render',
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
    variant: ButtonVariant.primary,
  },
}

export const PrimaryWithIcons: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    endIcon: <CloseEye />,
    startIcon: <CloseEye />,
    variant: ButtonVariant.primary,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: ButtonVariant.secondary,
  },
}

export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary Disabled',
    disabled: true,
    variant: ButtonVariant.secondary,
  },
}

export const SecondaryWithIcons: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    endIcon: <CloseEye />,
    startIcon: <CloseEye />,
    variant: ButtonVariant.secondary,
  },
}
export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    disabled: false,
    variant: ButtonVariant.outlined,
  },
}
export const Link: Story = {
  args: {
    children: 'Link Button',
    disabled: false,
    variant: ButtonVariant.link,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: ButtonVariant.primary,
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    disabled: true,
    fullWidth: false,
    variant: ButtonVariant.primary,
  },
}
