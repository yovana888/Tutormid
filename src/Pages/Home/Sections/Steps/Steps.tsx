import React from 'react'
import { Container, ContainerImage } from './Style'
import { Row, Col } from 'react-bootstrap';
import Text from '../../../../Components/Elements/Text/Text';
import CardStep from '../../../../Components/Cards/CardStep/CardStep';
import { BsSearch, BsFillCalendarCheckFill,BsCameraReelsFill } from "react-icons/bs";

export default function Steps() {
  return (
    <Container>
      <Text name='Aprender nunca fue así de fácil' className='text-center' />
      <Text name='Sigue los siguientes pasos para recibir' className='text-center' name2='tus clases en la plataforma' typeText='subtitle' /><br />
      <Row>
        <Col lg={4} md={4} sm={12} xs={12}>
            <Row>
                <Col md={12}  className='d-flex justify-content-center'>
                    <CardStep 
                        title='1. Encuentra a tu Profesor' 
                        text='Utiliza filtros para limitar tu búsqueda y encontrar el que mejor se ajuste a tus necesidades'
                        icon={<BsSearch/>}
                        color='purple'
                    />
                </Col>

                <Col md={12}  className='d-flex justify-content-center'>
                  <CardStep 
                      title='2. Agenda y Reserva' 
                      text='Encuentra el momento perfecto que se ajuste a tu horario y reserva tu clase en segundos'
                      icon={<BsFillCalendarCheckFill/>}
                      color='yellow'
                  />
                </Col>
            </Row>
        </Col>
        <Col className='d-flex justify-content-center' lg={4} md={4} sm={12} xs={12} >
          <ContainerImage>
            <img src="/joven_steps.svg" alt="" />
          </ContainerImage>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
            <Row>
                <Col md={12}  className='d-flex justify-content-center'>
                    <CardStep 
                        title='3. Encuentra a tu Profesor' 
                        text='Llegó la hora de tu sesión, trata de estar 5 minutos antes, y recuerda puedes solicitar que tu clase quede grabada.'
                        icon={<BsCameraReelsFill/>}
                        color='green'
                    />
                </Col>

                <Col md={12}   className='d-flex justify-content-center'>
                  <CardStep 
                      title='4. Valora y Comparte' 
                      text='Comenta que te parecio la clase; asi mismo puedes recomendar al profesor a otras personas. '
                      icon={<BsFillCalendarCheckFill/>}
                      color='blue'
                  />
                </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  )
}
