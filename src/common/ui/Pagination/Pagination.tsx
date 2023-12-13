import { ChevronUp } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Select, SelectProps } from '@/common/ui/Select'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './Pagination.module.scss'

import { usePagination } from './usePagination'

interface Props extends SelectProps {
  currentPage: number
  onChangePage: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const Pagination = ({
  className,
  currentPage,
  onChangePage,
  pageSize,
  siblingCount = 1,
  totalCount,
  ...restProps
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const handleClickPrev = () => {
    onChangePage(currentPage - 1)
  }

  const handleClickNext = () => {
    onChangePage(currentPage + 1)
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

  return (
    <div className={cn(s.container, className)}>
      <button
        className={cn(s.item, { [s.disabled]: isFirstPage })}
        disabled={isFirstPage}
        onClick={handleClickPrev}
      >
        <ChevronUp className={s.left} />
      </button>
      {paginationRange.map((num, i) => {
        if (num === 0) {
          return (
            <span className={cn(s.item, s.dots)} key={i}>
              &#8230;
            </span>
          )
        }
        const isCurrentPage = num === currentPage

        const handleChangePage = () => onChangePage(num)

        return (
          <button
            className={cn(s.item, { [s.selected]: isCurrentPage })}
            key={i}
            onClick={handleChangePage}
          >
            <Typography as="span" variant={TypographyVariant.body2}>
              {num}
            </Typography>
          </button>
        )
      })}
      <button
        className={cn(s.item, { [s.disabled]: isLastPage })}
        disabled={isLastPage}
        onClick={handleClickNext}
      >
        <ChevronUp className={s.right} />
      </button>
      <Typography as="div" className={s.selectContainer} variant={TypographyVariant.body2}>
        Показать
        <Select {...restProps} pagination />
        на странице
      </Typography>
    </div>
  )
}
