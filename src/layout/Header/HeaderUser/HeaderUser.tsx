import { useNavigate } from 'react-router-dom'

import { Logout, Person } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { ProfileData } from '@/common/types'
import { Avatar } from '@/common/ui/Avatar'
import { Dropdown } from '@/common/ui/DropDownMenu'
import { Typography } from '@/common/ui/Typography'

import s from './HeaderUser.module.scss'

interface Props {
  data: ProfileData
  logout: () => void
}

export const HeaderUser = ({ data, logout }: Props) => {
  const { avatar, email, username } = data

  const titleNoAvatar = username.slice(0, 1).toUpperCase()

  const navigate = useNavigate()

  const handleNavigateToProfile = () => {
    navigate('/profile')
  }

  return (
    <div className={s.root}>
      <Dropdown.Menu
        align="end"
        sideOffset={10}
        trigger={
          <Typography as="h3" className={s.trigger} variant={TypographyVariant.subtitle1}>
            {username.length > 10 ? username.slice(0, 10) + '...' : username}
          </Typography>
        }
      >
        <Dropdown.Item>
          <div className={s.userInfo}>
            <Avatar size="small" src={avatar} title={titleNoAvatar} />
            <div className={s.info}>
              <Typography variant={TypographyVariant.subtitle1}>
                {username.length > 10 ? username.slice(0, 10) + '...' : username}
              </Typography>
              <Typography className={s.email} variant={TypographyVariant.caption}>
                {email}
              </Typography>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onSelect={handleNavigateToProfile} startIcon={<Person />}>
          <Typography variant={TypographyVariant.caption}>My profile</Typography>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onSelect={logout} startIcon={<Logout />}>
          <Typography variant={TypographyVariant.caption}>Logout</Typography>
        </Dropdown.Item>
      </Dropdown.Menu>
      <Avatar size="small" src={avatar} title={titleNoAvatar} />
    </div>
  )
}
