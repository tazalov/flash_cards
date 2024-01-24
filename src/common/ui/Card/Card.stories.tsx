import type { Meta, StoryObj } from '@storybook/react'

import { ButtonVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'

import { Card } from './Card'

const paddingsAndGap = {
  '0': { padding: '0px' },
  '1rem width fit-content': { gap: '1rem', padding: '1rem', width: 'fit-content' },
  '1rem width inherit': { gap: '1rem', padding: '1rem', width: 'inherit' },
  '2rem fit-content': { gap: '2rem', padding: '2rem' },
  '10px width-300px': { gap: '10px', padding: '10px', width: '300px' },
  '20px width-400px': { gap: '20px', padding: '20px', width: '400px' },
}

const meta = {
  argTypes: {
    as: {
      control: false,
      description: 'Prop for polymorph render',
    },
    ref: {
      control: false,
      description: 'Standard React ref obj',
    },
    style: {
      control: {
        type: 'select',
      },
      description: 'Added for visual demonstration',
      mapping: paddingsAndGap,
      name: 'paddings and gap',
      options: Object.keys(paddingsAndGap),
    },
  },
  component: Card,
  parameters: {
    controls: { exclude: 'children' },
  },
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Button key={0} variant={ButtonVariant.secondary}>
        Button1
      </Button>,
      <Button fullWidth key={1} variant={ButtonVariant.secondary}>
        Button2
      </Button>,
      <div key={2}>
        <Button variant={ButtonVariant.secondary}>Button3</Button>
        <Button variant={ButtonVariant.secondary}>Button4</Button>
      </div>,
    ],
  },
}
