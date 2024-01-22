import { Skeleton } from '@/common/ui/Skeleton'
import { Table } from '@/common/ui/Table'

import s from './CardsTable.module.scss'

interface Props {
  countCell: number
}

export const CardsTableSkeleton = ({ countCell }: Props) => {
  return new Array(countCell).fill(0).map((_, i) => (
    <Table.Row key={i}>
      <Table.Cell className={s.questionCell}>
        <Skeleton border={5} height={16} width="100%" />
      </Table.Cell>
      <Table.Cell className={s.answerCell}>
        <Skeleton border={5} height={16} width="100%" />
      </Table.Cell>
      <Table.Cell className={s.updatedCell}>
        <Skeleton border={5} height={16} width="100%" />
      </Table.Cell>
      <Table.Cell className={s.gradeCell}>
        <Skeleton border={5} height={16} width="100%" />
      </Table.Cell>
      <Table.Cell className={s.actionsCell} />
    </Table.Row>
  ))
}
