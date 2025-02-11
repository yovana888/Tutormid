import React from 'react'
import AdsTeachers from '../Home/Sections/AdsTeachers/AdsTeachers'
import Beneficios from './Sections/Beneficios/Beneficios'
import Steps from './Sections/Steps/Steps'
import Reviews from './Sections/Reviews/Reviews'
import { Container, ColumnText, ContainerImage } from './Styles'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewInputGroup from '../../Components/Groups/InputGroup/InputGroup';
import Text from '../../Components/Elements/Text/Text';

export default function Home() {  
  return (
    <>
        <Container>
           <Row>
                <Col>
                    <ColumnText> 
                        <Text name='Encuentra tu' name2='Profesor Particular'/>
                        <Text name='En línea o presencial, comienza y agenda tus 
                          lecciones de manera grupal o individual en el  
                          horario que más se adpate a tí' typeText='subtitle'/>
                        <NewInputGroup/>
                    </ColumnText>
                </Col>
                <ContainerImage><img src="https://eheiqcszbiikeipnnzhf.supabase.co/storage/v1/object/sign/storage/img-banner.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9yYWdlL2ltZy1iYW5uZXIuc3ZnIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcxNDkxNzQ1LCJleHAiOjE5ODY4NTE3NDV9.5vRRk1ZOz2lZtQF_AZ71QtpeNs0DYwCOvKYX8WrzhF0" alt="img-banner" /></ContainerImage>
           </Row>
        </Container>
        <Steps/>
        <AdsTeachers/>
        <Beneficios/>
        <Reviews/>
        
    </>
  )
}
