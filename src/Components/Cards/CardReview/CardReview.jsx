import React from "react";
import { Col } from 'react-bootstrap'
import { Card } from './Style'


export default function CardReview({ text, author }) {
  return (
    <Col className="d-flex justify-content-center" md={6} lg={4} sm={12} xs={12}>
      <Card>
          <img src="./src/assets/icon-comillas.svg" alt="" />
          <p className="px-4">{text} <br /> <b>{author} </b> </p>
      </Card>
    </Col>
  );
}
