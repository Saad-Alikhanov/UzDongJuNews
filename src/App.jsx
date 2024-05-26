import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Login from './components/Login'
import Signup from './components/Signup'
import VideoPostList from './components/VideoPostList'
import VideoPostForm from './components/VideoPostForm'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<VideoPostList />} />
            <Route path='/create' element={<VideoPostForm />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
