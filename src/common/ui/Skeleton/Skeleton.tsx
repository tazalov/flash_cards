import { CSSProperties, memo } from 'react'

import cn from 'classnames'

import s from './Skeleton.module.scss'

interface SkeletonPT {
  border?: number | string
  className?: string
  color?: string
  height?: number | string
  width?: number | string
}

export const Skeleton = memo(({ border, className, color, height, width }: SkeletonPT) => {
  const styles: CSSProperties = {
    backgroundColor: color,
    borderRadius: border,
    height,
    width,
  }

  return <div className={cn(s.skeleton, className)} style={styles} />
})
