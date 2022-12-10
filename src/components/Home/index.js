import {Component} from 'react'

import Welcome from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onButtonClick = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="LoginAppContainer">
        <div className="LoginAppSubContainer">
          <Welcome isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onButtonClick} />
          ) : (
            <Login login={this.onButtonClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
