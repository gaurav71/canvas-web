import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Auth from './Auth/'
import Canvas from './Canvas';
import Home from './Home';

export const paths = {
  AUTH: '/auth',
  HOME: '/',
  CANVAS: '/canvas'
}

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {

  return (
    <Router>
      <Switch>
        <Route
          path = {paths.AUTH}
          component = {Auth}
        />
        <Route
          path = {`${paths.CANVAS}/:id`}
          component = {Canvas}
        />
        <Route
          path = {paths.HOME}
          component = {Home}
        />
      </Switch>
    </Router>
  )
}
