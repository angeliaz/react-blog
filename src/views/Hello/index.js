import React, { PureComponent } from 'react'
import '../../../mock/mock.js'
import pic from 'assets/images/angelia.jpg'

export default class Hello extends PureComponent {
  render() {
    return (
      <div>
        <img src="./assets/images/angelia.jpg" />
        <img src={pic} />
        Hello,组件化-React!
        <span>test22</span>
      </div>
    )
  }
}
