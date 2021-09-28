import logo from 'assets/images/logo.svg'

import LoginForm from 'modules/auth/components/LoginForm/Form'

const Login = () => {
  return (
    <div>
      <div className="bg-auth-ronin pt-8 pb-3 mb-4">
        <img className="mx-auto" src={logo} />
      </div>
      <h1 className="text-center py-2">Ronin Wallet</h1>
      <p className="text-center tracking-wide pt-1 pb-2">Your Digital Passport</p>
      <LoginForm />
    </div>
  )
}

export default Login
