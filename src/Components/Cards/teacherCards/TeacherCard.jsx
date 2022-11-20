import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { CardStyle,CardImage, CardName,CardMateria,CardBody, CardDescription, Price, Calification } from './Style'
import { BsClockFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { colors }  from '../../../Styles/colors';





export default function TeacherCard() {
  return (
    <Container>
      <Row>
        <Col lg={4} md={6}>
          <CardContent 
          img='./Rectangle 974.png'
          name='Lisa Sotelo Flores'
          materia='Matemáticas'
          description='Tutora de matemáticas para niños y adolescentes'
          price='$15.00 / 1 hora'
          calification='5.0'
          />
        </Col>

        <Col lg={4} md={6}>
          <CardContent 
          img='./Rectangle 974.png'
          name='Lisa Sotelo Flores'
          materia='Matemáticas'
          description='Tutora de matemáticas para niños y adolescentes'
          price='$15.00 / 1 hora'
          calification='5.0'
          />
        </Col>

        <Col lg={4} md={6}>
          <CardContent 
          img='./Rectangle 974.png'
          name='Lisa Sotelo Flores'
          materia='Matemáticas'
          description='Tutora de matemáticas para niños y adolescentes'
          price='$15.00 / 1 hora'
          calification='5.0'
          />
        </Col>

        <Col lg={4} md={6}>
          <CardContent 
          img='./Rectangle 974.png'
          name='Lisa Sotelo Flores'
          materia='Matemáticas'
          description='Tutora de matemáticas para niños y adolescentes'
          price='$15.00 / 1 hora'
          calification='5.0'
          />
        </Col>

        <Col lg={4} md={6}>
          <CardContent 
          img='./Rectangle 974.png'
          name='Lisa Sotelo Flores'
          materia='Matemáticas'
          description='Tutora de matemáticas para niños y adolescentes'
          price='$15.00 / 1 hora'
          calification='5.0'
          />
        </Col>
        
        <Col lg={4} md={6}>
          <CardContent 
          img='./Rectangle 974.png'
          name='Lisa Sotelo Flores'
          materia='Matemáticas'
          description='Tutora de matemáticas para niños y adolescentes'
          price='$15.00 / 1 hora'
          calification='5.0'
          />
        </Col>
      </Row>
      </Container>
  )
}


 function CardContent(props) {
  return (
    <CardStyle className="card">
      <CardBody className="card__body">


      <CardImage className='card__image' src={props.img} alt="" />

        <CardName className='card__name'>{props.name}</CardName>       
        <CardMateria className='card__materia'>{props.materia}</CardMateria>
        <CardDescription className="description">{props.description}</CardDescription>

        <div className='d-flex justify-content-between card__footerr' >

          <Price className='price'><BsClockFill style={{paddingBottom: "4px" }} size='1.4rem'/>  {props.price}</Price>         
          <Calification className='calification'><AiFillStar color= "#FFC538" style={{paddingBottom: "4px" }} size='1.4rem'/>  {props.calification}</Calification>

        </div>

      </CardBody>
      
    </CardStyle>
  )
}
