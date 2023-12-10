import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta = {
  argTypes: {
    onCheckedChange: {
      action: 'State changed!',
    },
  },
  component: Checkbox,
  title: 'components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

const CheckboxWithHooks = () => {
  const [checked, setChecked] = useState(false)

  const handleChangeChecked = () => setChecked(prev => !prev)

  return <Checkbox checked={checked} label="Lorem ipsum" onCheckedChange={handleChangeChecked} />
}

export const Demo: Story = {
  args: {
    checked: true,
  },
  render: () => <CheckboxWithHooks />,
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
  },
}

export const WithLabel: Story = {
  args: {
    checked: true,
    label: 'Lorem ipsum',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Lorem ipsum',
  },
}
