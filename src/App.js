import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SidebarMenu from './layouts/sidebar 1/SidebarMenu'
import SideBar2 from './layouts/sidebar 2'
import SideBar3 from './layouts/sidebar 3'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SidebarMenu />} />
        <Route path="/sidebar2" element={<SideBar2 />} />
        <Route path="/sidebar3" element={<SideBar3 />} />
      </Routes>
    </>
  )
}

export default App
