import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { BackToPreviousPage } from '@/common/ui/BackToPreviusPage'
import { Page } from '@/common/ui/Page'
import { handleErrorResponse } from '@/common/utils'
import { useLogoutMutation, useMeQuery, useUpdateProfileMutation } from '@/features/auth'
import { PersonalInformation } from '@/features/profile'

export const Profile = () => {
  const navigate = useNavigate()

  const { t } = useTranslation()

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

  const handleLogout = () => {
    logout()
      .unwrap()
      .then(() => navigate('/sign-in'))
  }

  return (
    <Page>
      <BackToPreviousPage handleNavigate={() => navigate(-1)} title={t('Back to previous page')} />
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
