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
    errorText: 'some error',
    label: 'error input',
    placeholder: 'some error',
    type: 'text',
  },
}

export const DisabledTextField: Story = {
  args: {
    disabled: true,
    label: 'disabled',
    placeholder: 'disabled ',
    type: 'text',
  },
}

export const SearchTextField: Story = {
  args: {
    label: 'Search input',
    type: 'search',
    value: 'Search input',
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
      onPressEnter={handlePressOnEnter}
      setValue={setValue}
      type={type}
      value={value}
    />
  )
}

export const DefaultControlled: Story = {
  render: () => <Component errorText="Some error" label="default" />,
}
export const SearchControlled: Story = {
  render: () => <Component label="search" type="search" />,
}
export const PasswordControlled: Story = {
  render: () => <Component label="password" type="password" />,
}
