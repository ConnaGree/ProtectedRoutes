import React from 'react'
import { Outlet, Navigate, useResolvedPath } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoutes = () => {

    const {isLoggedIn} = useSelector(state => state.user)
    console.log("From protected routes", isLoggedIn)
  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/login" />
  )
}

export default ProtectedRoutes