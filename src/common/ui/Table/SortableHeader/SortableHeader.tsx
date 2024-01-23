import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

import { Column, Sort } from '@/common/types'
import cn from 'classnames'

import s from './SortableHeader.module.scss'

import { Table } from '../Table'

type HeaderWithSortProps = {
  columns: Column[]
  onSort?: (sort: Sort) => void
  sort?: Sort
} & Omit<ComponentPropsWithoutRef<'thead'>, 'children'>

export const SortableHeader = forwardRef<ElementRef<'thead'>, HeaderWithSortProps>(
  ({ columns, onSort, sort, ...restProps }, ref) => {
    const { t } = useTranslation()

    const handleSort = (key: string, sortable?: boolean) => () => {
      if (!onSort || !sortable) {
        return
      }

      const currentDirection = sort?.key === key ? sort?.direction : null

      switch (currentDirection) {
        case 'asc': {
          return onSort({ direction: 'desc', key })
        }
        case 'desc': {
          return onSort(null)
        }
        default: {
          return onSort({ direction: 'asc', key })
        }
      }
    }

    return (
      <Table.Head {...restProps} ref={ref}>
        <Table.Row>
          {columns.map(({ key, sortable, title }) => (
            <Table.TitleCell
              className={cn({ [s.headCell]: sortable })}
              key={key}
              onClick={handleSort(key, sortable)}
            >
              {t(title) || title}
              {sort && sort.key === key && <span>{sort.direction === 'asc' ? ' ▲' : ' ▼'}</span>}
            </Table.TitleCell>
          ))}
        </Table.Row>
      </Table.Head>
    )
  }
)
