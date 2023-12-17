import { ChangeEvent, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { TextField, TextFieldProps } from './'

const meta = {
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTextField: Story = {}

export const ErrorTextField: Story = {
  args: {
    errorText: 'Some error',
    type: 'text',
  },
}

export const DisabledTextField: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Disabled ',
    type: 'text',
    value: 'Disabled',
  },
}

export const SearchTextField: Story = {
  args: {
    label: 'Search',
    type: 'search',
    value: 'Search',
  },
}

const Component = (args: TextFieldProps) => {
  const [value, setValue] = useState('')

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handlePressOnEnter = () => {
    setValue('')
  }

  const handleChangeValue = (value: string) => {
    setValue(value)
  }

  return (
    <TextField
      {...args}
      onChange={onChangeValueHandler}
      onChangeValue={handleChangeValue}
      onPressEnter={handlePressOnEnter}
      value={value}
    />
  )
}

export const DefaultControlled: Story = {
  render: () => <Component />,
}
export const SearchControlled: Story = {
  args: {
    label: 'Search input',
    type: 'search',
  },
  render: (args: TextFieldProps) => <Component {...args} />,
}
export const PasswordControlled: Story = {
  args: {
    label: 'Password',
    type: 'password',
  },
  render: (args: TextFieldProps) => <Component {...args} />,
}
