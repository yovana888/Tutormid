import React, {useEffect, useState} from 'react'
import { Container, ColumnText, Title, SubTitle, ContainerImage } from './Styles'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewInputGroup from '../../../../Components/Groups/InputGroup/InputGroup';
import Text from '../../../../Components/Elements/Text/Text';
import {
  getCourses,
} from "../../../../supabase/services/ads";

export default function Banner() {
  const [listCourses, setListCourses] = useState([]);

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resCourses = await getCourses();
      if (resCourses.status == 500) throw resCourses.message;
      setListCourses(resCourses);
    } catch (error) {
      toast.error(error.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    } 
  };
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
                <ContainerImage><img src="src/assets/img-banner.svg" alt="img-banner" /></ContainerImage>
           </Row>
        </Container>
    </>
  )
}
