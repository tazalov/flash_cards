import { useNavigate } from 'react-router-dom'

import { Arrow } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Page } from '@/common/ui/Page'
import { Typography } from '@/common/ui/Typography'
import { useLogoutMutation, useMeQuery } from '@/features/auth'
import { PersonalInformation, useUpdateProfileMutation } from '@/features/profile'

import s from './Profile.module.scss'

export const Profile = () => {
  const navigate = useNavigate()

  const { data } = useMeQuery()

  const [updateProfile, {}] = useUpdateProfileMutation()

  const [logout, {}] = useLogoutMutation()

  return (
    <Page>
      <div className={s.link} onClick={() => navigate(-1)}>
        <Arrow className={s.iconArrow} />
        <Typography variant={TypographyVariant.body2}>Back to previous page</Typography>
      </div>
      <PersonalInformation
        data={
          data && {
            avatar: data.avatar,
            email: data.email,
            username: data.name,
          }
        }
        handleLogout={logout}
        handleUpdate={updateProfile}
      />
    </Page>
  )
}
