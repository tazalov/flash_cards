import { useState } from 'react'

import { TabItem } from '@/common/ui/Tabs/TabItem'
import { TabsContent } from '@radix-ui/react-tabs'
import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './'

const meta = {
  argTypes: {
    children: {
      control: false,
      description: 'TabItem array or TabsContent array (click show code for learn more)',
    },
    label: {
      control: 'text',
      description: 'Text above tabs',
    },
    onValueChange: {
      action: 'Value changed',
      description: 'Callback for change current tab value',
    },
    value: {
      control: false,
      description: 'Current active tab value',
    },
  },
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabsState = [
  { disabled: false, title: 'Switcher1', value: 'tab1' },
  { disabled: false, title: 'Switcher2', value: 'tab2' },
  { disabled: false, title: 'Switcher3', value: 'tab3' },
  { disabled: false, title: 'Switcher4', value: 'tab4' },
]

export const Default: Story = {
  args: {
    children: <TabItem value="switcher">Switcher</TabItem>,
  },
}
export const Disabled: Story = {
  args: {
    children: (
      <TabItem disabled value="switcher">
        Switcher
      </TabItem>
    ),
  },
}
export const Active: Story = {
  args: {
    children: <TabItem value="switcher">Switcher</TabItem>,
    value: 'switcher',
  },
}

export const Controlled: Story = {
  args: {
    value: '1',
  },
  render: () => {
    const [value, setValue] = useState(tabsState[0].value)
    const handleChange = (tab: string) => {
      setValue(tab)
    }

    return (
      <>
        <Tabs label="Label text" onValueChange={handleChange} value={value}>
          {tabsState.map(el => {
            return (
              <TabItem disabled={el.disabled} key={el.value} value={el.value}>
                {el.title}
              </TabItem>
            )
          })}
        </Tabs>
        <Tabs value={value}>
          <TabsContent value={tabsState[0].value}>Lorem ipsum dolor sit amet 1.</TabsContent>
          <TabsContent value={tabsState[1].value}>Lorem ipsum dolor sit amet 2.</TabsContent>
          <TabsContent value={tabsState[2].value}>Lorem ipsum dolor sit amet 3.</TabsContent>
          <TabsContent value={tabsState[3].value}>Lorem ipsum dolor sit amet 4.</TabsContent>
        </Tabs>
      </>
    )
  },
}
