import styled from "styled-components";
import { colors } from '../../../Styles/colors';
import {CgPhone} from 'react-icons/cg';
import {BsCalendar} from 'react-icons/bs';



export const Card = styled.div`
font-family: 'Inter';
box-sizing: border-box;
width: 26.9rem;


.wrapper-grid{
    display: grid;
    grid-template-columns: minmax(300px, 1fr);
    justify-content: center;      
}

.contenedor {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    background-color: ${colors.bgWhite};   
}

.banner-img{
    position: absolute;
    background-image: url("Rectangle 1057.svg");
    height: 10rem;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
}

.profile-img {
    width: 9rem;
    clip-path:  circle(50% at center);
    margin-top: 4.5rem;
}

img{
    border: 1px solid #fff;
    border-radius: 50%;   
}

.name {
    font-weight: 600;
    font-size: 28px;
    padding: 1rem 8rem;
    color: ${colors.tittlePurpleColor};
}

p {
    font-weight: 400;
    font-size: 20px;
    color: ${colors.textColor};
}

.email{
    margin-bottom: 2rem;
    font-size: 18px;
}

.number{
    
}
 .description{
    margin: 20px 2.5rem 4rem 2.5rem;
    text-align:  start;
    font-size: 19px;
 }

`;

export const Phone = styled(CgPhone)`
margin: 0 4px 4px 0;
`;

export const Calendar = styled(BsCalendar)`
    margin: 0 4px 4px 0;
`;

