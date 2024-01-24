import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { ALLOWED_IMAGES_FORMATS, COVER_SCHEMA } from '@/common/const'
import { Cover } from '@/common/types'

import { FileUploader } from './FileUploader'

const meta = {
  argTypes: {
    setFile: {
      action: 'File loaded',
      description: 'Callback for upload file (controlled component)',
    },
    trigger: {
      control: false,
      description: 'A component for start upload file',
    },
    validationSchema: {
      control: false,
      description: 'Validation Scheme (zod)',
    },
  },
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'components/FileUploader',
} satisfies Meta<typeof FileUploader>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultImageUploader: Story = {
  args: {
    trigger: <div>I AM A TRIGGER SPAN</div>,
    validationSchema: COVER_SCHEMA,
  },
}

export const ControlledImageUploader: Story = {
  args: {
    trigger: null,
    validationSchema: COVER_SCHEMA,
  },
  render: () => {
    const [cover, setCover] = useState<Cover>(null)

    const coverIsValidImage = cover instanceof File && ALLOWED_IMAGES_FORMATS.includes(cover.type)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}>
        <FileUploader
          setFile={setCover}
          trigger={<div>I AM A TRIGGER SPAN</div>}
          validationSchema={COVER_SCHEMA}
        />
        {coverIsValidImage && <img alt="cover" src={URL.createObjectURL(cover)} />}
      </div>
    )
  },
}
