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
    error: true,
    errorText: 'Some error',
    label: '',
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

const Component = (props: TextFieldProps) => {
  const { error, errorText, label, type } = props

  const [value, setValue] = useState('')

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handlePressOnEnter = () => {
    setValue('')
  }

  return (
    <TextField
      error={error}
      errorText={errorText}
      label={label}
      onChange={onChangeValueHandler}
      onChangeValue={setValue}
      onPressEnter={handlePressOnEnter}
      type={type}
      value={value}
    />
  )
}

export const DefaultControlled: Story = {
  render: () => <Component errorText="Some error" label="Input" />,
}
export const SearchControlled: Story = {
  render: () => <Component label="" type="search" />,
}
export const PasswordControlled: Story = {
  render: () => <Component label="Password" type="password" />,
}
