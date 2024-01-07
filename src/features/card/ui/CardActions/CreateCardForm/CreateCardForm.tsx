import { ComponentPropsWithoutRef, useState } from 'react'

import { LoadPicture, Trash } from '@/common/assets/icons'
import { ALLOWED_IMAGES_FORMATS, MAX_SIZE_IMAGE } from '@/common/const'
import { ButtonVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { FileUploader } from '@/common/ui/FilesUploader'
import { IconButton } from '@/common/ui/IconButton'
import { ModalClose } from '@/common/ui/Modals/ModalClose'
import { Select } from '@/common/ui/Select'
import { ControlledTextField } from '@/common/ui_controlled/ControlledTextField'
import cn from 'classnames'

import s from './CreateCardForm.module.scss'

import { CreateCardFormData, useCreateCardForm } from '../../../model/hooks/useCreateCardForm'

type Props = {
  isLoading: boolean
  onSubmit: (data: FormData) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

const options = [
  { title: 'Text', value: 'text' },
  { title: 'Image', value: 'image' },
]

export const CreateCardForm = ({ className, isLoading, onSubmit }: Props) => {
  const {
    coverOptions: { answerCover, coverSchema, questionCover, setAnswerCover, setQuestionCover },
    formValues: {
      clearErrors,
      control,
      formState: { errors },
      handleSubmit,
    },
  } = useCreateCardForm()

  const [selectQuestion, setSelectQuestion] = useState(options[0].value)
  const [selectAnswer, setSelectAnswer] = useState(options[0].value)

  const questionIsImage =
    questionCover !== null &&
    ALLOWED_IMAGES_FORMATS.includes(questionCover.type) &&
    questionCover.size <= MAX_SIZE_IMAGE
  const answerIsImage =
    answerCover !== null &&
    ALLOWED_IMAGES_FORMATS.includes(answerCover.type) &&
    answerCover.size <= MAX_SIZE_IMAGE

  if (errors.question?.message && selectQuestion === 'image') {
    setSelectQuestion(options[0].value)
  }
  if (errors.answer?.message && selectAnswer === 'image') {
    setSelectAnswer(options[0].value)
  }

  const handleCreateCard = (formValues: CreateCardFormData) => {
    const formData = new FormData()

    formData.append('question', formValues.question)
    formData.append('answer', formValues.answer)
    questionIsImage && formData.append('questionImg', questionCover)
    answerIsImage && formData.append('answerImg', answerCover)
    onSubmit(formData)
  }

  const handleChangeSelectQuestion = (value: string) => {
    setSelectQuestion(value)
    clearErrors(['question'])
  }
  const handleChangeSelectAnswer = (value: string) => {
    setSelectAnswer(value)
    clearErrors(['answer'])
  }

  return (
    <form className={cn(s.form, className)} onSubmit={handleSubmit(handleCreateCard)}>
      <Select
        className={s.input}
        disabled={isLoading}
        fullWidth
        label="Choose a question format"
        onValueChange={handleChangeSelectQuestion}
        options={options}
        value={selectQuestion}
      />
      {selectQuestion === 'text' ? (
        <ControlledTextField
          className={s.input}
          control={control}
          disabled={isLoading}
          errorText={errors.question?.message}
          label="Question"
          name="question"
        />
      ) : (
        <div className={s.input}>
          {questionIsImage && (
            <div className={s.answerWrapper}>
              <img alt="answer" className={s.image} src={URL.createObjectURL(questionCover)} />
              <IconButton
                className={s.clearCover}
                icon={<Trash />}
                onClick={() => setQuestionCover(null)}
                size={1.5}
                type="button"
              >
                clear
              </IconButton>
            </div>
          )}
          <FileUploader
            disabled={isLoading}
            name="questionImg"
            setFile={setQuestionCover}
            trigger={
              <Button
                as="span"
                fullWidth
                startIcon={<LoadPicture />}
                variant={ButtonVariant.secondary}
              >
                Change cover
              </Button>
            }
            validationSchema={coverSchema}
          />
        </div>
      )}
      <Select
        className={s.input}
        disabled={isLoading}
        fullWidth
        label="Choose a question format"
        onValueChange={handleChangeSelectAnswer}
        options={options}
        value={selectAnswer}
      />
      {selectAnswer === 'text' ? (
        <ControlledTextField
          className={s.input}
          control={control}
          disabled={isLoading}
          errorText={errors.answer?.message}
          label="Answer"
          name="answer"
        />
      ) : (
        <div className={s.input}>
          {answerIsImage && (
            <div className={s.answerWrapper}>
              <img alt="answer" className={s.image} src={URL.createObjectURL(answerCover)} />
              <IconButton
                className={s.clearCover}
                icon={<Trash />}
                onClick={() => setAnswerCover(null)}
                size={1.5}
                type="button"
              >
                clear
              </IconButton>
            </div>
          )}
          <FileUploader
            disabled={isLoading}
            name="answerImg"
            setFile={setAnswerCover}
            trigger={
              <Button
                as="span"
                fullWidth
                startIcon={<LoadPicture />}
                variant={ButtonVariant.secondary}
              >
                Change cover
              </Button>
            }
            validationSchema={coverSchema}
          />
        </div>
      )}
      <div className={s.buttons}>
        <ModalClose>
          <Button disabled={isLoading} type="button" variant={ButtonVariant.secondary}>
            Cancel
          </Button>
        </ModalClose>
        <Button disabled={isLoading} type="submit">
          Add New Card
        </Button>
      </div>
    </form>
  )
}
