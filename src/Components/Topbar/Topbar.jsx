import React from 'react'
import './Topbar.scss'

class Topbar extends React.Component {
  state = {
    showResMenu: false
  }


  resMenuClick = () => {
    this.setState({ showResMenu: !this.state.showResMenu })
  }

  render() {
    const { showResMenu } = this.state
    return (
      <nav className="topbar">
        <div className="container">
          <div className="logo-container">
            <img
              src={require('../../assets/img/logo.png')}
              className="logo"
              alt="logo"
            />
          </div>
          <div className="nav-items large">
            <div className="item-container item-lg">
              <li className="item">WHO WE ARE?</li>
            </div>
            <div className="item-container">
              <li className="item">
                <span className="txt">CAFES</span>
                <img
                  src={require('../../assets/icons/down.png')}
                  alt="down"
                  className="down"
                />
              </li>
              <ul className="item-dropdown">
                <li className="item-drop-ele">GENEVA</li>
                <li className="item-drop-ele">ZURICH</li>
              </ul>
            </div>

            <div className="item-container">
              <li className="item">
                <span className="txt">SHOP</span>
                <img
                  src={require('../../assets/icons/down.png')}
                  alt="down"
                  className="down"
                />
              </li>
              <ul className="item-dropdown">
                <li className="item-drop-ele">FILTER</li>
                <li className="item-drop-ele">ESPRESSO</li>
                <li className="item-drop-ele">MERCHANDISE</li>
              </ul>
            </div>
            <div className="item-container item-lg">
              <li className="item">COFFEE CATERING</li>
            </div>
            <div className="item-container">
              <li className="item">CONTACT</li>
            </div>
            <div className="item-container">
              <li className="item">
                <img
                  src={require('../../assets/icons/bag.png')}
                  alt="cart"
                  className="cart"
                />
                <span className="txt">CART</span>
              </li>
            </div>
            <div className="item-container item-md">
              <li className="item">
                <img
                  src={require('../../assets/icons/user.png')}
                  alt="user"
                  className="user"
                />
                <span className="txt">ACCOUNT</span>
                <img
                  src={require('../../assets/icons/down.png')}
                  alt="down"
                  className="down"
                />
              </li>
            </div>
          </div>
          <div className="nav-items small">
            <div className="item-container">
              <li className="item">
                <img
                  src={require('../../assets/icons/bag.png')}
                  alt="cart"
                  className="icon"
                />
              </li>
            </div>
            <div className="item-container">
              <li className="item">
                <img
                  src={require('../../assets/icons/user.png')}
                  alt="cart"
                  className="icon"
                />
              </li>
            </div>
            <div onClick={this.resMenuClick} className="item-container">
              <li className="item">
                <img
                  src={require('../../assets/icons/menu.png')}
                  alt="cart"
                  className="icon"
                />
              </li>
            </div>
          </div>
        </div>
        {showResMenu ? <div className="res-menu">.</div> : null}
      </nav>
    )
  }
}

export default Topbar
