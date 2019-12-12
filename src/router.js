import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from 'react-loadable'
import Loading from 'components/Loading'

/* import Game from '@/views/Game'
import Hello from 'views/Hello';
import About from 'views/About';
import Users from 'views/Users';
import Counter from 'views/Counter'; */

const Hello = loadable({
  loader: () => import('views/Hello'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})
const Game = loadable({
  loader: () => import('views/Game'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})
const About = loadable({
  loader: () => import('views/About'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})
const Users = loadable({
  loader: () => import('views/Users'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})
const Counter = loadable({
  loader: () => import('views/Counter'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})
const NotFound = loadable({
  loader: () => import('views/NotFound'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})

const getRouter = () => (
  <Switch>
    {/* <Route exact path="/" component={Home}/> */}
    <Route exact path="/" component={Hello} />
    <Route path="/about" component={About} />
    <Route path="/users" component={Users} />
    <Route path="/game" component={Game} />
    <Route path="/counter" component={Counter} />
    <Route component={NotFound} />
  </Switch>
)

export default getRouter
