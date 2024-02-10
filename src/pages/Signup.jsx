import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import styles from './Signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const {error, signup} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }
  
  return (
    <div>
      
      <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Signup</h2>
        <label>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email'
          />
        </label>
        <label>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
          />
        </label>
        <label>
          <input
            required
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            placeholder='Display Name'
          />
        </label>
        <button>Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
