import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.svg'

import RegisterForm from 'modules/auth/components/RegisterForm/Form'

const Login = () => {
  return (
    <>
      <div className="bg-auth-ronin pt-8 pb-3 mb-4">
        <img className="mx-auto" src={logo} alt="logo" />
      </div>
      <div className="px-3">
        <h1 className="text-center py-2">Ronin Wallet</h1>
        <p className="text-center tracking-wide pt-1 pb-2">Your Digital Passport</p>
        <div className="flex justify-center">
          <Link className="text-sm text-blue-500" to="/auth/login">Login</Link>
        </div>
        <RegisterForm />
      </div>
    </>
  )
}

export default Login
