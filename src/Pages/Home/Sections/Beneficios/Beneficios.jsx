import React from 'react'
import { BenefitStyled } from './Styles'
import { BsShieldPlus } from 'react-icons/bs';
import { BsClock } from 'react-icons/bs';
import { CiDollar } from 'react-icons/ci';


export default function Beneficios() {
  return (
    <BenefitStyled>
        <div className='container-fluid'>
                <div className='row'>
                        <div className='col-12 col-sm-12 col-md-8 '>
                                <h1>Descubre qué ofrece Tutormid
                                </h1>

                                <div className='d-flex'>
                                        <p><BsShieldPlus color='#FFC538' size='4rem' style={{marginRight: "19px"}}/>Profesores Expertos: Verificamos y confirmamos cuidadosamente el perfil de cada profesor
                                        </p>
                                </div>

                                <div className='d-flex'>
                                        <p><BsClock color='#FFC538' size='5rem' style={{marginRight: "19px"}}/>Aprende en cualquier momento: Toma clases particulares online en un horario que se adapte a tu apretada agenda
                                        </p>
                                </div>

                                <div className='d-flex'>
                                        <p><CiDollar color='#FFC538' size='4.5rem ' style={{marginRight: "19px"}}/>Precios asequibles: Elige un profesor experimentado que se ajuste a tu presupuesto
                                        </p>
                                </div>

                        </div>
                        <div className='col-12 col-sm-12 col-md-4 align-self-end'>
                                <div className='imagen '>
                                        <img className='img-fluid' src="/foto_beneficios.png" alt="" />
                                </div>
                        </div>
                </div>                
        </div>
    </BenefitStyled>
  )
}
