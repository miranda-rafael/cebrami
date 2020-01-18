import Link from "next/link";

const Navbar = (props) => {  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
      <div className="container">

        <div className="navbar-left">
          <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
          <a className="navbar-brand" href="#">
            <img className="logo-dark" src="../assets/img/logo-dark.png" alt="logo"/>
            <img className="logo-light" src="../assets/img/logo-light.png" alt="logo"/>
          </a>
        </div>

        <section className="navbar-mobile">
          <nav className="nav nav-navbar ml-auto">
            <a className="nav-link" href="#">Documentation</a>
            <a className="nav-link" href="#">Examples</a>
            <a className="nav-link" href="#">Themes</a>
            <a className="nav-link" href="#">Jobs</a>
            <a className="nav-link" href="#">Expo</a>
            <a className="nav-link" href="#">Blog</a>
          </nav>
        </section>

      </div>
    </nav>

  )
}

export default Navbar;