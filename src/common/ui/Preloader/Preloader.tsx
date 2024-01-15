import { Loader } from '@/common/assets/icons'
import cn from 'classnames'

import s from './Preloader.module.scss'

interface Props {
  fullHeight?: boolean
  size: number | string
}

export const Preloader = ({ fullHeight = false, size }: Props) => {
  return (
    <div className={cn(s.preloader, { [s.fullHeight]: fullHeight })}>
      <Loader height={size} width={size} />
    </div>
  )
}
