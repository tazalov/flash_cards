import type { Meta, StoryObj } from '@storybook/react'

import { TypographyVariant } from '@/common/enums'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    align: {
      control: 'select',
      description: 'Typography text align',
      options: ['left', 'center', 'right'],
    },
    as: {
      control: false,
      description: 'Element for render',
    },
    variant: {
      control: 'radio',
      description: 'Typography display style',
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'components/Typography',
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'large. Heading',
    variant: TypographyVariant.large,
  },
}
export const H1: Story = {
  args: {
    children: 'h1. Heading',
    variant: TypographyVariant.h1,
  },
}

export const H2: Story = {
  args: {
    children: 'h2. Heading',
    variant: TypographyVariant.h2,
  },
}

export const H3: Story = {
  args: {
    children: 'h3. Heading',
    variant: TypographyVariant.h3,
  },
}

export const Body1: Story = {
  args: {
    children:
      'body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    variant: TypographyVariant.body1,
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    variant: TypographyVariant.subtitle1,
  },
}

export const Body2: Story = {
  args: {
    children:
      'body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    variant: TypographyVariant.body2,
  },
}

export const Subtitle2: Story = {
  args: {
    children:
      'subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
    variant: TypographyVariant.subtitle2,
  },
}

export const Caption: Story = {
  args: {
    children: 'caption text',
    variant: TypographyVariant.caption,
  },
}

export const Overline: Story = {
  args: {
    children: 'OVERLINE TEXT',
    variant: TypographyVariant.overline,
  },
}

export const Link1: Story = {
  args: {
    children: 'Link 1',
    variant: TypographyVariant.link1,
  },
}

export const Link2: Story = {
  args: {
    children: 'Link 1',
    variant: TypographyVariant.link2,
  },
}
