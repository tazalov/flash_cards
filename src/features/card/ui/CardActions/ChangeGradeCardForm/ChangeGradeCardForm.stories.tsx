import { Meta, StoryObj } from '@storybook/react'

import { ChangeGradeCardForm } from './ChangeGradeCardForm'

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Flag for disable buttons',
    },
    onSubmit: {
      action: 'Form submitted',
      description: 'Callback for send form data',
    },
  },
  component: ChangeGradeCardForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'features/Card/Actions/ChangeGradeCardForm',
} satisfies Meta<typeof ChangeGradeCardForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
