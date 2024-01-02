import { ComponentPropsWithoutRef } from 'react'

import { StarEmpty, StarFill } from '@/common/assets/icons'
import cn from 'classnames'

import s from './Rating.module.scss'

type Props = {
  maxRating?: number
  rating: number
} & ComponentPropsWithoutRef<'div'>

export const Rating = (props: Props) => {
  const { className, maxRating = 5, rating, ...restProps } = props
  const stars = [...Array(maxRating)].map((_, index) => index + 1)

  return (
    <div className={cn(s.root, className)} {...restProps}>
      {stars.map((star, index) => {
        return rating >= star ? (
          <StarEmpty className={s.icon} key={index} />
        ) : (
          <StarFill className={s.icon} key={index} />
        )
      })}
    </div>
  )
}
