import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { setNavigator } from '../Services/navigateService'
import Home from '../Pages/Home'


const AppRoutes: React.FC = () => {
    const navigate = useNavigate()
  
    useEffect(() => {
      setNavigator(navigate)
    }, [])
  
    return (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default AppRoutes