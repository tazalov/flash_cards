import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/features/auth'

import { Page } from './Page'

const meta = {
  argTypes: {},
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'components/Page',
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    children: <SignInForm isLoading onSubmit={() => {}} />,
  },
}
