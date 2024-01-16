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
  editMode: boolean
  handleLogout: () => void
  handleUpdate: (data: FormData) => void
  isLoadLogout: boolean
  isLoadUpdate: boolean
  setEditMode: (mode: boolean) => void
}

export const PersonalInformation = ({
  className,
  data,
  editMode,
  handleLogout,
  handleUpdate,
  isLoadLogout,
  isLoadUpdate,
  setEditMode,
}: Props) => {
  const titleNoAvatar = data?.username.slice(0, 1).toUpperCase() || 'UN'

  const handleActiveEditMode = () => setEditMode(true)

  const handleDeactivateEditMode = () => setEditMode(false)

  return (
    <Card className={cn(s.root, className)}>
      <Typography as="h1" className={s.title} variant={TypographyVariant.large}>
        Profile
      </Typography>
      {editMode ? (
        <EditProfileForm
          avatarUrl={data?.avatar}
          handleDeactivateEditMode={handleDeactivateEditMode}
          initialValue={data?.username}
          isLoading={isLoadUpdate}
          onSubmit={handleUpdate}
        />
      ) : (
        <>
          <Avatar src={data?.avatar} title={titleNoAvatar} />
          <ProfileInfo
            email={data?.email}
            handleActiveEditMode={handleActiveEditMode}
            handleLogout={handleLogout}
            isLoading={isLoadLogout}
            username={data?.username}
          />
        </>
      )}
    </Card>
  )
}
