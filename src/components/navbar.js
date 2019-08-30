import React from 'react'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render(){
    const navBarMenu = this.state.menuOpen ? 'navbar-menu is-active' : 'navbar-menu'
    const burgerMenuButton = this.state.menuOpen ? 'navbar-burger burger is-active' : 'navbar-burger burger'
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a role="button" className={burgerMenuButton} aria-label="menu" aria-expanded="true" data-target="navbarBasicExample"
            onClick={this.toggleMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={navBarMenu}>
          <div className="navbar-start">
            <a className="navbar-item" href="#aboutme">
            About me
            </a>
            <a className="navbar-item" href="#projects">
            Projects
            </a>
            <a className="navbar-item" href="#contact">
              Contact
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button" href="https://github.com/draganceran" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a className="button" href="https://www.linkedin.com/in/dragan-ceran/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar
