import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/common/ui/Button'

import { Card } from './Card'

const paddingsAndGap = {
  '0': { padding: '0px' },
  '1rem': { gap: '1rem', padding: '1rem' },
  '2rem': { gap: '2rem', padding: '2rem' },
  '10px': { gap: '10px', padding: '10px' },
  '20px': { gap: '20px', padding: '20px' },
}

const meta = {
  argTypes: {
    style: {
      control: {
        type: 'select',
      },
      mapping: paddingsAndGap,
      name: 'paddings and gap',
      options: Object.keys(paddingsAndGap),
    },
    width: {
      control: { type: 'radio' },
      options: ['fit-content', 'inherit', '300px', '400px', '20rem', '30rem'],
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

export const CardWithContent: Story = {
  args: {
    children: [
      <Button key={0} variant="secondary">
        Button1
      </Button>,
      <Button key={1} variant="secondary">
        Button2
      </Button>,
      <div key={2}>
        <Button variant="secondary">Button3</Button>
        <Button variant="secondary">Button4</Button>
      </div>,
    ],
  },
}
