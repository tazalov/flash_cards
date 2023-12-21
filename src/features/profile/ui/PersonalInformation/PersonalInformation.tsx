import { useState } from 'react'

import { TypographyVariant } from '@/common/enums'
import { ProfileData } from '@/common/types'
import { Avatar } from '@/common/ui/Avatar'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './PersonalInformation.module.scss'

import { EditProfileForm, EditProfileValues } from '../EditProfileForm'
import { ProfileInfo } from '../ProfileInfo'

interface Props {
  className?: string
  data: ProfileData
  handleLogout: () => void
  handleUpdate: (data: EditProfileValues) => void
}

export const PersonalInformation = ({ className, data, handleLogout, handleUpdate }: Props) => {
  const { avatar, email, username } = data

  const titleNoAvatar = username.slice(0, 1).toUpperCase()

  const [editMode, setEditMode] = useState(false)

  const handleActiveEditMode = () => setEditMode(true)

  const handleSubmit = (data: EditProfileValues) => {
    handleUpdate(data)
    setEditMode(false)
  }

  return (
    <Card className={cn(s.root, className)}>
      <Typography as="h1" className={s.title} variant={TypographyVariant.large}>
        Personal information
      </Typography>
      <Avatar src={avatar} title={titleNoAvatar} />
      {editMode ? (
        <EditProfileForm initialValue={username} onSubmit={handleSubmit} />
      ) : (
        <ProfileInfo
          email={email}
          handleActiveEditMode={handleActiveEditMode}
          handleLogout={handleLogout}
          username={username}
        />
      )}
    </Card>
  )
}
