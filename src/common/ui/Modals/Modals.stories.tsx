import { Button } from '@/common/ui/Button'
import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './'

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Modal',
}

export default meta
type Story = StoryObj<typeof meta>

export const ModalWithTitle: Story = {
  args: {
    children: (
      <div style={{ padding: '18px 24px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis eaque eveniet
        expedita in iste necessitatibus nulla sint temporibus. Ipsam.
      </div>
    ),
    defaultOpen: false,
    title: 'title',
    trigger: <Button>Open modal</Button>,
  },
}

export const DefaultModal: Story = {
  args: {
    children: (
      <div style={{ padding: '18px 24px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos error explicabo fugiat
        laborum minus, modi non praesentium quaerat quibusdam ratione reiciendis, tempora vel.
        Accusantium consequatur ex excepturi fugit, impedit ipsum laboriosam nihil quaerat quibusdam
        saepe, sequi, velit? Atque dolor ducimus ea est mollitia, natus nihil quam quibusdam quos
        voluptatem?
      </div>
    ),
    defaultOpen: false,
    trigger: <Button>Open modal</Button>,
  },
}
