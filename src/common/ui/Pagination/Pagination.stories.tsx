import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'

import { Pagination } from './Pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

const options = [
  { title: '1', value: '1' },
  { title: '2', value: '2' },
  { title: '3', value: '3' },
  { title: '5', value: '5' },
  { title: '10', value: '10' },
]

const ControlledPagination = () => {
  const [current, setCurrent] = useState(1)
  const [view, setView] = useState('10')

  const items = [
    { id: 'title1', title: 'title1' },
    { id: 'title2', title: 'title2' },
    { id: 'title3', title: 'title3' },
    { id: 'title4', title: 'title4' },
    { id: 'title5', title: 'title5' },
    { id: 'title6', title: 'title6' },
    { id: 'title7', title: 'title7' },
    { id: 'title8', title: 'title8' },
    { id: 'title9', title: 'title9' },
    { id: 'title10', title: 'title10' },
  ]

  const setPage = (currentPage: number) => {
    if (current > 0) {
      setCurrent(currentPage)
    }
  }

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Typography variant={TypographyVariant.h2}>Number of current page: {current}</Typography>
      <Typography variant={TypographyVariant.h2}>Count items on page: {view}</Typography>
      <ul>
        {items.slice(0, +view).map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
      <Pagination
        currentPage={current}
        onChangePage={setPage}
        onValueChange={setView}
        options={options}
        pageSize={10}
        pagination
        placeholder={view}
        totalCount={200}
      />
    </div>
  )
}

export const ControlledDemo: Story = {
  args: {
    currentPage: 1,
    options: [],
    pageSize: 10,
    totalCount: 200,
  },
  render: () => <ControlledPagination />,
}

export const Demo: Story = {
  args: {
    currentPage: 1,
    options,
    pageSize: 10,
    totalCount: 200,
  },
}
