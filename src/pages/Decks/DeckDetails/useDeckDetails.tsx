import { useEffect } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { Sort } from '@/common/types'

export const useDeckDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { state } = useLocation()

  const navigate = useNavigate()

  const orderBy = searchParams.get('sort') || undefined

  const itemsPerPage = Number(searchParams.get('items')) || 10
  const page = Number(searchParams.get('page')) || 1
  const question = searchParams.get('question') || undefined

  const handleChangePage = (page: number) => {
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
  }
  const handleChangeQuestion = (question: string) => {
    if (question) {
      searchParams.set('question', question)
    } else {
      searchParams.delete('question')
    }
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }
  const handleChangeItemsPerPage = (items: string) => {
    searchParams.set('items', items)
    searchParams.set('page', '1')
    setSearchParams(searchParams)
  }

  const handleToPreviewPage = () => {
    setSearchParams({})
    const prevUrl = localStorage.getItem('prevUrl')

    navigate(prevUrl ?? '/')
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

  // useEffect(() => {
  //   localStorage.setItem('prevUrl', `/${state.search}`)
  //
  //   // return () => {
  //   //   localStorage.removeItem('prevUrl')
  //   // }
  // }, [])

  return {
    handleChangeItemsPerPage,
    handleChangePage,
    handleChangeQuestion,
    handleChangeSort,
    handleToPreviewPage,
    itemsPerPage,
    orderBy,
    page,
    question,
  }
}
