import { useTranslation } from 'react-i18next'

import { Edit, Logout } from '@/common/assets/icons'
import { ButtonVariant, TypographyVariant } from '@/common/enums'
import { ProfileData } from '@/common/types'
import { Avatar } from '@/common/ui/Avatar'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { IconButton } from '@/common/ui/IconButton'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './PersonalInformation.module.scss'

import { EditProfileForm } from '../EditProfileForm/EditProfileForm'

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
  const { t } = useTranslation()

  const titleNoAvatar = data?.username.slice(0, 1).toUpperCase() || 'UN'

  const handleActiveEditMode = () => setEditMode(true)

  const handleDeactivateEditMode = () => setEditMode(false)

  return (
    <Card className={cn(s.root, className)}>
      <Typography as="h1" className={s.title} variant={TypographyVariant.large}>
        {t('Profile')}
      </Typography>
      {editMode ? (
        <EditProfileForm
          avatarUrl={data?.avatar}
          disabled={isLoadUpdate}
          handleDeactivateEditMode={handleDeactivateEditMode}
          initialValue={data?.username}
          onSubmit={handleUpdate}
        />
      ) : (
        <>
          <Avatar src={data?.avatar} title={titleNoAvatar} />
          <div className={s.info}>
            <div className={s.username}>
              <Typography as="h3" variant={TypographyVariant.h1}>
                {(data?.username?.length || 0) > 10
                  ? data?.username.slice(0, 10) + '...'
                  : data?.username}
              </Typography>
              <IconButton icon={<Edit />} onClick={handleActiveEditMode} />
            </div>
            <Typography as="div" className={s.email} variant={TypographyVariant.body2}>
              {data?.email}
            </Typography>
            <Button
              disabled={isLoadLogout}
              onClick={handleLogout}
              startIcon={<Logout />}
              variant={ButtonVariant.secondary}
            >
              {t('Logout')}
            </Button>
          </div>
        </>
      )}
    </Card>
  )
}
