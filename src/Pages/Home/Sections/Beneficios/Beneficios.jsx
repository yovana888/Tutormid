import React from 'react'
import { BenefitStyled } from './Styles'
import { BsShieldPlus } from 'react-icons/bs';

export default function Beneficios() {
  return (
    <BenefitStyled>
        <div className='text'>
        <h1>Descubre qué ofrece Tutormid
</h1>

        <div className='d-flex'>
        <BsShieldPlus color='#FFC538' size='3rem ' style={{marginRight: "19px"}}/><h3>Profesores Expertos: Verificamos y confirmamos cuidadosamente el perfil de cada profesor
</h3>
        </div>

        <div className='d-flex'>
        <BsShieldPlus color='#FFC538' size='3rem ' style={{marginRight: "19px"}}/><h3>Aprende en cualquier momento: Toma clases particulares online en un horario que se adapte a tu apretada agenda
</h3>
        </div>

        <div className='d-flex'>
        <BsShieldPlus color='#FFC538' size='3rem ' style={{marginRight: "19px"}}/><h3>Precios asequibles: Elige un profesor experimentado que se ajuste a tu presupuesto
</h3>
        </div>


        </div>
      <img src="/foto_beneficios.png" alt="" />
    </BenefitStyled>
  )
}
