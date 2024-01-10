import type { Meta, StoryObj } from '@storybook/react'

import { CardBody } from './CardBody'

const meta = {
  argTypes: {},
  component: CardBody,
  parameters: {
    layout: 'fullscreen', //change
  },
  title: 'components/CardBody', //change
} satisfies Meta<typeof CardBody>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
