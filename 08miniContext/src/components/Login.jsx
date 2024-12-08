import React, {useState, useContext} from 'react'
import UserContext from '../contexts/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    let handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div style={{display: 'flex', gap: '5px'}}>
        <input 
        type="text" 
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
        <input 
        type="password" 
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login