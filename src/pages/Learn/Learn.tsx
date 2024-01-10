import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Page } from '@/common/ui/Page'
import { CardBody, Rate, useChangeGradeCardMutation, useGetRandomCardQuery } from '@/features/card'

export const Learn = () => {
  const { deckId = '', deckName } = useParams()

  const [hideAnswer, setHideAnswer] = useState(true)

  const { data } = useGetRandomCardQuery({ id: deckId })

  const [changeGrade, { isLoading }] = useChangeGradeCardMutation()

  const handleSubmitGrade = (formData: Rate) => {
    changeGrade({ cardId: data!.id, deckId, grade: Number(formData.grade) })
      .unwrap()
      .then(() => setHideAnswer(true))
  }

  const handleShowAnswer = () => setHideAnswer(false)

  return (
    <Page mt="24px">
      <CardBody
        card={data}
        deckName={deckName}
        disabled={isLoading}
        handleShowAnswer={handleShowAnswer}
        hideAnswer={hideAnswer}
        onSubmit={handleSubmitGrade}
      />
    </Page>
  )
}
