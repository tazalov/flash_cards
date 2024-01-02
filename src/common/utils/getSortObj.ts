import { Sort } from '@/common/types'

export const getSortObj = (sort?: string): Sort | undefined => {
  if (!sort) {
    return
  }
  const sortArr = sort.split('-')

  return {
    direction: sortArr[1] as 'asc' | 'desc',
    key: sortArr[0],
  }
}
