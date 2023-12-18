import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { SelectProps } from '@/common/ui/Select'
import { Select } from '@radix-ui/react-select'

type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<SelectProps, 'onValueChange' | 'value'>
export const ControlledSelect = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...selectProps
}: ControlledSelectProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue, name, rules, shouldUnregister })

  return <Select onValueChange={onChange} value={value} {...selectProps} />
}
