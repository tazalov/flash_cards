import { useState } from 'react'

import { TypographyVariant } from '@/common/enums'
import { ProfileData } from '@/common/types'
import { Avatar } from '@/common/ui/Avatar'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './PersonalInformation.module.scss'

import { EditProfileForm } from '../EditProfileForm/EditProfileForm'
import { ProfileInfo } from '../ProfileInfo/ProfileInfo'

interface Props {
  className?: string
  data?: ProfileData
  handleLogout: () => void
  handleUpdate: (data: FormData) => void
}

export const PersonalInformation = ({ className, data, handleLogout, handleUpdate }: Props) => {
  const titleNoAvatar = data?.username.slice(0, 1).toUpperCase() || 'UN'

  const [editMode, setEditMode] = useState(false)

  const handleActiveEditMode = () => setEditMode(true)

  const handleSubmit = (data: FormData) => {
    handleUpdate(data)
    setEditMode(false)
  }

  return (
    <Card className={cn(s.root, className)}>
      <Typography as="h1" className={s.title} variant={TypographyVariant.large}>
        Personal information
      </Typography>
      {editMode ? (
        <EditProfileForm
          avatarUrl={data?.avatar}
          initialValue={data?.username}
          onSubmit={handleSubmit}
        />
      ) : (
        <>
          <Avatar src={data?.avatar} title={titleNoAvatar} />
          <ProfileInfo
            email={data?.email}
            handleActiveEditMode={handleActiveEditMode}
            handleLogout={handleLogout}
            username={data?.username}
          />
        </>
      )}
    </Card>
  )
}
