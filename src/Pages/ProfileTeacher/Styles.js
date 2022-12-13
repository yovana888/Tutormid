import styled from "styled-components";
import { colors } from "../../Styles/colors";


const seccions = () => (`
    background-color: ${colors.bgWhite};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.5rem, 53rem));
    /* width: 53rem; */
    font-family: 'Inter';
    padding: 2rem 3rem;
    box-sizing: border-box;
    border: 1px solid #D4D6DB;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    /* margin-left: 5rem; */
`);


export const ProfileTbody = styled.div `
    background-color: ${colors.bgLight2};
    padding: 4em 2em;
`;


export const Metodo = styled.div `
${seccions}
margin-bottom: 3rem;

p {
    font-weight: 400;
    color: ${colors.cardDescriptionColor};
    font-size: 22px;
    margin-top: 1rem;
}
`;


export const Horario = styled.div `
  ${seccions}
  margin-bottom: 3rem;
`;

export const Estudios = styled.div `
  ${seccions}
  margin-bottom: 3rem;
  
p {
    font-weight: 400;
    color: ${colors.cardDescriptionColor};
    font-size: 22px;
    margin-top: 1rem;
}  
`;

export const ComentsSection = styled.div `
  ${seccions}
  margin-bottom: 3rem;
`;


