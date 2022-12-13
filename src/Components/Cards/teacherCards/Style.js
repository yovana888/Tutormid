import  Card  from 'react-bootstrap/Card';
import styled from 'styled-components';
import { colors }  from '../../../Styles/colors';


export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 19rem));
    gap: 2rem;
    justify-content: center;
    margin-bottom: 2.5rem;
`;


export const CardStyle = styled(Card)`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    cursor: pointer;
    transition: transform 200ms ease-in;
    font-family: 'Inter';
    border: none;
    max-width: 20rem;   
    min-width: 15rem;
`;

export const CardBody = styled.div `
    padding: 1.2rem;
`;

export const CardImage = styled.img `
    height: 12rem;
    max-width: 20rem;   
    min-width: 15rem;
    object-fit: none;
    border-radius: 12px 12px 0px 0px;
`;

export const CardName = styled.h2 `
    font-weight: 500;
    font-size: 17px;
    color: ${colors.nameTeacherColor};
`;

export const CardMateria = styled.h5 `
    font-weight: 400;
    font-size: 17px;
    color: ${colors.materiaColor};
    padding-bottom: 0.5rem;
`;

export const CardDescription = styled.p `
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: ${colors.cardDescriptionColor};
    padding-bottom: 0.7rem;
`;

export const Price = styled.span `
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: ${colors.darkPrimaryColor};
    padding-bottom: 0.7rem;
`;

export const Calification = styled.span `
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: ${colors.nameTeacherColor};
    padding-bottom: 0.7rem;
`;
