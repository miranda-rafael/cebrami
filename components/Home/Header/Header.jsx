import Link from "next/link";

const Header = (props) => {  
  return (
    
    <header class="header text-white h-fullscreen" style={{ backgroundImage: "url(/static/images/1.jpg)"}}>

    <div class="overlay opacity-90" style={{backgroundColor: '#563d7c'}}></div>

      <div class="container text-center">

        <div class="row h-100">
          <div class="col-lg-8 mx-auto align-self-center">

            <h1 class="display-4 my-6"><strong>TheSaaS</strong></h1>
            <p class="lead-3">The <b>most popular</b> HTML, CSS, and JS <b>framework</b> in the world for building responsive, mobile-first projects <b>on the web</b>.</p>

            <hr class="w-80px"/>

            <p>
              <a class="btn btn-xl btn-round btn-outline-light w-250" href="#">Download Now</a>
              <br/>
              <span class="opacity-60 small-3">Currently v4.2.1</span>
            </p>

          </div>
        </div>

      </div>
    </header>

  )
}

export default Header;