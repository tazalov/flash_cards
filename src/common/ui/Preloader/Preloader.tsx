import { Loader } from '@/common/assets/icons'

import s from './Preloader.module.scss'

interface Props {
  size: number | string
}

export const Preloader = ({ size }: Props) => {
  return (
    <div className={s.preloader}>
      <Loader height={size} width={size} />
    </div>
  )
}
