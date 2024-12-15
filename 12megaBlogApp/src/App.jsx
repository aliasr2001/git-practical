import {useState, useEffect } from 'react'
import './App.css'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './components'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
  })
    .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-700'>
      <div className='w-full block'>
        <Header />
        <main>
        <h1>Hi I'm Blog App using Appwrite</h1>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
