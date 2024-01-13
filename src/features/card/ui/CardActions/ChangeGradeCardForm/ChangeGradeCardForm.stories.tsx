import { Meta, StoryObj } from '@storybook/react'

import { ChangeGradeCardForm } from './ChangeGradeCardForm'

const meta = {
  argTypes: {
    onSubmit: {
      action: 'FormSubmitted',
    },
  },
  component: ChangeGradeCardForm,
  tags: ['autodocs'],
  title: 'features/Card/Actions/ChangeGradeCardForm',
} satisfies Meta<typeof ChangeGradeCardForm>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
