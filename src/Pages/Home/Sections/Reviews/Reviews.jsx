import React from 'react'
import Text from '../../../../Components/Elements/Text/Text';
import CardReview from '../../../../Components/Cards/CardReview/CardReview';
import { dataReviews } from './dataReviews';
import { Row } from 'react-bootstrap';
import { ContainerCards,Container } from './Style'
export default function Reviews() {

  return (
      <Container> 
        <Text name='Descubre qué dicen nuestros estudiantes' className='text-center'/>
        <ContainerCards>
            <Row> 
                {
                    dataReviews.map(item=> (
                        <CardReview key={item.id} text={item.text} author={item.author} />
                    ))
                }
            </Row> 
        </ContainerCards>
    </Container>
  )
}

