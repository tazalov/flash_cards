import { Card } from '@/common/ui/Card'
import { Skeleton } from '@/common/ui/Skeleton'
import cn from 'classnames'

import s from './CardBody.module.scss'

export const CardBodySkeleton = () => {
  return (
    <Card className={s.root}>
      <Skeleton border={5} className={s.title} height={36} />
      <Skeleton border={5} height={24} width={150} />
      <Skeleton border={5} className={cn(s.shots, s.skeletonShots)} height={20} width={200} />
      <Skeleton border={5} height={36} width="100%" />
    </Card>
  )
}
