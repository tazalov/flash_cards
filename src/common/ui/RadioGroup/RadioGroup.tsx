import { ComponentPropsWithoutRef } from 'react'

import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import cn from 'classnames'

import s from './RadioGroup.module.scss'

import { SingleRadio, SingleRadioProps } from './SingleRadio'

type Props = {
  options: SingleRadioProps[]
} & Omit<ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>, 'asChild'>

export const RadioGroup = ({ className, options, ...rest }: Props) => {
  return (
    <RadixRadioGroup.Root className={cn(s.radioGroup, className)} {...rest}>
      {options.map((el, index) => (
        <SingleRadio key={index} {...el} />
      ))}
    </RadixRadioGroup.Root>
  )
}
