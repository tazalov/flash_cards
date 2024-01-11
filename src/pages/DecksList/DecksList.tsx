import { Page } from '@/common/ui/Page'
import { Pagination } from '@/common/ui/Pagination'
import { getSortObj } from '@/common/utils'
import { useMeQuery } from '@/features/auth'
import { DecksFilters, DecksHeader, DecksTable, useGetDecksQuery } from '@/features/deck'

import s from './DecksList.module.scss'

import { useDecksFilters } from './useDecksFilters'

export const DecksList = () => {
  const {
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
  } = useDecksFilters()

  const { data: userData } = useMeQuery()

  const { currentData, data, error, isLoading } = useGetDecksQuery({
    authorId: show === 'my' ? userData?.id : undefined,
    currentPage,
    itemsPerPage,
    maxCardsCount,
    minCardsCount,
    name,
    orderBy,
  })

  if (isLoading) {
    return <div>Loading</div>
  }
  if (error) {
    return <div>error</div>
  }

  const startMaxCardsCount = Number((data && data.maxCardsCount) || maxCardsCount)

  return (
    <Page mt="33px">
      <DecksHeader />
      <DecksFilters
        cardsCounts={[minCardsCount, maxCardsCount ?? startMaxCardsCount]}
        className={s.filters}
        handleChangeCardsCounts={handleChangeCardsCounts}
        handleChangeSearch={handleChangeSearch}
        handleChangeTabValue={handleChangeTabValue}
        handleClearFilters={handleClearFilters}
        max={data?.maxCardsCount}
        searchValue={name}
        tabValue={show}
      />
      <DecksTable
        authId={userData?.id ?? ''}
        className={s.table}
        handleChangeSort={handleChangeSort}
        items={currentData?.items ?? []}
        sort={getSortObj(orderBy)}
      />
      <Pagination
        className={s.pagination}
        currentPage={currentPage}
        onChangePage={handleChangePage}
        onValueChange={handleChangeItemsPerPage}
        options={[
          { title: '5', value: '5' },
          { title: '10', value: '10' },
          { title: '20', value: '20' },
          { title: '30', value: '30' },
          { title: '50', value: '50' },
        ]}
        pageSize={itemsPerPage}
        totalCount={data?.pagination.totalItems ?? 0}
        value={String(itemsPerPage)}
      />
    </Page>
  )
}
