import type { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import authService from '../Services/authServices'

const ProtectedRoutes: FC = () => {
    const token = authService.getToken()
    return token ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes