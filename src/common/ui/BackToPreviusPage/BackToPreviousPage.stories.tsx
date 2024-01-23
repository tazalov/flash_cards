import type { Meta, StoryObj } from '@storybook/react'

import { BackToPreviousPage } from './BackToPreviousPage'

const meta = {
  argTypes: {
    handleNavigate: {
      control: 'Back to Previous Page ',
    },
  },
  component: BackToPreviousPage,
  tags: ['autodocs'],
  title: 'Components/BackToPreviousPage',
} satisfies Meta<typeof BackToPreviousPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
