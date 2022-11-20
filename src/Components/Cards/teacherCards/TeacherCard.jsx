import React from 'react'
import {StyledCard} from './Style'
import Badge from 'react-bootstrap/Badge';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default function TeacherCard() {
  return (
    <div className='wrapper'>
      <CardContent 
      img='./Rectangle 974.png'
      name='Lisa Sotelo Flores'
      materia='Matemáticas'
      description='Tutora de matemáticas para niños y adolescentes'
      price='$15.00 / 1 hora'
      calification='5.0'
       />

      <CardContent 
      img='./Rectangle 974.png'
      name='Lisa Sotelo Flores'
      materia='Matemáticas'
      description='Tutora de matemáticas para niños y adolescentes'
      price='$15.00 / 1 hora'
      calification='5.0'
      />

      <CardContent 
      img='./Rectangle 974.png'
      name='Lisa Sotelo Flores'
      materia='Matemáticas'
      description='Tutora de matemáticas para niños y adolescentes'
      price='$15.00 / 1 hora'
      calification='5.0'
      />

      <CardContent 
      img='./Rectangle 974.png'
      name='Lisa Sotelo Flores'
      materia='Matemáticas'
      description='Tutora de matemáticas para niños y adolescentes'
      price='$15.00 / 1 hora'
      calification='5.0'
      />

      <CardContent 
      img='./Rectangle 974.png'
      name='Lisa Sotelo Flores'
      materia='Matemáticas'
      description='Tutora de matemáticas para niños y adolescentes'
      price='$15.00 / 1 hora'
      calification='5.0'
      />
       
      <CardContent 
      img='./Rectangle 974.png'
      name='Lisa Sotelo Flores'
      materia='Matemáticas'
      description='Tutora de matemáticas para niños y adolescentes'
      price='$15.00 / 1 hora'
      calification='5.0'
       />        
    </div>
  )
}


 function CardContent(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt="" />
        <h2 className='card__name'>{props.name}</h2>
        <h5 className='card__materia'>{props.materia}</h5>
        <p className="description">{props.description}</p>
      </div>
      <div>
      <span className='price'>{props.price}</span>
      <span className='calification'>{props.calification}</span>
      </div>
    
      
      
    </div>
  )
}
















// function TeacherCard() {
//   return (
//     <div>
//       <div className='row'>
//       <StyledCard className='col-4'>
//         <Card.Img variant="top" src="/Rectangle 974.png" />        
//         <h5>Lisa Sotelo Flores</h5>
//         <p>Matemáticas</p>
//         <p>Tutora de matemáticas para niños y adolescentes</p>
//         <div className="d-flex">
//         <Badge bg="info" pill width="3rem">$15.00 / h</Badge>
//         <p>5.0</p>
//         </div>
//     </StyledCard>
//               {/* CARD 2 */}
//     <StyledCard className='col-4'>
//       <Card.Img variant="top" src="/Rectangle 976.png" /> 
//         <h5>Lisa Sotelo Flores</h5>
//         <p>Musica-Piano</p>
//         <p>Instructora de piano con más de 5 años de experien...</p>
//         <div className="d-flex space-between">
//         <Badge bg="info" pill width="3rem">$15.00 / h</Badge>
//         <p>5.0</p>
//         </div>
//     </StyledCard>
//             {/* CARD 3 */}
//     <StyledCard className='col-4'>
//         <Card.Img variant="top" src="/Rectangle 978.png" /> 
//         <h5>Lisa Sotelo Flores</h5>
//         <p>Fisica - Química</p>
//         <p>Magister en ciencias aplicadas y Titulada en Fisi...</p>
//         <div className="d-flex">
//         <Badge bg="info" pill width="3rem">$15.00 / h</Badge>
//         <p>5.0</p>
//         </div>
//     </StyledCard>


//       </div>
//     </div>
    

//   );
// }

// export default TeacherCard;
