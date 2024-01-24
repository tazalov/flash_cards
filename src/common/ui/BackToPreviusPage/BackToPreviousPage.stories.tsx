import type { Meta, StoryObj } from '@storybook/react'

import { BackToPreviousPage } from './BackToPreviousPage'

const meta = {
  argTypes: {
    as: {
      control: false,
      description: 'Prop for polymorph render',
    },
    handleNavigate: {
      action: 'Back to Previous Page',
      description: 'Navigate function handler',
    },
    ref: {
      control: false,
      description: 'Standard React ref obj',
    },
    title: {
      description: 'Text for link',
    },
  },
  component: BackToPreviousPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/BackToPreviousPage',
} satisfies Meta<typeof BackToPreviousPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Back to prev page',
  },
}
