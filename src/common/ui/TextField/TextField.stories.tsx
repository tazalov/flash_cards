import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

const meta = {
  argTypes: {
    inputClassName: {
      control: false,
      description: 'Classname for input',
    },
    label: {
      control: 'text',
      description: 'Text above tex field',
    },
    onChangeValue: {
      action: 'Value changed',
      description: 'Callback for control change value. Used instead of the standard "onChange"',
    },
    onPressEnter: {
      action: 'Value changed',
      control: false,
      description: 'Callback is an add-on to the standard "onKeyDown"',
    },
    value: {
      control: 'text',
      description: 'Current value for text field',
    },
  },
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    errorText: 'Some error',
    type: 'text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Disabled ',
    type: 'text',
    value: 'Disabled',
  },
}

export const TypeSearch: Story = {
  args: {
    label: 'Search',
    type: 'search',
    value: 'Search',
  },
}

export const TypePassword: Story = {
  args: {
    label: 'Password',
    type: 'password',
  },
}

export const Controlled: Story = {
  args: {
    label: 'Some label text',
  },
  render: args => {
    const [value, setValue] = useState('')

    const handlePressOnEnter = () => {
      setValue('')
    }

    const handleChangeValue = (value: string) => {
      setValue(value)
    }

    return (
      <TextField
        {...args}
        onChangeValue={handleChangeValue}
        onPressEnter={handlePressOnEnter}
        value={value}
      />
    )
  },
}
