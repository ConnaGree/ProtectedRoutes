import React from 'react'
import { Outlet, Navigate, useResolvedPath } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutes = () => {

    const {isLoggedIn, user} = useSelector(state => state.user)
    console.log("From protected routes", isLoggedIn, user)
  return (
    isLoggedIn ? <Outlet user={user} /> : <Navigate to="/login" />
  )
}

export default ProtectedRoutes