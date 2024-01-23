import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { TypographyVariant } from '@/common/enums'
import { useDebounce } from '@/common/hooks/useDebounce'
import { BackToPreviousPage } from '@/common/ui/BackToPreviusPage'
import { Page } from '@/common/ui/Page'
import { Pagination } from '@/common/ui/Pagination'
import { Preloader } from '@/common/ui/Preloader'
import { TextField } from '@/common/ui/TextField'
import { Typography } from '@/common/ui/Typography'
import { getSortObj } from '@/common/utils'
import { useMeQuery } from '@/features/auth'
import { CardsHeader, CardsTable, CreateCardModal, useGetCardsByIdQuery } from '@/features/card'
import { useGetDeckByIdQuery } from '@/features/deck'
import { Deck } from '@/features/deck/model/types/decks.types'
import cn from 'classnames'

import s from './CardsList.module.scss'

import { useCardsList } from './useCardsList'

export const CardsList = () => {
  const { deckId = '' } = useParams()
  const { data: userData } = useMeQuery()

  const {
    handleChangeItemsPerPage,
    handleChangePage,
    handleChangeQuestion,
    handleChangeSort,
    handleToPreviewPage,
    itemsPerPage,
    orderBy,
    page,
    question,
  } = useCardsList()

  const debounceQuestion = useDebounce(question)

  const { t } = useTranslation()

  const { data: deck } = useGetDeckByIdQuery({
    id: deckId,
  })

  const { data, isFetching, isLoading } = useGetCardsByIdQuery({
    id: deckId,
    params: {
      currentPage: page,
      itemsPerPage,
      orderBy,
      question: debounceQuestion,
    },
  })

  const isOwner = deck?.userId === userData?.id
  const isEmpty = deck && deck.cardsCount === 0

  if (isLoading) {
    return <Preloader size={100} />
  }

  return (
    <Page mt="24px">
      <BackToPreviousPage handleNavigate={handleToPreviewPage} title={t('Back to Decks list')} />
      <CardsHeader
        className={s.item}
        deck={deck || ({} as Deck)}
        deckId={deckId}
        isEmpty={isEmpty}
        isOwner={isOwner}
      />
      {isEmpty ? (
        <div className={s.infoBlock}>
          <Typography className={s.infoText} textAlign="center" variant={TypographyVariant.body2}>
            {t('This deck is empty') +
              (isOwner ? '. ' + t('Click add new card to fill this deck') : '')}
          </Typography>
          {isOwner && <CreateCardModal deckId={deckId} />}
        </div>
      ) : (
        <>
          <TextField
            className={s.item}
            disabled={isFetching}
            onChangeValue={handleChangeQuestion}
            type="search"
            value={question || ''}
          />
          <div className={cn(s.item, s.tableContainer)}>
            <CardsTable
              className={s.table}
              currentPage={page}
              deckItems={data?.items ?? []}
              handleChangePage={handleChangePage}
              handleChangeSort={handleChangeSort}
              isLoading={isFetching}
              isOwner={isOwner}
              itemsPerPage={itemsPerPage}
              sort={getSortObj(orderBy)}
            />
          </div>
          <Pagination
            className={s.pagination}
            currentPage={page}
            onChangePage={handleChangePage}
            onValueChange={handleChangeItemsPerPage}
            options={[
              { title: '5', value: '5' },
              { title: '10', value: '10' },
              { title: '20', value: '20' },
              { title: '30', value: '30' },
            ]}
            pageSize={itemsPerPage}
            totalCount={data?.pagination.totalItems ?? 0}
            value={itemsPerPage.toString()}
          />
        </>
      )}
    </Page>
  )
}
