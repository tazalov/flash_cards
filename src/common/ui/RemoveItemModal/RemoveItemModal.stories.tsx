import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/common/ui/Button'

import { RemoveItemModal } from './RemoveItemModal'

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Flag for disable buttons',
    },
    handleRemoveItem: {
      action: 'Item removed',
      description: 'Callback for delete item',
    },
    itemName: {
      control: 'text',
      description: 'Text for question in body modal',
    },
    title: {
      control: 'text',
      description: 'Title for modal',
    },
    trigger: {
      control: false,
      description: 'A component for controlling the display of the modal',
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

export const Default: Story = {
  args: {
    itemName: 'SomeItemName',
    title: 'Some title remove item modal',
    trigger: <Button>Open modal</Button>,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    itemName: 'SomeItemName',
    trigger: <Button>Open modal</Button>,
  },
}
