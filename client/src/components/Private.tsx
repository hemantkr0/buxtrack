import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from './../context/userContext'

const Private: React.FC = () => {
  const { user } = useContext(UserContext)

  return user ? <Outlet /> : <Navigate to="/login" replace />
}
export default Private
