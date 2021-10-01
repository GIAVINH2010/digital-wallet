import { useLayoutEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { resetAxiosToken } from 'core/utils/axios'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const token = localStorage.getItem('token')

  const hasToken = !!token

  useLayoutEffect(() => {
    if (hasToken) {
      resetAxiosToken()
    }
  }, [hasToken])

  return (
    <Route
      {...rest}
      render={props => {
        return hasToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }}
    />
  )
}

const AuthRoute = ({ component: Component, ...rest }: any) => {
  const token = localStorage.getItem('token')

  const hasToken = !!token

  return (
    <Route
      {...rest}
      render={props => {
        return hasToken ? <Redirect to="/" /> : <Component {...props} />
      }}
    />
  )
}

export { PrivateRoute, AuthRoute }