import React, { useState, useEffect } from "react";
import Button from "../../Components/Elements/Button/Button";
import { Container, Title } from "./Style";
import { Link } from "react-router-dom";

export default function NotFounf() {
  
  return (
    <Container>
      <Title>Miauuu!, página no encontrada...</Title>
      <img src="/404cat.gif" alt="" />
      <div>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Button color="primary" size="lg-size" type="button" text={'Volver Inicio'}/>
        </Link>
      </div>
    </Container>
  );
}
