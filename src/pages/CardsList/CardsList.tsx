import { useParams } from 'react-router-dom'

import { Arrow } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Page } from '@/common/ui/Page'
import { Pagination } from '@/common/ui/Pagination'
import { TextField } from '@/common/ui/TextField'
import { Typography } from '@/common/ui/Typography'
import { getSortObj } from '@/common/utils'
import { useMeQuery } from '@/features/auth'
import { CardsHeader, CardsTable, CreateCardModal, useGetCardsByIdQuery } from '@/features/card'
import { useGetDeckByIdQuery } from '@/features/deck'
import { Deck } from '@/features/deck/model/types/decks.types'

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

  const { data: deck } = useGetDeckByIdQuery({
    id: deckId,
  })

  const { data, isLoading } = useGetCardsByIdQuery({
    id: deckId,
    params: {
      currentPage: page,
      itemsPerPage,
      orderBy,
      question,
    },
  })

  const isOwner = deck?.userId === userData?.id
  const isEmpty = deck && deck.cardsCount === 0

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Page mt="24px">
      <div className={s.link} onClick={handleToPreviewPage}>
        <Arrow className={s.iconArrow} />
        <Typography variant={TypographyVariant.body2}>Back to Decks list</Typography>
      </div>
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
            This deck is empty.{isOwner && ' Click add new card to fill this deck'}
          </Typography>
          {isOwner && <CreateCardModal deckId={deckId} />}
        </div>
      ) : (
        <>
          <TextField
            className={s.item}
            onChangeValue={handleChangeQuestion}
            type="search"
            value={question || ''}
          />
          <CardsTable
            className={s.item}
            currentPage={page}
            deckItems={data?.items ?? []}
            handleChangePage={handleChangePage}
            handleChangeSort={handleChangeSort}
            isOwner={isOwner}
            sort={getSortObj(orderBy)}
          />
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
              { title: '50', value: '50' },
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
