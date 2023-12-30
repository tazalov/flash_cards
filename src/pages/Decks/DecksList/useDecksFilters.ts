import { useSearchParams } from 'react-router-dom'

import { Sort } from '@/common/types'

export const useDecksFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams({})

  const minCardsCount = Number(searchParams.get('min'))
  const maxCardsCount =
    searchParams.get('max') === null ? undefined : Number(searchParams.get('max'))
  const currentPage = Number(searchParams.get('page')) || 1
  const itemsPerPage = Number(searchParams.get('items')) || 5
  const name = searchParams.get('search') === null ? '' : String(searchParams.get('search'))
  const show = searchParams.get('show') || 'all'
  // const orderBy = sort ? `${sort?.key}-${sort?.direction}` : undefined
  const orderBy = searchParams.get('sort') || undefined

  const handleChangePage = (page: number) => {
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
  }
  const handleChangeItemsPerPage = (value: string) => {
    searchParams.set('items', value)
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  const handleChangeSearch = (search: string) => {
    if (!search) {
      searchParams.delete('search')
    } else {
      searchParams.set('search', search)
    }
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  const handleChangeCardsCounts = (newValue: number[]) => {
    searchParams.set('min', newValue[0].toString())
    searchParams.set('max', newValue[1].toString())
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  const handleChangeTabValue = (newValue: string) => {
    if (newValue === 'my') {
      searchParams.set('show', newValue)
    } else {
      searchParams.delete('show')
    }
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  const handleClearFilters = () => {
    setSearchParams({})
  }
  const handleChangeSort = (sort: Sort) => {
    if (sort) {
      searchParams.set('sort', `${sort.key}-${sort.direction}`)
    } else {
      searchParams.delete('sort')
    }
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }

  return {
    currentPage,
    handleChangeCardsCounts,
    handleChangeItemsPerPage,
    handleChangePage,
    handleChangeSearch,
    handleChangeSort,
    handleChangeTabValue,
    handleClearFilters,
    itemsPerPage,
    maxCardsCount,
    minCardsCount,
    name,
    orderBy,
    show,
  }
}
