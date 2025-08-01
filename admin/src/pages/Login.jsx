import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setAToken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', {
          email,
          password
        })

        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
          toast.success('Login Successful')
        } else {
          toast.error(data.message)
        }
      } else {
        // Doctor login handle এখানে করো
        toast.info('Doctor login not implemented yet.')
      }
    } catch (error) {
      toast.error('Login failed. Please check credentials.')
      console.error(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <p>
          <span>{state}</span> Login
        </p>
        <div>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
        </div>
        <div>
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
        </div>
        <button type="submit">Login</button>

        {state === 'Admin' ? (
          <p>
            Doctor Login?{' '}
            <span onClick={() => setState('Doctor')}>Click here</span>
          </p>
        ) : (
          <p>
            Admin Login?{' '}
            <span onClick={() => setState('Admin')}>Click here</span>
          </p>
        )}
      </div>
    </form>
  )
}

export default Login

