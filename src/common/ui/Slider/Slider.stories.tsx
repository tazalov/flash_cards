import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './Slider'

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Flag for disabling the component',
    },
    isInputControl: {
      control: 'boolean',
      description: 'Flag for render inputs or blocks vor current values',
    },
    max: {
      control: 'number',
      description: 'Max value',
    },
    min: {
      control: 'number',
      description: 'Min value',
    },
    onValueChange: {
      action: 'Value changed',
      description: 'Callback for control change value',
    },
    step: {
      control: false,
      description: 'Step size',
    },
    value: {
      control: false,
      description: 'Current values. Format: [min, max]',
    },
  },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isInputControl: false,
    value: [0, 100],
  },
}

export const ControlledWithoutInputs: Story = {
  args: {
    isInputControl: false,
    max: 100,
    min: 0,
    step: 1,
    value: [0, 100],
  },
  render: args => {
    const [values, setValues] = useState(args.value)

    return <Slider {...args} onValueChange={setValues} value={values} />
  },
}
export const ControlledWithInputs: Story = {
  args: {
    max: 100,
    min: 0,
    step: 1,
    value: [0, 100],
  },
  render: args => {
    const [values, setValues] = useState(args.value)

    return <Slider {...args} onValueChange={setValues} value={values} />
  },
}
