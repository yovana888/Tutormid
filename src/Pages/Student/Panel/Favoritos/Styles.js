import styled from "styled-components";
import { colors } from '../../../../Styles/colors';
import { GrStar } from 'react-icons/gr';
import { BiBookContent } from 'react-icons/bi';



export const FavBody = styled.div`
    font-family: 'Inter';
    display: grid;
    grid-template-columns: minmax(300px, 1fr);
    justify-content: center;
    grid-gap: 2rem;
    margin: 2rem;

.contenedor {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    background-color: ${colors.bgWhite};
}

.title{
    text-align: start;
    font-weight: 400;
    padding: 2.1rem 2.6rem;
    color: ${colors.darkPrimaryColor};
}

.empty-box{
    display: grid;
    color: ${colors.textMutedColor};
    padding-bottom: 2.9rem;
    
    
}

.full-box{
    text-align: start;
    padding-left: 2.6rem;
}
`;

export const StarIcon = styled(GrStar)`
    width: 80px;
    height: 80px;    
`;


export const BookContent = styled(BiBookContent)`
     color: #FF384B;
      
`;