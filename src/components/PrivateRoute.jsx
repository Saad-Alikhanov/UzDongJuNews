// PrivateRoute.js
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = () => {
  const { currentUser, isAdmin } = useAuth()

  return currentUser && isAdmin() ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
