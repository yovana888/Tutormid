import React from 'react'

export default function SliderCards() {

  return (
    <>
      <div className="container-all h-100 bg-success"> 
        <h2 className="d-block text-center pt-4"> Descubre qué dicen nuestros estudiantes </h2>

        <div className="container d-flex flex-wrap justify-content-center h-100 align-items-center p-4 ">
            <div className="row"> 

                <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center">
                  <div className="card mx-2 text-justify my-2" style={{width: '350px'}}>
                  <div className="card-body">
                      <img src='./src/assets/icon-comillas.svg' alt="" />  
                      <p className='card-text px-3'> 
                        Fue un éxito total, ya que no solo pude aprender matematicas si no que hice un grupo de estudio para repasar los fines de semana.
                        <br/> <b> Mayra Gutierrez J. </b>
                      </p>
                  </div>
                  </div>
                </div>

                <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center">
                    <div className="card mx-2 text-justify my-2" style={{width: '350px'}}>
                    <div className="card-body">
                        <img src='./src/assets/icon-comillas.svg' alt="" />  
                        <p className='card-text px-3'> 
                          Es realmente excelente, las clases son muy amenas, y se aprende mucho siendo la sesión individual, lo recomendio mucho, es genial.
                          <br/> <b> Marcos Lara B. </b>
                        </p>
                    </div>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center">
                  <div className="card mx-2 text-justify my-2" style={{width: '350px'}}>
                  <div className="card-body">
                      <img src='./src/assets/icon-comillas.svg' alt="" />  
                      <p className='card-text px-3'> 
                        Fue una experiencia muy placentera poder estudiar con un profesor personalizado y desde la comodidad de casa. 
                        <br/> <b> Bryan Schuller M. </b>
                      </p>
                  </div>
                  </div>
                </div>
          

            </div> 
        </div>
    </div>
    </>
  )
}

