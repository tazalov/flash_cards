import { useTranslation } from 'react-i18next'

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
  disabled?: boolean
  handleShowAnswer: () => void
  hideAnswer: boolean
  onSubmit: (data: Rate) => void
}

export const CardBody = ({
  card,
  className,
  deckName,
  disabled,
  handleShowAnswer,
  hideAnswer,
  onSubmit,
}: Props) => {
  const { t } = useTranslation()

  return (
    <Card className={cn(s.root, className)}>
      <Typography as="h2" className={s.title} variant={TypographyVariant.large}>
        {t('Learn')} &quot;{deckName}&quot;
      </Typography>
      <Typography as="h3" variant={TypographyVariant.body1}>
        <b>{t('Question')}:</b> {card?.question}
      </Typography>
      {card?.questionImg && <img alt="question" className={s.img} src={card.questionImg} />}
      <Typography as="h3" className={s.shots} textAlign="left" variant={TypographyVariant.body2}>
        {t('Number of attempts')}: <b>{card?.shots}</b>
      </Typography>
      {hideAnswer ? (
        <Button fullWidth onClick={handleShowAnswer}>
          {t('Show answer')}
        </Button>
      ) : (
        <>
          <Typography as="h3" className={s.answer} variant={TypographyVariant.body1}>
            <b>{t('Answer')}:</b> {card?.answer}
          </Typography>
          {card?.answerImg && <img alt="answer" className={s.img} src={card.answerImg} />}
          <Typography as="h3" className={s.answer} variant={TypographyVariant.body1}>
            <b>{t('Rate yourself')}:</b>
          </Typography>
          <ChangeGradeCardForm disabled={disabled} onSubmit={onSubmit} />
        </>
      )}
    </Card>
  )
}
