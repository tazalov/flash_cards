import { useState } from 'react'

import { TabItem } from '@/common/ui/Tabs/TabItem'
import { TabsContent } from '@radix-ui/react-tabs'
import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './'

const meta = {
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
  { disabled: false, title: 'Switcher', value: 'tab1' },
  { disabled: false, title: 'Switcher', value: 'tab2' },
  { disabled: false, title: 'Switcher', value: 'tab3' },
  { disabled: false, title: 'Switcher', value: 'tab4' },
  { disabled: true, title: 'Switcher', value: 'tab5' },
]

const Component = () => {
  const [value, setValue] = useState(tabsState[0].value)
  const handleChange = (tab: string) => {
    setValue(tab)
  }

  console.log(value)

  return (
    <div>
      <Tabs value={value}>
        <TabsContent value={tabsState[0].value}>Lorem ipsum dolor sit amet.</TabsContent>
        <TabsContent value={tabsState[1].value}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, eaque laudantium.
        </TabsContent>
        <TabsContent value={tabsState[2].value}>Lorem ipsum.</TabsContent>
        <TabsContent value={tabsState[3].value}>
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </TabsContent>
        <TabsContent value={tabsState[4].value}>Lorem ipsum dolor.</TabsContent>
      </Tabs>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequatur
        cupiditate dicta est eum facilis magnam qui, quidem sunt.
      </p>
      <Tabs label="Label" onValueChange={handleChange} value={value}>
        {tabsState.map(el => {
          return (
            <TabItem disabled={el.disabled} key={el.value} value={el.value}>
              {el.title}
            </TabItem>
          )
        })}
      </Tabs>
    </div>
  )
}

export const Default: Story = {
  args: {
    children: <TabItem value="switcher">Switcher</TabItem>,
    value: '1',
  },
}
export const Disabled: Story = {
  args: {
    children: (
      <Tabs defaultValue="switcher" value={tabsState[0].value}>
        <TabItem disabled value="switcher">
          Switcher
        </TabItem>
      </Tabs>
    ),
    value: '1',
  },
}
export const Active: Story = {
  args: {
    children: (
      <TabItem defaultValue="switcher" value={tabsState[0].value}>
        Switcher
      </TabItem>
    ),
    value: tabsState[0].value,
  },
}

export const Controlled: Story = {
  args: {
    children: null,
    value: '1',
  },
  render: () => <Component />,
}
