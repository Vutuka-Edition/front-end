import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const TOKEN_KEY = 'user'
const TEMPORARY_KEY = 'email'
const LANGUAGE_KEY = 'language'

const authService = {
  getToken: () => {
    const accessToken = Cookies.get(TOKEN_KEY)
    if (accessToken) {
      const accessTokenJSON = JSON.parse(accessToken)
      return accessTokenJSON?.access_token
    }
    return null
  },
  
  getRefreshToken: () => {
    const accessToken = Cookies.get(TOKEN_KEY)
    if (accessToken) {
      const accessTokenJSON = JSON.parse(accessToken)
      return accessTokenJSON?.refresh_token
    }
    return null
  },

  getTemporaryToken: () => {
    return Cookies.get(TEMPORARY_KEY)
  },

  getLanguage: () => {
    return Cookies.get(LANGUAGE_KEY)
  },

  setToken: (token: string) => {
    Cookies.set(TOKEN_KEY, token, { expires: 1 })
  },

  setTemporaryToken: (token: string) => {
    Cookies.set(TEMPORARY_KEY, token, { expires: 1 })
  },

  setLanguage: (language: string) => {
    Cookies.set(LANGUAGE_KEY, language)
  },

  removeToken: () => {
    Cookies.remove(TOKEN_KEY)
  },

  removeTemporaryToken: () => {
    Cookies.remove(TEMPORARY_KEY)
  },

  isTokenAboutExpired: () => {
    const token = authService.getToken()
    if (token) {
      try {
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000
        const earlyExpiryOffset = 5 * 60;
        return decoded?.exp ? (decoded.exp - earlyExpiryOffset) < currentTime : true
      } catch {
        return true
      }
    }
    return true
  },

  isTokenExpired: () => {
    const token = authService.getToken()
    if (token) {
      try {
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000
        return decoded?.exp ? decoded.exp < currentTime : true
      } catch {
        return true
      }
    }
    return true
  },
}

export default authService