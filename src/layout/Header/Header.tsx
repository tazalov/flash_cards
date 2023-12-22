import Logo from '@/common/assets/images/logo.png'
import { ProfileData } from '@/common/types'
import { Button } from '@/common/ui/Button'
import cn from 'classnames'

import s from './Header.module.scss'

import { HeaderUser } from './HeaderUser'

interface Props {
  className?: string
  data?: ProfileData
  isAuth: boolean
  logout: () => void
}

export const Header = ({ className, data, isAuth, logout }: Props) => {
  return (
    <div className={cn(s.header, className)}>
      <div className={s.container}>
        <img alt="logo" className={s.logo} src={Logo} />
        {isAuth && data ? <HeaderUser data={data} logout={logout} /> : <Button>Sign In</Button>}
      </div>
    </div>
  )
}
