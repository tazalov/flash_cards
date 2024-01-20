import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Arrow } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Page } from '@/common/ui/Page'
import { Preloader } from '@/common/ui/Preloader'
import { Typography } from '@/common/ui/Typography'
import { handleErrorResponse } from '@/common/utils'
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

  const {
    data,
    isError: isErrorGetCard,
    isLoading: isLoadRandomCard,
  } = useGetRandomCardQuery({ id: deckId })

  const [changeGrade, { isError: isErrorChangeGrade, isLoading: isLoadChangeGrade }] =
    useChangeGradeCardMutation()

  const handleSubmitGrade = (formData: Rate) => {
    changeGrade({ cardId: data!.id, deckId, grade: Number(formData.grade) }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(`Grade has been successfully counted!`)
        setHideAnswer(true)
      }
    })
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
      {isLoadChangeGrade || isErrorGetCard || isErrorChangeGrade ? (
        <CardBodySkeleton />
      ) : (
        <CardBody
          card={data}
          deckName={deckName}
          disabled={isLoadChangeGrade}
          handleShowAnswer={handleShowAnswer}
          hideAnswer={hideAnswer}
          onSubmit={handleSubmitGrade}
        />
      )}
    </Page>
  )
}
