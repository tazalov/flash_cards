import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Arrow } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Page } from '@/common/ui/Page'
import { Preloader } from '@/common/ui/Preloader'
import { Typography } from '@/common/ui/Typography'
import {
  CardBody,
  CardBodySkeleton,
  Rate,
  useChangeGradeCardMutation,
  useGetRandomCardQuery,
} from '@/features/card'

import s from './Learn.module.scss'

export const Learn = () => {
  const { deckId = '', deckName } = useParams()

  const navigate = useNavigate()

  const [hideAnswer, setHideAnswer] = useState(true)

  const { data, isLoading: isLoadRandomCard } = useGetRandomCardQuery({ id: deckId })

  const [changeGrade, { isLoading }] = useChangeGradeCardMutation()

  const handleSubmitGrade = (formData: Rate) => {
    changeGrade({ cardId: data!.id, deckId, grade: Number(formData.grade) })
      .unwrap()
      .then(() => setHideAnswer(true))
  }

  const handleShowAnswer = () => setHideAnswer(false)

  if (isLoadRandomCard) {
    return <Preloader size={100} />
  }

  return (
    <Page mt="24px">
      <div className={s.link} onClick={() => navigate(-1)}>
        <Arrow className={s.iconArrow} />
        <Typography variant={TypographyVariant.body2}>Back to previous page</Typography>
      </div>
      {isLoading ? (
        <CardBodySkeleton />
      ) : (
        <CardBody
          card={data}
          deckName={deckName}
          disabled={isLoading}
          handleShowAnswer={handleShowAnswer}
          hideAnswer={hideAnswer}
          onSubmit={handleSubmitGrade}
        />
      )}
    </Page>
  )
}
