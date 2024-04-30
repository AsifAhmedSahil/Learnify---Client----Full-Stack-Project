import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Components/Navber/Navber'

const MainLayout = () => {
  return (
    <div>
        <Navber/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
