import Link from "next/link";

const Header = (props) => {  
  return (
    
    <header class="header text-white h-fullscreen" style={{ backgroundImage: "url(/static/images/chairs-2181916_960_720.jpg)"}}>

    <div class="overlay opacity-60" style={{backgroundColor: '#104f34'}}></div>

      <div class="container text-center">

        <div class="row h-100">
          <div class="col-lg-8 mx-auto align-self-center">

            <h1 class="display-4 my-6"><strong>CEBRAMI</strong></h1>
            <p class="lead-3">Empresa de limpeza profissional que atua na região de Campinas e grande São Paulo. Limpeza pós obra, residencial e comercial. Serviços especializados de limpeza e 
            tratamento de pisos e pedras, impermeabilização, áreas abertas, lavagem de estofados, poltronas e cadeiras.</p>

            <hr class="w-80px"/>


          </div>
        </div>

      </div>
    </header>

  )
}

export default Header;