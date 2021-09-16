import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/ ">{props.titles}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/ ">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/ ">{props.abouts}</a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
        <div class={`form-check form-switch text-${props.Mode==='light'?'black':'white'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable darkmode</label>
        </div>
    </div>
  </div>
</nav>
        </div>
    )
}

Navbar.propTypes= {
    abouts: PropTypes.string,
    titles: PropTypes.string.isRequired
}

Navbar.defaultProps={
    abouts : 'AboutUs'
} 
