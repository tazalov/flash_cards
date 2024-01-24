import type { Meta, StoryObj } from '@storybook/react'

import { ReactNode } from 'react'

import { CloseEye, OpenEye } from '@/common/assets/icons'
import { Button } from '@/common/ui/Button'
import { Checkbox } from '@/common/ui/Checkbox'
import { TextField } from '@/common/ui/TextField'

import { Table } from './Table'

const meta = {
  argTypes: {},
  component: Table.Root,
  tags: ['autodocs'],
  title: 'components/Table',
} satisfies Meta<typeof Table.Root>

export default meta

type Story = StoryObj<typeof meta>

export const TitleCell: Story = {
  args: {
    children: 'I am a title cell',
  },
  render: (args: { children?: ReactNode }) => <Table.TitleCell>{args.children}</Table.TitleCell>,
}

export const Cell: Story = {
  args: {
    children: 'I am a cell',
  },
  render: (args: { children?: ReactNode }) => <Table.Cell>{args.children}</Table.Cell>,
}

export const RowTitleCells: Story = {
  args: {
    children: 'I am a title cell',
  },
  render: (args: { children?: ReactNode }) => (
    <Table.Row>
      <Table.TitleCell>{args.children}</Table.TitleCell>
      <Table.TitleCell>{args.children}</Table.TitleCell>
      <Table.TitleCell>{args.children}</Table.TitleCell>
      <Table.TitleCell>{args.children}</Table.TitleCell>
    </Table.Row>
  ),
}

export const RowCells: Story = {
  args: {
    children: 'I am a cell',
  },
  render: (args: { children?: ReactNode }) => (
    <Table.Row>
      <Table.Cell>{args.children}</Table.Cell>
      <Table.Cell>{args.children}</Table.Cell>
      <Table.Cell>{args.children}</Table.Cell>
      <Table.Cell>{args.children}</Table.Cell>
    </Table.Row>
  ),
}

export const TableDemo: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.TitleCell>Title cell name1</Table.TitleCell>
          <Table.TitleCell>Title cell name2</Table.TitleCell>
          <Table.TitleCell>Title cell name3</Table.TitleCell>
          <Table.TitleCell>Title cell name4</Table.TitleCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Cell name1 (row1)</Table.Cell>
          <Table.Cell>Cell name2 (row1)</Table.Cell>
          <Table.Cell>Cell name3 (row1)</Table.Cell>
          <Table.Cell>Cell name4 (row1)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell name1 (row2)</Table.Cell>
          <Table.Cell>Cell name2 (row2)</Table.Cell>
          <Table.Cell>Cell name3 (row2)</Table.Cell>
          <Table.Cell>Cell name4 (row2)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Button>Button</Button>
          </Table.Cell>
          <Table.Cell>
            <Checkbox checked label="Checkbox" onCheckedChange={() => {}} />
          </Table.Cell>{' '}
          <Table.Cell>
            <TextField disabled label="Disabled" />
          </Table.Cell>
          <Table.Cell>
            <CloseEye />
            <OpenEye />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
}
