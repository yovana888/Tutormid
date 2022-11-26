import React from 'react'
import { Container, ColumnText, Title, SubTitle, ContainerImage } from './Styles'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewInputGroup from '../../../../Components/Groups/InputGroup/InputGroup';

export default function Banner() {
  return (
    <>
        <Container>
           <Row>
                <Col>
                    <ColumnText> 
                        <Title>Encuentra tu <br /> profesor particular</Title>
                        <SubTitle>En línea o presencial, comienza y agenda tus 
                        lecciones de manera grupal o individual en el  
                        horario que más se adpate a tí</SubTitle>
                        <NewInputGroup/>
                    </ColumnText>
                </Col>
                <ContainerImage><img src="src/assets/img-banner.svg" alt="img-banner" /></ContainerImage>
           </Row>
        </Container>
    </>
  )
}
