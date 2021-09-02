import { useContext } from 'react'
import MyButton from '../components/UI/Button/MyButton'
import MyInput from '../components/UI/Input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', true)
  }

  return (
    <div>
      <h1>Autorization page</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Enter your name' />
        <MyInput type='password' placeholder='Enter your password' />
        <MyButton>Enter</MyButton>
      </form>
    </div>
  )
}

export default Login
