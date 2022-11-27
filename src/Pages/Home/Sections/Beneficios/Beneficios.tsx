import React from "react";
import { BenefitStyled, TextStyled, ContainerText  } from "./Styles";
import Text from "../../../../Components/Elements/Text/Text";
import { dataBeneficios } from "./data";
export default function Beneficios() {
  return (
    <BenefitStyled>
        <div className="row">
          <ContainerText className="col-12 col-sm-12 col-md-8">

            <Text name="Descubre qué ofrece Tutormid" className="text-white" /><br />

            {dataBeneficios.map((item) => (
              <div className="d-flex" key={item.id}>
                <TextStyled  className="text-white">
                  {item.icon} <span>{item.text}</span>
                </TextStyled>
              </div>
            ))}

          </ContainerText>
          <div className="col-12 col-sm-12 col-md-4 align-self-end">
            <div className="imagen ">
              <img className="img-fluid" src="/foto_beneficios.svg" alt="" />
            </div>
          </div>
        </div>
    </BenefitStyled>
  );
}
