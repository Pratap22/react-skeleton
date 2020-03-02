import React from "react"
import { Router, Redirect } from "@reach/router"
import { RoutesString as Paths } from "./helpers/routeConstants"
import { useSelector } from "react-redux"
import {
  Minimal as MinimalLayout,
  Main as MainLayout,
} from "containers/layouts"
import Home from "containers/home/Home"
import Login from "containers/auth/Login"

const RestrictedRoute = ({
  component: Component,
  isLoggedIn,
  location,
  ...rest
}) => {
  return isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Redirect to={Paths.login} state={{ from: location.pathname }} noThrow />
  )
}

export const OpenRoute = ({ component: Component, ...rest }) => {
  return (
    <MinimalLayout>
      <Component {...rest} />
    </MinimalLayout>
  )
}

const PublicRoutes = () => {
  // const isLoggedIn = useSelector(state => getIsLoggedIn(state))
  return (
    <Router>
      <RestrictedRoute
        path={Paths.app}
        component={MainLayout}
        isLoggedIn={true}
      >
        <Home path={Paths.home} />
      </RestrictedRoute>
      {/* <OpenRoute
        component={PartnerLoginPage}
        path={SharedRouteConstants.HOME}
      /> */}
      <OpenRoute component={Login} path={Paths.login} />
      {/* <OpenRoute
        component={PartnerForgotPasswordPage}
        path={SharedRouteConstants.FORGOT_PASSWORD}
      />
      <OpenRoute
        component={PartnerResetPasswordPage}
        path={SharedRouteConstants.RESET_PASSWORD}
      />
      <OpenRoute
        component={VerifyUserForm}
        path={SharedRouteConstants.VERIFY}
      /> */}
    </Router>
  )
}

export default PublicRoutes
