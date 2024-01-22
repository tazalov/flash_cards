import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Arrow } from '@/common/assets/icons'
import { TypographyVariant } from '@/common/enums'
import { Page } from '@/common/ui/Page'
import { Typography } from '@/common/ui/Typography'
import { handleErrorResponse } from '@/common/utils'
import { useLogoutMutation, useMeQuery, useUpdateProfileMutation } from '@/features/auth'
import { PersonalInformation } from '@/features/profile'

import s from './Profile.module.scss'

export const Profile = () => {
  const navigate = useNavigate()

  const [editMode, setEditMode] = useState(false)

  const { data } = useMeQuery()

  const [updateProfile, { isLoading: isLoadUpdate }] = useUpdateProfileMutation()

  const [logout, { isLoading: isLoadLogout }] = useLogoutMutation()

  const handleSubmit = async (body: FormData) => {
    return updateProfile(body).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(`Profile updated`)
        setEditMode(false)
      }
    })
  }

  const [logout, {}] = useLogoutMutation()
  
  const handleLogout = () => {
    logout()
      .unwrap()
      .then(() => navigate('/sign-in'))
  }

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
        editMode={editMode}
        handleLogout={handleLogout}
        handleUpdate={handleSubmit}
        isLoadLogout={isLoadLogout}
        isLoadUpdate={isLoadUpdate}
        setEditMode={setEditMode}
      />
    </Page>
  )
}
