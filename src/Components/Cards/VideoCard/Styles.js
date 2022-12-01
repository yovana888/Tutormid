import  Card  from 'react-bootstrap/Card';
import styled from 'styled-components';
import { colors }  from '../../../Styles/colors';


export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 19rem));
    gap: 2rem;
    justify-content: center;
    box-sizing: border-box;
    height: 21rem;
    
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

.CardImage {
    object-fit: none;
    border-radius: 12px 12px 0px 0px;
    
    
    
};

.CardBody {
    padding: 1.2rem;
};

.iconSection {
    display: flex;
    justify-content: space-around;
}

.hoursShare {
    display: flex;
    justify-content: space-around;
    
    font-weight: 500;
    color: ${colors.priceCardColor};
   
}
`;


