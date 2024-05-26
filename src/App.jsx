// App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import AdminPage from './components/AdminPage'
import LoginPage from './components/LoginPage'
import { AuthProvider } from './contexts/AuthContext'
import LogoutButton from './components/LogoutButton'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <LogoutButton />
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/login' component={LoginPage} />
            <PrivateRoute path='/admin' component={AdminPage} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
