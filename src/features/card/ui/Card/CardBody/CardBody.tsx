import { TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './CardBody.module.scss'

import { Card as CardObj, Rate } from '../../../model/types/cards.types'
import { ChangeGradeCardForm } from '../../CardActions/ChangeGradeCardForm/ChangeGradeCardForm'

interface Props {
  card?: CardObj
  className?: string
  deckName?: string
  handleShowAnswer: () => void
  hideAnswer: boolean
  onSubmit: (data: Rate) => void
}

export const CardBody = ({
  card,
  className,
  deckName,
  handleShowAnswer,
  hideAnswer,
  onSubmit,
}: Props) => {
  return (
    <Card className={cn(s.root, className)}>
      <Typography as="h2" className={s.title} variant={TypographyVariant.large}>
        Learn &quot;{deckName}&quot;
      </Typography>
      <Typography as="h3" textAlign="left" variant={TypographyVariant.body1}>
        <b>Question:</b> {card?.question}
      </Typography>
      <Typography as="h3" className={s.shots} textAlign="left" variant={TypographyVariant.body2}>
        The number of attempts to answer the question: <b>{card?.shots}</b>
      </Typography>
      {hideAnswer ? (
        <Button fullWidth onClick={handleShowAnswer}>
          Show answer
        </Button>
      ) : (
        <>
          <Typography
            as="h3"
            className={s.answer}
            textAlign="left"
            variant={TypographyVariant.body1}
          >
            <b>Answer:</b> {card?.answer}
          </Typography>{' '}
          <Typography
            as="h3"
            className={s.answer}
            textAlign="left"
            variant={TypographyVariant.body1}
          >
            <b>Rate yourself:</b>
          </Typography>
          <ChangeGradeCardForm onSubmit={onSubmit} />
        </>
      )}
    </Card>
  )
}
