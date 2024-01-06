import { Page } from '@/common/ui/Page'
import { useLogoutMutation, useMeQuery } from '@/features/auth'
import { PersonalInformation, useUpdateProfileMutation } from '@/features/profile'

export const Profile = () => {
  const { data } = useMeQuery()

  const [updateProfile, {}] = useUpdateProfileMutation()

  const [logout, {}] = useLogoutMutation()

  return (
    <Page>
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
