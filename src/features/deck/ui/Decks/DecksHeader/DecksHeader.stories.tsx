import type { Meta, StoryObj } from '@storybook/react'

import { DecksHeader } from './DecksHeader'

const meta = {
  argTypes: {
    headerText: {
      control: 'text',
      description: 'Title for render component',
    },
  },
  component: DecksHeader,
  tags: ['autodocs'],
  title: 'features/Decks/DecksHeader',
} satisfies Meta<typeof DecksHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { headerText: 'Default Header' },
}
