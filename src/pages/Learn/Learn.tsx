import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { BackToPreviousPage } from '@/common/ui/BackToPreviusPage'
import { Page } from '@/common/ui/Page'
import { Preloader } from '@/common/ui/Preloader'
import {
  CardBody,
  CardBodySkeleton,
  Rate,
  useChangeGradeCardMutation,
  useGetRandomCardQuery,
} from '@/features/card'

export const Learn = () => {
  const { deckId = '', deckName } = useParams()
  const { t } = useTranslation()

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
    changeGrade({ cardId: data!.id, deckId, grade: Number(formData.grade) }).then(res => {
      if ('data' in res) {
        toast.success(t('Grade has been successfully counted!'))
        setHideAnswer(true)
      }
    })
  }

  const handleShowAnswer = () => setHideAnswer(false)

  if (isLoadRandomCard) {
    return <Preloader size={100} />
  }
  const handleToPreviewPage = () => {
    navigate(-1)
  }

  return (
    <Page mt="24px">
      <BackToPreviousPage handleNavigate={handleToPreviewPage} title={t('Back to previous page')} />
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
