import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './RadioGroup.module.scss'

import { SingleRadio } from './SingleRadio'

export interface RadioOption {
  disabled?: boolean
  label: string
  value: string
}

export type RadioGroupProps = {
  options: RadioOption[]
} & Omit<ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>, 'asChild'>

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  (props, ref) => {
    const { className, options, ...rest } = props

    return (
      <RadixRadioGroup.Root className={cn(s.radioGroup, className)} {...rest} ref={ref}>
        {options.map((el, index) => (
          <SingleRadio key={index} {...el} />
        ))}
      </RadixRadioGroup.Root>
    )
  }
)
