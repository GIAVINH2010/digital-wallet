import { useEffect, useState, useLayoutEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const token = localStorage.getItem('TOKEN')

  const hasToken = !!token

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
  const token = localStorage.getItem('TOKEN')

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