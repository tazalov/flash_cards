import { ComponentPropsWithoutRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Edit, Play } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Column, Sort } from '@/common/types'
import { IconButton } from '@/common/ui/IconButton'
import { Table } from '@/common/ui/Table'
import { Typography } from '@/common/ui/Typography'
import { Deck } from '@/features/deck/model/types/decks.types'
import { UpdateDeckModal } from '@/features/deck/ui/DeckActions/UpdateDeckModal'

import s from './DecksTable.module.scss'

import { RemoveDeckModal } from '../../DeckActions/RemoveDeckModal/RemoveDeckModal'

const columns: Column[] = [
  {
    key: 'name',
    sortable: true,
    title: 'Name',
  },
  {
    key: 'cardsCount',
    sortable: true,
    title: 'Cards',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'created',
    sortable: true,
    title: 'Created by',
  },
  {
    key: 'buttons',
    sortable: false,
    title: '',
  },
]

type Props = {
  authId: string
  handleChangeSort: (sort: Sort) => void
  items: Deck[]
  sort?: Sort
} & ComponentPropsWithoutRef<'table'>
export const DecksTable = ({ authId, handleChangeSort, items, sort, ...rest }: Props) => {
  const location = useLocation()

  return (
    <Table.Root {...rest}>
      <Table.SortableHeader columns={columns} onSort={handleChangeSort} sort={sort} />
      <Table.Body>
        {items.map(el => {
          return (
            <Table.Row key={el.id}>
              <Table.Cell className={s.nameCell}>
                <Typography
                  as={Link}
                  className={s.name}
                  state={{ search: location.search }}
                  to={`/${el.id}/cards`}
                  variant={TypographyVariant.body2}
                >
                  {el.cover && <img alt="cover" className={s.cover} src={el.cover} />}
                  {el.name}
                </Typography>
              </Table.Cell>
              <Table.Cell className={s.cardsCountCell}>{el.cardsCount}</Table.Cell>
              <Table.Cell className={s.updatedCell}>
                {new Date(el.updated).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell className={s.authorCell}>{el.author.name}</Table.Cell>
              <Table.Cell className={s.actionsCell}>
                <IconButton
                  className={s.actionsIcon}
                  icon={<Play />}
                  onClick={() => alert('Навигация на страницу play')}
                />
                {authId === el.userId && (
                  <>
                    <UpdateDeckModal deck={el} trigger={<IconButton icon={<Edit />} />} />
                    <RemoveDeckModal deckId={el.id} deckName={el.name} />
                  </>
                )}
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
