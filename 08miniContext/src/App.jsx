import UserContextProvider from './contexts/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Context with React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
