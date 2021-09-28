import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { PrivateRoute, AuthRoute } from 'core/utils/router/customRoutes'

import Login from 'modules/auth/pages/Login'
import Home from 'modules/home/pages/Home'
import SendAsset from 'modules/home/pages/SendAsset'

const AppRouter = () => {
  return (
    <Router>
      <div className="w-96 mx-auto py-8">
        <Switch>
          <Route path={`${process.env.REACT_APP_PUBLIC_URL}/auth`}>
            <Switch>
              <AuthRoute path={`${process.env.REACT_APP_PUBLIC_URL}/auth/login`} component={Login} />
            </Switch>
          </Route>
          <Route path={`${process.env.REACT_APP_PUBLIC_URL}/`}>
            <Switch>
              <PrivateRoute exact path={`${process.env.REACT_APP_PUBLIC_URL}/`} component={Home} />
              <PrivateRoute path={`${process.env.REACT_APP_PUBLIC_URL}/send`} component={SendAsset} />
            </Switch>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
