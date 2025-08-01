export interface NotificationTypes {
  type: 'error' | 'success' | null
  message: string
}

export interface User {
  approvalStatus: string
  countryCallingCode: string
  deviceType: string
  firstName: string
  middleName: string
  lastName: string
  email: string
  emailVerified: boolean
  enabled: boolean
  firstLoginFlag: string
  userId?: string
  phoneNumber: string
  requestId: string
  role?: string
  termsAccepted: boolean
  otpEnabled: boolean
}

export interface CurrentUserState {
  isFetching: boolean
  user: User | null
  preferences: {
    languages: string
  }
  error: NotificationTypes
  otpIsEnabled: boolean
}

export interface LanguageMenu {
  id: number
  image?: string
  content: string
  title: string
}

export interface ProfileMenu {
  id: number
  name: string
  link: string
  icon: string
}

export interface RootState {
  currentUser: CurrentUserState
}
