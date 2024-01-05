import { Meta, StoryObj } from '@storybook/react'

import { CreateCardForm } from './CreateCardForm'

const meta = {
  args: {
    isLoading: false,
    onSubmit: (data: FormData) => console.log(data),
  },
  component: CreateCardForm,
  tags: ['autodocs'],
  title: 'features/Card/Actions/CreateCardForm',
} satisfies Meta<typeof CreateCardForm>

export default meta
type Story = StoryObj<typeof meta>

export const CreateCardFormStory: Story = {}
