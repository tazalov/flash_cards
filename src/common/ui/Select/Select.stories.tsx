import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Select } from './Select'

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Flag for disable buttons',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Flag for fullwidth style',
    },
    label: {
      control: 'text',
      description: 'Text above select',
    },
    onValueChange: {
      action: 'Select value changed!',
      description: 'Callback for control change value',
    },
    pagination: {
      control: false,
      description: 'Flag for render select inside pagination. Use with caution!',
    },
    placeholder: {
      control: 'text',
      description: 'Text for 1st render select',
    },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'components/Select', //change
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

const options = [
  { title: 'title1', value: 'title1' },
  { title: 'title2', value: 'title2' },
  { title: 'title3', value: 'title3' },
  { title: 'title4', value: 'title4' },
]

export const Default: Story = {
  args: {
    label: 'Some text for label',
    options,
    placeholder: 'Placeholder text',
  },
}

export const Controlled: Story = {
  args: { options },
  render: args => {
    const [current, setCurrent] = useState<null | string>(null)

    const handleChangeCurrentOption = (value: string) => {
      debugger
      setCurrent(value)
    }

    return (
      <Select
        label={`Current option value: ${current || 'none'}`}
        onValueChange={handleChangeCurrentOption}
        options={args.options}
      />
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled select',
    options,
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Full width select',
    options,
    placeholder: 'Placeholder text',
  },
}

export const Pagination: Story = {
  args: {
    options: [
      { title: '10', value: '10' },
      { title: '20', value: '20' },
      { title: '50', value: '50' },
      { title: '100', value: '100' },
    ],
    pagination: true,
    placeholder: '100',
  },
}
