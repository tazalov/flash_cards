import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { ChevronUp } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import * as RadixSelect from '@radix-ui/react-select'
import cn from 'classnames'

import s from './Select.module.scss'

import { SelectItem } from './SelectItem/SelectItem'

export interface Option {
  title: string
  value: string
}

type Props = {
  className?: string
  fullWidth?: boolean
  label?: string
  options: Option[]
  pagination?: boolean
  placeholder?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, Props>(
  (
    {
      className,
      fullWidth,
      label,
      options,
      pagination,
      placeholder = 'Select value...',
      ...restProps
    },
    ref
  ) => {
    //TODO pagination

    const classes = {
      arrow: cn(s.triggerIcon, { [s.disabled]: restProps.disabled }),
      container: s.container,
      label: cn(s.label, { [s.disabled]: restProps.disabled }),
      trigger: cn(s.trigger, { [s.fullWidth]: fullWidth }, className),
    }

    return (
      <RadixSelect.Root {...restProps}>
        {label && (
          <Typography className={classes.label} variant={TypographyVariant.body2}>
            {label}
          </Typography>
        )}
        <RadixSelect.Trigger className={classes.trigger} ref={ref}>
          <Typography variant={TypographyVariant.body1}>
            <RadixSelect.Value placeholder={placeholder} />
          </Typography>
          <RadixSelect.Icon>
            <ChevronUp className={classes.arrow} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={s.content} position="popper" sideOffset={-1}>
            <RadixSelect.Viewport>
              {options.map(el => (
                <SelectItem key={el.value} value={el.value}>
                  {el.title}
                </SelectItem>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    )
  }
)
