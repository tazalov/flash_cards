import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { TextField } from '@/common/ui/TextField'
import { Typography } from '@/common/ui/Typography'
import * as RadixSlider from '@radix-ui/react-slider'
import cn from 'classnames'

import s from './Slider.module.scss'

type Props = {
  isInputControl?: boolean
} & ComponentPropsWithoutRef<typeof RadixSlider.Root>

export const Slider = forwardRef<ElementRef<typeof RadixSlider.Root>, Props>((props, ref) => {
  const { className, isInputControl = true, onValueChange, value, ...restProps } = props

  const handleChangeValue =
    (valueCategory: 'max' | 'min') => (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = +e.currentTarget.value
      const currentIndex = valueCategory === 'min' ? 0 : 1

      const isMinChanged =
        value &&
        valueCategory === 'min' &&
        (restProps.min || restProps.min === 0) &&
        newValue >= restProps.min &&
        newValue <= value[1]
      const isMaxChanged =
        value &&
        valueCategory === 'max' &&
        restProps.max &&
        newValue <= restProps.max &&
        newValue >= value[0]

      if (isMaxChanged || isMinChanged) {
        onValueChange &&
          onValueChange(value.map((v, index) => (index === currentIndex ? newValue : v)))
      }
    }

  return (
    <div className={cn(s.wrapper, className)}>
      <Typography as="span" className={s.labels}>
        {isInputControl ? (
          <TextField
            className={s.textField}
            inputClassName={s.input}
            onChange={handleChangeValue('min')}
            type="number"
            value={value?.[0].toString()}
          />
        ) : (
          value?.[0]
        )}
      </Typography>
      <RadixSlider.Root
        className={s.root}
        onValueChange={onValueChange}
        ref={ref}
        value={value}
        {...restProps}
      >
        <RadixSlider.Track className={s.track}>
          <RadixSlider.Range className={s.range} />
        </RadixSlider.Track>
        {value?.map((_, index) => <RadixSlider.Thumb className={s.thumb} key={index} />)}
      </RadixSlider.Root>
      <Typography as="span" className={s.labels}>
        {isInputControl ? (
          <TextField
            className={s.textField}
            inputClassName={s.input}
            onChange={handleChangeValue('max')}
            type="number"
            value={value?.[1].toString()}
          />
        ) : (
          value?.[1]
        )}
      </Typography>
    </div>
  )
})
