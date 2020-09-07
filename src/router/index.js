import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Login, Home, Lx, List, Basic, Hoc, Hook, App } from './assembly'

export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}
