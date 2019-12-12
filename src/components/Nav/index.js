import React from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Hello</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/game">game</Link>
          </li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>
    )
  }
}