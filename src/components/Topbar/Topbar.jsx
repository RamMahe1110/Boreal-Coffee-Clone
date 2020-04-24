import React from 'react'
import './Topbar.scss'
import { Link, withRouter } from 'react-router-dom'

class Topbar extends React.Component {
  state = {
    showResMenu: false,
    scrolled: false,
  }

  resMenuClick = () => {
    this.setState({ showResMenu: !this.state.showResMenu })
  }

  shouldTopbarChange = () => {
    document.addEventListener('scroll', (e) => {
      if (window.scrollY > 200) {
        this.setState({ scrolled: true })
      } else this.setState({ scrolled: false })
    })
  }

  componentDidMount() {
    this.shouldTopbarChange()
  }

  onNavDropdownClick = (url) => {
    this.props.history.push(url)
    this.setState({ showResMenu: false })
  }

  render() {
    const { showResMenu, scrolled } = this.state
    const { topbarEffect } = this.props
    return (
      <nav
        className={`topbar ${
          topbarEffect ? (scrolled ? 'topbarInv' : '') : 'topbarInv'
        }`}
      >
        <div className="container">
          <Link to="/" className="logo-container">
            {topbarEffect ? (
              scrolled ? (
                <img
                  src={require('../../assets/img/black-logo.png')}
                  className="logo"
                  alt="logo"
                />
              ) : (
                <img
                  src={require('../../assets/img/logo.png')}
                  className="logo"
                  alt="logo"
                />
              )
            ) : (
              <img
                src={require('../../assets/img/black-logo.png')}
                className="logo"
                alt="logo"
              />
            )}
          </Link>
          <div className="nav-items large">
            <div
              onClick={() => this.onNavDropdownClick('/brandstory')}
              className="item-container item-lg"
            >
              <li className="item">WHO WE ARE?</li>
            </div>
            <div
              onClick={() => this.onNavDropdownClick('/mainlocation')}
              className="item-container"
            >
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

            <div
              onClick={() => this.onNavDropdownClick('/shop')}
              className="item-container"
            >
              <li className="item">
                <span className="txt">SHOP</span>
                <img
                  src={require('../../assets/icons/down.png')}
                  alt="down"
                  className="down"
                />
              </li>
              <ul className="item-dropdown">
                <Link to="/shop" className="item-drop-ele">
                  FILTER
                </Link>
                <Link to="/shop" className="item-drop-ele">
                  ESPRESSO
                </Link>
                <Link to="/shop" className="item-drop-ele">
                  MERCHANDISE
                </Link>
              </ul>
            </div>
            <div
              onClick={() => this.onNavDropdownClick('/cc')}
              className="item-container item-lg"
            >
              <li className="item">COFFEE CATERING</li>
            </div>
            <div
              onClick={() => this.onNavDropdownClick('/contact')}
              className="item-container"
            >
              <li className="item">CONTACT</li>
            </div>
            <div className="item-container">
              <li className="item">
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                      alt="shop-bag"
                      className="cart"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/bag.png')}
                      alt="cart"
                      className="cart"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                    alt="shop-bag"
                    className="cart"
                  />
                )}

                <span className="txt">CART</span>
              </li>
            </div>
            <div className="item-container item-md">
              <li className="item">
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/material/48/000000/user.png"
                      alt="user"
                      className="user"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/user.png')}
                      alt="user"
                      className="user"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/material/48/000000/user.png"
                    alt="user"
                    className="user"
                  />
                )}

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
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                      alt="shop-bag"
                      className="icon"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/bag.png')}
                      alt="shop-bag"
                      className="icon"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                    alt="shop-bag"
                    className="icon"
                  />
                )}
              </li>
            </div>
            <div className="item-container">
              <li className="item">
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/material/48/000000/user.png"
                      alt="user"
                      className="icon"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/user.png')}
                      alt="cart"
                      className="icon"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/material/48/000000/user.png"
                    alt="user"
                    className="icon"
                  />
                )}
              </li>
            </div>
            <div onClick={this.resMenuClick} className="item-container">
              <li className="item">
                {topbarEffect ? (
                  scrolled ? (
                    <img
                      src="https://img.icons8.com/ios-filled/48/000000/menu.png"
                      alt="menu"
                      className="icon"
                    />
                  ) : (
                    <img
                      src={require('../../assets/icons/menu.png')}
                      alt="menu"
                      className="icon"
                    />
                  )
                ) : (
                  <img
                    src="https://img.icons8.com/ios-filled/48/000000/menu.png"
                    alt="menu"
                    className="icon"
                  />
                )}
              </li>
            </div>
          </div>
        </div>
        {showResMenu ? (
          <div className="res-menu">
            <div className="res-menu-container">
              <div
                onClick={() => this.onNavDropdownClick('/brandstory')}
                className="ele"
              >
                <Link className="main-link">WHO WE ARE?</Link>
              </div>
              <div
                onClick={() => this.onNavDropdownClick('/mainlocation')}
                className="ele"
              >
                <Link to="#" className="main-link sub-main-link">
                  CAFES
                </Link>
                <div className="sub">
                  <Link
                    // onClick={() => this.onNavDropdownClick('/cc')}
                    to="#"
                    className="sub-name"
                  >
                    GENEVA
                  </Link>
                  {/* <Link to="#" className="sub-link">
                    Rue du Stand
                  </Link>
                  <Link to="#" className="sub-link">
                    Mont-Blanc 17
                  </Link>
                  <Link to="#" className="sub-link">
                    Eaux-Vives
                  </Link> */}
                </div>
                <div className="sub">
                  <Link
                    // onClick={() => this.onNavDropdownClick('/mainlocation')}
                    to="#"
                    className="sub-name"
                  >
                    Zurich
                  </Link>
                  {/* <Link to="#" className="sub-link">
                    Talacker
                  </Link>
                  <Link to="#" className="sub-link">
                    Oerlikon
                  </Link> */}
                </div>
              </div>
              <div
                onClick={() => this.onNavDropdownClick('/shop')}
                className="ele"
              >
                <Link to="#" className="main-link sub-main-link">
                  SHOP
                </Link>
                <div className="sub">
                  <Link
                    //onClick={() => this.onNavDropdownClick('/shop')}
                    to="#"
                    className="sub-link"
                  >
                    Filter
                  </Link>
                  <Link
                    //onClick={() => this.onNavDropdownClick('/shop')}
                    to="#"
                    className="sub-link"
                  >
                    Espresso
                  </Link>
                  <Link
                    //onClick={() => this.onNavDropdownClick('/shop')}
                    to="#"
                    className="sub-link"
                  >
                    Merchandise
                  </Link>
                </div>
              </div>
              <div
                onClick={() => this.onNavDropdownClick('/cc')}
                className="ele"
              >
                <Link to="#" className="main-link">
                  COFFEE CATERING
                </Link>
              </div>
              <div
                onClick={() => this.onNavDropdownClick('/contact')}
                className="ele"
              >
                <Link to="#" className="main-link">
                  CONTACT
                </Link>
              </div>
              {/* <div className="ele">
                <Link to="#" className="main-link">
                  TERMS & CONDITIONS
                </Link>
              </div> */}
              <div onClick={this.resMenuClick} className="close">
                <img
                  src={require('../../assets/icons/close.png')}
                  alt="close"
                  className="icon"
                />
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    )
  }
}

export default withRouter(Topbar)
