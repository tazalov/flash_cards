import { Meta, StoryObj } from '@storybook/react'

import { ActionsCardForm } from './ActionsCardForm'

const meta = {
  args: {
    disabled: false,
    onSubmit: (data: FormData) => console.log(data),
  },
  component: ActionsCardForm,
  tags: ['autodocs'],
  title: 'features/Card/Actions/CreateCardForm',
} satisfies Meta<typeof ActionsCardForm>

export default meta
type Story = StoryObj<typeof meta>

export const CreateCardFormStory: Story = {}
