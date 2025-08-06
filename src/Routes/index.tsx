import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { setNavigator } from '../Services/navigateService'
import MainLayout from '../Layouts/Main/MainLayout'
import DashboardLayout from '../Layouts/Dashboard/DashboardLayout'

import Home from '../Pages/Home'
import Books from '../Pages/Books'

import DashboardHome from '../Pages/DashboardHome'


const AppRoutes: React.FC = () => {
  const navigate = useNavigate()
  
    useEffect(() => {
      setNavigator(navigate)
    }, [])
  
    return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardHome />} />
      </Route>
    </Routes>
    )
}

export default AppRoutes