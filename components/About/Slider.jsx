import Link from "next/link";

const Slider = (props) => {  
  return (
    <section className="section p-0">
       
        <section className="section">
        
        <div className="container">
          <div className="row align-items-center h-100">
    
            <div className="col-md-7 mx-auto">
              <p className="lead-5">
                Confira abaixo alguns de nossos trabalhos em Campinas e região</p>
            </div>
    
          </div>
        </div>
      </section>

    <div data-provide="slider" data-autoplay="true" data-slides-to-show="2" data-css-ease="linear" data-speed="12000" data-autoplay-speed="0" data-pause-on-hover="false">
      <div className="p-2">
        <div className="rounded bg-img h-400" style={{ backgroundImage: "url(/static/images/slider/any-any-iguatemi-campinas.jpg)"}} ></div>
      </div>

      <div className="p-2">
        <div className="rounded bg-img h-400" style={{ backgroundImage: "url(/static/images/slider/cafe-havanna.jpg)"}}></div>
      </div>

      <div className="p-2">
        <div className="rounded bg-img h-400" style={{ backgroundImage: "url(/static/images/slider/clube-melissa-tucuruvi.jpg)"}}></div>
      </div>

      <div className="p-2">
        <div className="rounded bg-img h-400" style={{ backgroundImage: "url(/static/images/slider/dax-center-norte.jpg)"}}></div>
      </div>
    </div>
  </section>

  )
}

export default Slider;  