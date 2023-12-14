import type { Meta, StoryObj } from '@storybook/react'

import { Check, OpenEye } from '@/common/assets/icons'
import { Button } from '@/common/ui/Button'

import { Dropdown } from './'

const meta = {
  argTypes: {},
  component: Dropdown.Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'components/DropDownMenu',
} satisfies Meta<typeof Dropdown.Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    align: 'start',
    children: (
      <>
        <Dropdown.Item startIcon={<Check />}>Check all</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item endIcon={<OpenEye />}>View all</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Item1</Dropdown.Item>
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
