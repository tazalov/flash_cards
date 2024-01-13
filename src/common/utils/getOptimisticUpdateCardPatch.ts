import { Card } from '@/features/card'

export const getOptimisticUpdateCardPatch = (body: FormData, card: Card) => {
  const question = body.get('question')
  const answer = body.get('answer')
  const questionImgFormData = body.get('questionImg')
  let questionImg: null | string
  const answerImgFormData = body.get('answerImg')
  let answerImg: null | string

  switch (questionImgFormData) {
    case null:
      questionImg = card.questionImg
      break
    case '':
      questionImg = null
      break
    default:
      questionImg = URL.createObjectURL(questionImgFormData as File)
  }

  switch (answerImgFormData) {
    case null:
      answerImg = card.answerImg
      break
    case '':
      answerImg = null
      break
    default:
      answerImg = URL.createObjectURL(answerImgFormData as File)
  }

  return { answer, answerImg, question, questionImg }
}
