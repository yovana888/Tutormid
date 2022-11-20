import styled from 'styled-components';
import { colors }  from '../../../Styles/colors';


export const CardStyle = styled.div`
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;
    width: 20rem;
    height: 26.3rem;
    font-family: 'Inter';
`;

export const CardBody = styled.div `
    padding: 0 1.5rem;
`;

export const CardImage = styled.img `
    height: 12rem;
    width: 20rem;
    
`;

export const CardName = styled.h2 `
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: ${colors.nameTeacherColor};
`;

export const CardMateria = styled.h5 `
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.materiaColor};
`;

export const CardDescription = styled.p `
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.cardDescriptionColor};
`;

export const Price = styled.span `
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${colors.priceCardColor};
`;

export const Calification = styled.span `
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.nameTeacherColor};
`;
