import Link from "next/link";

const Contact = (props) => {  
  return (
    
    <section className="section text-white bg-dark bg-img" style={{backgroundImage:"url(/static/images/14.jpg)", height: 768}}  data-overlay="6">
        <div className="container">
          <div className="row gap-y align-items-center">

            <div className="col-md-5">
              <p className="text-uppercase small opacity-70 fw-600 ls-1"><br/><br/><br/>Nosso escritório</p>
              <h5>Campinas, SP</h5>
              <br/>
              <p>R. José Joaquim de França Júnior, 52<br/>Jardim Santa Genebra, Campinas SP </p>
              <p>Telefone 1: (19) 99116-2103 <br/>Telefone 2: (19) 97416-1137<br/>Email: comercial@cebrami.com.br</p>
              <br/>
               
            </div>


            <div className="col-md-7">
              
            </div>

          </div>
        </div>
      </section>

  )
}

export default Contact;