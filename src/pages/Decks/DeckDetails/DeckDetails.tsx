import { useParams } from 'react-router-dom'

import { Arrow } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Page } from '@/common/ui/Page'
import { Pagination } from '@/common/ui/Pagination'
import { TextField } from '@/common/ui/TextField'
import { Typography } from '@/common/ui/Typography'
import { DeckCards, DeckHeader } from '@/features/deck'
import {
  useGetDeckByIdQuery,
  useGetDecksCardsByIdQuery,
} from '@/features/deck/model/services/decks.service'
import { getSortObj } from '@/features/deck/model/utils/getSortObj'

import s from './DeckDetails.module.scss'

import { useDeckDetails } from './useDeckDetails'

export const DeckDetails = () => {
  const { deckId = '' } = useParams()

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
  } = useDeckDetails()

  const { data: deck } = useGetDeckByIdQuery({
    id: deckId,
  })
  const { data, isLoading } = useGetDecksCardsByIdQuery({
    id: deckId,
    params: {
      currentPage: page,
      itemsPerPage,
      orderBy,
      question,
    },
  })
  const isOwner = deck?.userId === 'af85a571-234b-463c-8762-c2e2e5c7970e'
  const isEmpty = deck && deck.cardsCount === 0

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Page mt="24px">
      <div className={s.link} onClick={handleToPreviewPage}>
        <Arrow className={s.iconArrow} />
        <Typography variant={TypographyVariant.body2}>Back to Packs list</Typography>
      </div>
      <DeckHeader className={s.header} isEmpty={isEmpty} isOwner={isOwner} name={deck?.name} />
      {isEmpty ? (
        <div className={s.infoBlock}>
          <Typography className={s.infoText} textAlign="center" variant={TypographyVariant.body2}>
            This pack is empty.{isOwner && ' Click add new card to fill this pack'}
          </Typography>
          {isOwner && <Button>Add New Card</Button>}
        </div>
      ) : (
        <>
          <TextField
            className={s.input}
            onChangeValue={handleChangeQuestion}
            type="search"
            value={question || ''}
          />
          <DeckCards
            className={s.table}
            deckItems={data?.items}
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
