import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
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

export default Navbar
