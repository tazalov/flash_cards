import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import cn from 'classnames'

import s from './Separator.module.scss'

interface Props {
  className?: string
}

export const Separator = ({ className }: Props) => {
  return <RadixDropdown.Separator className={cn(s.separator, className)} />
}
