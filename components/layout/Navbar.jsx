import Link from "next/link";

const Navbar = (props) => {  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
      <div className="container">

        <div className="navbar-left">
          <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
          <a className="navbar-brand" href="#">
            <a className= "nav-link" href="/" style = {{color: "#ffff"}}>CEBRAMI </a>
          </a>
        </div>

        <section className="navbar-mobile">
          <nav className="nav nav-navbar ml-auto">
            <a className="nav-link" href="/">Início</a>
            <a className="nav-link" href="/sobre">Sobre</a>
            <a className="nav-link" href="/contact">Contato</a>
            <a className="nav-link" href="/gallery">Galeria</a>
          </nav>
        </section>

      </div>
    </nav>

  )
}

export default Navbar;