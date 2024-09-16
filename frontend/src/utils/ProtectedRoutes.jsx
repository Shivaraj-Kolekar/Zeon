import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function ProtectedRoutes () {
  const user = localStorage.getItem('token')
  if (!user) {
    return <Navigate to='/login' />
  }
  return <Outlet />
}

export default ProtectedRoutes
