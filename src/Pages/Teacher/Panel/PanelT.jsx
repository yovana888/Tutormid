import React, {useState} from 'react'
import {PanelBody, Estudios, Check, Welcome, Chat,Solicitudes, Calendar} from './Style'
import ProfileCard from '../../../Components/Cards/ProfileCard/ProfileCard';


export default function PanelT() {
  const [showModalComentary, setshowModalComentary] = useState(false);
  const toggleModalComentary = () => {
    setshowModalComentary(!showModalComentary)
  } 
  

  let solicitudes = [
    {
      fecha: 'Hoy',
      teachers: [
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Pendiente",
          style: "pending"
        }
      ] 
    },
    {
      fecha: '10-12-22',
      teachers: [
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Aceptado",
          style: "acept"
        },
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Cancelado",
          style: "cancel"
        }
      ]
    },
    {
      fecha: '10-10-22',
      teachers: [
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Rechazado",
          style: "refused"
        }
      ]
    }
  ]


  return (
    <PanelBody>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-5'>
                <ProfileCard 
                    img='/Ellipse 38.svg'
                    name='Raul Perez Rojas'
                    email='raulperez@gmail.com'
                    number='975635061'
                    date='20-11-1993'
                    description='Docente especializado en el Área de Aritmética, Algebra y Razonamiento Matemático Nivel Secundario y Pre Universitario con amplia trayectoria...'
                    isStudent={false}
                />
                <Estudios className='mb-5'>
                  <div>
                    <h4>Mis Estudios</h4>
                    <div className='info-studies'>
                      <span><Check/></span>
                      <div>
                        <p>Titulado en Docencia Universitaria <br/> <span className='uni'>Universidad de Lima</span> </p>
                      </div>
                    </div>
                    <div className='info-studies'>
                      <span><Check/></span>
                      <p>Titulado en Docencia Universitaria <br/> <span className='uni'>Universidad de Lima </span> </p>
                    </div>
                  </div>
                </Estudios>
            </div>
          <div className='col-12 col-md-7 '>               
            <Welcome>
               <h4>👋  Bienvenid@ Raul</h4>
               <div className='list-class'>
                  <div className='list-details'>
                    <div className='list-info'>
                      <p>
                        <span className='hour'>9:30 - 10:30</span>
                        <span className='list-name'>Julio Perez Chavez</span>
                        <span className='materia-list'>Matematica General</span>
                     </p>
                     <span><Chat/></span>
                    </div>
                    <div className='list-info'>
                      <p>
                        <span className='hour'>9:30 - 10:30</span>
                        <span className='list-name'>Julio Perez Chavez</span>
                        <span className='materia-list'>Matematica General</span>
                      </p>
                      <span><Chat/></span>
                    </div>
                  </div>
                </div>
            </Welcome> 
            
            <Solicitudes>
              <h4 className='title-studies'>
              Mis solicitudes de clases
              </h4>
              {!solicitudes.length ? <>
                <div className='empty-box'>
                  <img src="/image 61.svg" alt="" />
                  <p>Aquí aparecerán tus solicitudes de clases</p>
                </div>
              </>
              :
              <>
                <div className='full-box'>
                <div className='list'>

                  {solicitudes.map( (e, index) => 
                  (<>
                    <div className='d-flex justify-content-between align-items-center' key={index}>
                      <span className='fecha'>{e.fecha}</span> <Divider secondaryColor="grey" 
                      ></Divider>
                    </div>
                    {
                      e.teachers.map( (tch, index) => (
                      <ul className='list-unstyled d-flex justify-content-between' key={index}>
                        <li>{ tch.name }</li> 
                        <li>{ tch.materia }</li> 
                        <li>
                          <span className={ tch.style }>
                            { tch.status }
                          </span>
                        </li> 
                        <li><Calendar/></li>
                      </ul>
                      ))
                    }
                    
                  </>
                  )
                    )}
                  
                </div>

                

                
              </div>
              </>
              }
              
              
              
            </Solicitudes>

            
          </div>                 
        </div>
      </div>

      


    </PanelBody>


  )
}


function Divider(props) {
  return (
    <hr
      style={{
        backgroundColor: props.secondaryColor,
        height: '1px',
        width: '84%',
      }}
    />
  );
}