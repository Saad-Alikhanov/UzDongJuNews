// LogoutButton.js
import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const LogoutButton = () => {
  const { logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      // Redirect or show a logout success message
    } catch (error) {
      console.error('Error logging out: ', error)
      // Handle logout error
    }
  }

  return <button onClick={handleLogout}>Logout</button>
}

export default LogoutButton
