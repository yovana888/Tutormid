import styled from "styled-components";
import { colors } from '../../../Styles/colors';



export const Card = styled.div`
font-family: 'Inter';


.wrapper-grid{
    display: grid;
    grid-template-columns: minmax(300px, 1fr);
    justify-content: center;
    margin: 2rem;
    
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
    width: 8rem;
    clip-path:  circle(60px at center);
    margin-top: 4.5rem;
    

}

img{
    border: 8px solid #fff;
    border-radius: 50%;
  
    
}



.name {
    font-weight: 600;
    font-size: 28px;
    padding: 1.8rem 5rem;
    color: ${colors.tittlePurpleColor};
}

p {
    font-weight: 400;
    font-size: 20px;
    color: ${colors.textColor};
}

.email{
    margin-bottom: 8px;
}

.number{
    margin-bottom: 3rem;
    padding: 0;
}

`;

