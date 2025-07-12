import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    console.log({
      name,
      email,
      password
    })
    
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <p>{state === 'sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'sign Up' ? "sign up" : "log in"} to book appointment</p>

        {state === "sign Up" && (
          <div>
            <p>Full Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your name"
            />
          </div>
        )}

        <div>
          <p>Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">
          {state === 'sign Up' ? "Create Account" : "Login"}
        </button>

        {
          state === "sign Up"
            ? <p>Already have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setState('Login')}>Login here</span></p>
            : <p>Don't have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setState('sign Up')}>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
