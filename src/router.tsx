import {
  HashRouter,
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
    <HashRouter>
      <div className="w-96 mx-auto py-8">
        <Switch>
          <Route path="/auth">
            <Switch>
              <AuthRoute path="/auth/login" component={Login} />
            </Switch>
          </Route>
          <Route path="/">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/send" component={SendAsset} />
            </Switch>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  )
}

export default AppRouter
