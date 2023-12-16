import { useState } from 'react'

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

const Component = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(false)
    console.log('MODAL CLOSE')
  }

  return (
    <Modal
      open={openModal}
      setOpenModal={setOpenModal}
      title="Delete pack"
      trigger={<Button variant="secondary">Open modal</Button>}
    >
      <div style={{ padding: '18px 24px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci perferendis
        rem voluptatibus. Aperiam at consectetur consequatur doloremque dolorum eaque, eligendi
        error exercitationem incidunt, inventore minus modi quae quidem quis.
      </div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '18px 24px',
        }}
      >
        <Button onClick={handleClick} variant="secondary">
          Cancel
        </Button>
        <Button onClick={handleClick}>Delete Pack</Button>
      </div>
    </Modal>
  )
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
    open: true,
  },
}

export const ModalWithTitle: Story = {
  render: () => <Component />,
}
