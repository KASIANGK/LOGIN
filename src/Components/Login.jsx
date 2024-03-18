import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './Authentification'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const error = useSelector(state => state.error)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Log In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login
