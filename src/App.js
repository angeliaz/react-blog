import React from 'react'
import Nav from './components/Nav'
import getRouter from './router'

export default class App extends React.Component{
  render() {
    return (
      <Router>
        <Nav />
        { getRouter() }
      </Router>
    )
  }
}
