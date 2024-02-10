import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserBook from './components/UserBook'


function App() {
  const {authIsReady, user} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route 
              exact path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} />
            <Route 
              exact path="/mybooks" 
              element={user ? <UserBook /> : <Navigate to="/login" />} />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
