import { ComponentPropsWithoutRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Edit, Play, Remove } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Column, Sort } from '@/common/types'
import { IconButton } from '@/common/ui/IconButton'
import { Table } from '@/common/ui/Table'
import { Typography } from '@/common/ui/Typography'

import s from './DecksTable.module.scss'

import { Deck } from '../../../model/types/decks.types'
import { RemoveDeckModal } from '../../DeckActions/RemoveDeckModal/RemoveDeckModal'
import { UpdateDeckModal } from '../../DeckActions/UpdateDeckModal/UpdateDeckModal'
import { DecksTableSkeleton } from './DecksTableSkeleton'

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
  },
]

type Props = {
  authId: string
  handleChangeSort: (sort: Sort) => void
  isLoading: boolean
  items?: Deck[]
  itemsPerPage: number
  sort?: Sort
} & ComponentPropsWithoutRef<'table'>

export const DecksTable = ({
  authId,
  handleChangeSort,
  isLoading,
  items,
  itemsPerPage,
  sort,
  ...rest
}: Props) => {
  const location = useLocation()

  const navigate = useNavigate()

  const handleNavigateToLearnPage = (id: string, name: string) => () => {
    navigate(`/${id}/learn/${name}`)
  }

  return (
    <Table.Root {...rest}>
      <Table.SortableHeader columns={columns} onSort={handleChangeSort} sort={sort} />
      <Table.Body>
        {isLoading ? (
          <DecksTableSkeleton countCell={itemsPerPage} />
        ) : (
          items?.map(el => {
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
                    disabled={el.cardsCount === 0}
                    icon={<Play />}
                    onClick={handleNavigateToLearnPage(el.id, el.name)}
                  />
                  {authId === el.userId && (
                    <>
                      <UpdateDeckModal deck={el} trigger={<IconButton icon={<Edit />} />} />
                      <RemoveDeckModal
                        deckId={el.id}
                        deckName={el.name}
                        trigger={<IconButton icon={<Remove />} />}
                      />
                    </>
                  )}
                </Table.Cell>
              </Table.Row>
            )
          })
        )}
      </Table.Body>
    </Table.Root>
  )
}
