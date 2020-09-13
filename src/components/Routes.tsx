import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import PageLoader from './@common/PageLoader';
import useCheckAuth from './@customHooks/useCheckAuth';

import Auth from './Auth/'
import Canvas from './Canvas';
import Home from './Home';

export const paths = {
  AUTH: '/auth',
  HOME: '/',
  CANVAS: '/canvas',
  SETTINGS: '/settings',
  EXPLORE: '/explore',
  USER_PROFILE: '/user'
}

interface RoutesProps { }

export const Routes: React.FC<RoutesProps> = ({ }) => {

  const [checkingLogin, isLogin] = useCheckAuth()

  if (checkingLogin) {
    return <PageLoader />
  }

  const withAuthRoutes = (<>
    <Route
      path = {`${paths.CANVAS}/:id`}
      component = {Canvas}
    />
    <Route
      path = {paths.HOME}
      component = {Home}
    />
    <Redirect to = {paths.HOME} />
  </>)

  const withoutAuthRoutes = (<>
    <Route
      path = {paths.AUTH}
      component = {Auth}
    />
    <Redirect 
      from='/' 
      to = {paths.AUTH} />
  </>)

  return (
    <Router>
      <Switch>
        {isLogin ? withAuthRoutes : withoutAuthRoutes}
      </Switch>
    </Router>
  )
}
