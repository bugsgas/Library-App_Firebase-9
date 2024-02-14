import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      login(email, password)
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles['login-form']}>
        <h2>Login</h2>
        <label>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email'
            autoComplete="email"
          />
        </label>
        <label>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
            autoComplete="new-password"
            
          />
        </label>
        <button>Login</button>
        {error && <p>{error}</p>}
        <p>For testing email:user@test.dev pass:user123</p>
      </form>
    </div>
  )
}
