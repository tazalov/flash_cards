import { ComponentPropsWithoutRef } from 'react'

import { Edit, Trash } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Column, Sort } from '@/common/types'
import { IconButton } from '@/common/ui/IconButton'
import { Rating } from '@/common/ui/Rating'
import { Table } from '@/common/ui/Table'
import { Typography } from '@/common/ui/Typography'
import { Card } from '@/features/deck/model/types/decks.types'

import s from './DeckCards.module.scss'

type Props = {
  deckItems?: Card[]
  handleChangeSort: (sort: Sort) => void
  isOwner: boolean
  sort?: Sort
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

const columns: Array<Column> = [
  {
    key: 'question',
    sortable: true,
    title: 'Question',
  },
  {
    key: 'answer',
    sortable: true,
    title: 'Answer',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'grade',
    sortable: true,
    title: 'Grade',
  },
  {
    key: '',
    sortable: false,
    title: '',
  },
]

export const DeckCards = (props: Props) => {
  const { className, deckItems, handleChangeSort, isOwner, sort } = props

  return (
    <Table.Root className={className}>
      <Table.SortableHeader
        className={s.table}
        columns={columns}
        onSort={handleChangeSort}
        sort={sort}
      />
      <Table.Body>
        {deckItems?.map(el => {
          return (
            <Table.Row key={el.id}>
              <Table.Cell className={s.cell}>
                <div className={s.question}>
                  {el.questionImg && (
                    <img alt={el.question} className={s.image} src={el.questionImg} />
                  )}
                  <Typography variant={TypographyVariant.body2}>{el.question}</Typography>
                </div>
              </Table.Cell>
              <Table.Cell className={s.cell}>{el.answer}</Table.Cell>
              <Table.Cell>{new Date(el.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>
                <Rating rating={el.grade} />
              </Table.Cell>
              <Table.Cell>
                {isOwner && (
                  <div className={s.editIcons}>
                    <IconButton icon={<Edit />} />
                    <IconButton icon={<Trash />} />
                  </div>
                )}
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
