import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta = {
  argTypes: {
    checked: {
      description: 'Value for state of component',
    },
    disabled: {
      control: 'boolean',
      description: 'Flag for disabling the component',
    },
    label: {
      control: 'text',
      description: 'Text for label',
    },
    onCheckedChange: {
      action: 'State changed',
      description: 'Callback for changing state of component',
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Controlled: Story = {
  args: {
    checked: true,
  },
  render: () => {
    const [checked, setChecked] = useState(false)

    const handleChangeChecked = () => setChecked(prev => !prev)

    return <Checkbox checked={checked} label="Lorem ipsum" onCheckedChange={handleChangeChecked} />
  },
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
