import type { Meta, StoryObj } from '@storybook/react'

import { ComponentPropsWithoutRef, useState } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import { Slider } from './Slider'

const meta = {
  argTypes: {
    asChild: {
      control: false,
    },
  },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultWithoutInput: Story = {
  args: {
    isInputControl: false,
    value: [0, 100],
  },
}

const RenderComp = (props: ComponentPropsWithoutRef<typeof RadixSlider.Root>) => {
  const [values, setValues] = useState(props.value)

  return <Slider {...props} onValueChange={setValues} value={values} />
}

export const SliderWithoutInputControl: Story = {
  args: {
    isInputControl: false,
    max: 100,
    min: 0,
    step: 1,
    value: [0, 100],
  },
  render: args => <RenderComp {...args} />,
}
export const SliderWithInputControl: Story = {
  args: {
    max: 100,
    min: 0,
    step: 1,
    value: [0, 100],
  },
  render: args => <RenderComp {...args} />,
}
