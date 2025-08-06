import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default DashboardLayout