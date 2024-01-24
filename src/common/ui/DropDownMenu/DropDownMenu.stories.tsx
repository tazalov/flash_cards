import type { Meta, StoryObj } from '@storybook/react'

import { Check, OpenEye } from '@/common/assets/icons'
import { Button } from '@/common/ui/Button'

import { Dropdown } from './'

const meta = {
  argTypes: {
    align: {
      control: { type: 'radio' },
      description: 'The preferred alignment against the trigger. May change when collisions occur.',
      options: ['top', 'right', 'bottom', 'left'],
    },
    children: {
      control: false,
      description: 'Content for drop-down',
    },
    sideOffset: {
      control: 'number',
      description: 'The distance in pixels from the trigger.',
    },
    trigger: {
      control: false,
      description: 'A component for controlling the display of the dropdown menu',
    },
  },
  component: Dropdown.Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'components/DropDownMenu',
} satisfies Meta<typeof Dropdown.Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Dropdown.Item startIcon={<Check />}>Check all</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item endIcon={<OpenEye />}>View all</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>
          <Button>Logout</Button>
        </Dropdown.Item>
      </>
    ),
    sideOffset: 10,
    trigger: <Button>I AM A TRIGGER</Button>,
  },
}
