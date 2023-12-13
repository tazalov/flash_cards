import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { ChevronUp } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Typography } from '@/common/ui/Typography'
import * as RadixSelect from '@radix-ui/react-select'
import cn from 'classnames'

import s from './Select.module.scss'

import { SelectItem } from './SelectItem'

export interface Option {
  title: ReactNode
  value: string
}

export type SelectProps = {
  className?: string
  fullWidth?: boolean
  label?: string
  options: Option[]
  pagination?: boolean
  placeholder?: ReactNode
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(
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
    const textVariant = pagination ? TypographyVariant.body2 : TypographyVariant.body1

    const classes = {
      arrow: cn(s.triggerIcon, { [s.disabled]: restProps.disabled }),
      label: cn(s.label, { [s.disabled]: restProps.disabled }),
      trigger: cn(
        s.trigger,
        {
          [s.fullWidth]: fullWidth,
          [s.paginationTrigger]: pagination,
        },
        className
      ),
    }

    return (
      <RadixSelect.Root {...restProps}>
        {label && (
          <Typography className={classes.label} variant={TypographyVariant.body2}>
            {label}
          </Typography>
        )}
        <RadixSelect.Trigger className={classes.trigger} ref={ref}>
          <Typography as="p" variant={textVariant}>
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
                <SelectItem
                  key={el.value}
                  pagination={pagination}
                  value={el.value}
                  variant={textVariant}
                >
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
