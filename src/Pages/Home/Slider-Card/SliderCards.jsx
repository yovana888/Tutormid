import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export default function SliderCards() {
  return (
    <>

    <h2 className='text-center text-success my-5'> Descubre qué dicen nuestros estudiantes </h2>

    <div className='container'>  
      
      <CardGroup className='row mb-5'>

          <div className="col-sm-4 col-md-4 col-sm-12">
            <Card style={{width: '350px'}}  >        
                <Card.Body>
                  <Card.Text>
                  Es excelente, las clases son muy amenas, y se aprende mucho siendo la sesión individual, lo recomendio mucho
                  <br/>  <b>  Mayra Gutierrez J.  </b>
                  </Card.Text>
                </Card.Body>
            </Card>
          </div>

          <div className="col-sm-4 col-md-4 col-sm-12">
            <Card style={{width: '350px'}}  >        
                <Card.Body>
                  <Card.Text>
                  Es excelente, las clases son muy amenas, y se aprende mucho siendo la sesión individual, lo recomendio mucho
                  <br></br>  <b>  Mayra Gutierrez J.  </b>
                  </Card.Text>
                </Card.Body>
            </Card>
          </div>

          <div className="col-sm-4 col-md-4 col-sm-12">
            <Card style={{width: '350px'}}  >        
                <Card.Body>
                  <Card.Text>
                  Es excelente, las clases son muy amenas, y se aprende mucho siendo la sesión individual, lo recomendio mucho
                  <br></br>  <b>  Mayra Gutierrez J.  </b>
                  </Card.Text>
                </Card.Body>
            </Card>
          </div>

         

           </CardGroup>
    
    </div>
    </>
  )
}
