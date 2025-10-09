import React from 'react'
import { Route, Routes } from 'react-router'
import homePage from './pages/homePage.jsx'
import createPage from './pages/createPage.jsx'
import notesDetailPage from './pages/notesDetailPage.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<homePage />} />
        <Route path="/create-page" element={<createPage />} />
        <Route path='/note/:id' element={<notesDetailPage />} />
      </Routes>
    </div>
  )
}

export default App