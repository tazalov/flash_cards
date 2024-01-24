import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/features/auth'

import { Page } from './Page'

const meta = {
  argTypes: {
    children: {
      control: false,
      description: 'Content for page render',
    },
    mt: {
      control: 'text',
      description: 'Margin top css prop for render page',
    },
  },
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'components/Page',
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    children: <SignInForm isLoading onSubmit={() => {}} />,
  },
}
