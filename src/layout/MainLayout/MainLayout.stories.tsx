import type { Meta, StoryObj } from '@storybook/react'

import { MainLayout } from './MainLayout'

const meta = {
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'layout/MainLayout',
} satisfies Meta<typeof MainLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {}
