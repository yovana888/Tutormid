import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { CardStyle,CardImage, CardName,CardMateria,CardBody, CardDescription, Price, Calification,ContainerCard } from './Style'
import { BsClockFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';




/*----Cards Props------- **/

export default function TeacherCard() {
  return (
<div className='container'>
      <ContainerCard className='wrapper'>
{/* CARD 1 */}        
        <div>
          <CardContent 
          img='./Rectangle 974.png'
          name='Lisa Sotelo Flores'
          materia='Matemáticas'
          description='Tutora de matemáticas para niños y adolescentes'
          price='$15.00 / 1 hora'
          calification='5.0'
          />
        </div>

{/* CARD 2 */}
        <div>
          <CardContent 
          img='./Rectangle 976.png'
          name='Meri Rosas Laura'
          materia='Musica-Piano'
          description='Instructora de piano con más de 5 años de experien...'
          price='$10.00 / 50 min'
          calification='5.0'
          />
        </div>

{/* CARD 3 */}

        <div>
          <CardContent 
          img='./Rectangle 978.png'
          name='Meri Rosas Laura'
          materia='Fisica - Química'
          description='Magister en ciencias aplicadas y Titulada en Fisi...'
          price='$10.00 / 1 hora'
          calification='5.0'
          />
        </div>

{/* CARD 4 */}

        <div>
          <CardContent 
          img='./Rectangle 986.png'
          name='Gerardo Perez'
          materia='Matematica Universitaria'
          description='Docente de la Academia XYZ, e Ingeniero Civil de ...'
          price='$12.00 / 1 hora'
          calification='5.0'
          />
        </div>

{/* CARD 5 */}

        <div>
          <CardContent 
          img='./Rectangle 988.png'
          name='Ramon Alave'
          materia='Musica - Guitarra'
          description='Instructor de musica y canto, egresado de la escu..'
          price='$12.00 / 30 min'
          calification='5.0'
          />
        </div>

{/* CARD 6 */}

        <div>
          <CardContent 
          img='./Rectangle 990.png'
          name='Evelin Cutipa'
          materia='Entrenadora de Gym'
          description='Entrenadora personal online y presencial de habla ingle...'
          price='$10.00 / 50 min'
          calification='5.0'
          />
        </div>
      </ContainerCard>
</div>      

  )
}


 function CardContent(props) {
  return (
    <CardStyle className="card">

      <CardImage  className='card__image ' src={props.img} />
      <CardBody className="card__body">

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
