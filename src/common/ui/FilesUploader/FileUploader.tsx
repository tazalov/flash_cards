import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import { ZodEffects, ZodError } from 'zod'

import s from './FileUploader.module.scss'

type Props = {
  setFile: (file: File) => void
  trigger: ReactNode
  validationSchema: ZodEffects<any>
} & ComponentPropsWithoutRef<'input'>

export const FileUploader = forwardRef<ElementRef<'input'>, Props>(
  ({ setFile, trigger, validationSchema, ...rest }, ref) => {
    const [error, setError] = useState<null | string>(null)

    const handleChangeCover = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
        setFile(e.target.files[0])
      }

      try {
        const file = e.target.files?.[0]

        validationSchema.parse(file)
        if (file) {
          setFile(file)
          setError(null)
        }
      } catch (e) {
        const error = e as Error | ZodError

        if (error instanceof ZodError) {
          setError('Validate error: ' + error.errors[0].message)
        } else {
          setError('Native error: ' + error.message)
        }
      }
    }

    return (
      <Typography as="label" htmlFor="cover" variant={TypographyVariant.caption}>
        {trigger}
        <input
          className={s.input}
          id="cover"
          onChange={handleChangeCover}
          ref={ref}
          type="file"
          {...rest}
        />
        <Typography as="span" className={s.error} variant={TypographyVariant.caption}>
          {error}
        </Typography>
      </Typography>
    )
  }
)
