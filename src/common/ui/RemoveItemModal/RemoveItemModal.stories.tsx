import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/common/ui/Button'

import { RemoveItemModal } from './RemoveItemModal'

const meta = {
  argTypes: {
    handleRemoveItem: {
      action: 'Item removed',
    },
  },
  component: RemoveItemModal,
  parameters: {
    layout: 'centered',
  },
  title: 'components/RemoveItemModal',
} satisfies Meta<typeof RemoveItemModal>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    isLoading: false,
    itemName: 'SomeItemName',
    trigger: <Button>Open modal</Button>,
  },
}

export const isLoading: Story = {
  args: {
    isLoading: true,
    itemName: 'SomeItemName',
    trigger: <Button>Open modal</Button>,
  },
}
