import { Edit, Logout } from '@/common/assets/icons'
import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'
import { IconButton } from '@/common/ui/IconButton'
import { Typography } from '@/common/ui/Typography'

import s from './ProfileInfo.module.scss'

interface Props {
  email: string
  handleActiveEditMode: () => void
  handleLogout: () => void
  username: string
}

export const ProfileInfo = ({ email, handleActiveEditMode, handleLogout, username }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.username}>
        <Typography as="h3" variant={TypographyVariant.h1}>
          {username}
        </Typography>
        <IconButton icon={<Edit />} onClick={handleActiveEditMode} />
      </div>
      <Typography as="div" className={s.email} variant={TypographyVariant.body2}>
        {email}
      </Typography>
      <Button onClick={handleLogout} startIcon={<Logout />} variant={ButtonVariant.secondary}>
        Logout
      </Button>
    </div>
  )
}
