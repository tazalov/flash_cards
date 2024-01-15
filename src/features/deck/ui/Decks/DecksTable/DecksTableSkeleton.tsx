import { Skeleton } from '@/common/ui/Skeleton'
import { Table } from '@/common/ui/Table'

import s from './DecksTable.module.scss'

interface Props {
  countCell: number
}

export const DecksTableSkeleton = ({ countCell }: Props) => {
  return new Array(countCell).fill(0).map((_, i) => (
    <Table.Row key={i}>
      <Table.Cell className={s.nameCell}>
        <Skeleton border={5} height={16} width="100%" />
      </Table.Cell>
      <Table.Cell className={s.cardsCountCell}>
        <Skeleton border={5} height={16} width="100%" />
      </Table.Cell>
      <Table.Cell className={s.updatedCell}>
        <Skeleton border={5} height={16} width="100%" />
      </Table.Cell>
      <Table.Cell className={s.authorCell}>
        <Skeleton border={5} height={16} width="100%" />
      </Table.Cell>
      <Table.Cell className={s.actionsCell} />
    </Table.Row>
  ))
}
