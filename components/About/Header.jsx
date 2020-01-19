import Link from "next/link";

const Header = (props) => {  
  return (
    <header className="header text-white"style={{ backgroundImage: "url(/static/images/chairs-2181916_960_720.jpg)"}}>

<div class="overlay opacity-60" style={{backgroundColor: '#104f34'}}></div>
        
    <div className="container">
      <div className="row align-items-center h-100">

        <div className="col-md-7 mx-auto">
          <h1>Sobre nós</h1>
          <p className="lead-2">
Um Ambiente Agradável E Limpo É Imprescindível, Deixe Que Cuidemos Disso Para Você. Poucas coisas são piores que um ambiente sujo, nosso objetivo é que isso não seja mais um problema na sua vida. Cuidar da limpeza e da organização de um ambiente é intrínseco do ser humano, pois além do bem-estar, está diretamente relacionado a saúde. Se você busca deixar o seu ambiente impecável e não quer ter dor de cabeça com isso, veio ao lugar certo.</p>
        </div>

      </div>
    </div>
  </header>

  

  )
}

export default Header;  