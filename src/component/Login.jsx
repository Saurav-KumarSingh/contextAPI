import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className='m-auto w-2/6 border p-4'>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  className='outline-slate-300 outline outline-offset-1 rounded my-2'/>
        <br />
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password' className='outline-slate-300 outline outline-offset-1 rounded my-2' /> <br />
        <button onClick={handleSubmit} className='bg-blue-700 rounded text-white p-2'>Submit</button>
    </div>
  )
}

export default Login