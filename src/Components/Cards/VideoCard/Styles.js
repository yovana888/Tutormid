import  Card  from 'react-bootstrap/Card';
import styled from 'styled-components';
import { colors }  from '../../../Styles/colors';



export const CardStyle = styled(Card)`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    cursor: pointer;
    font-family: 'Inter';
    border: none;
    width: 100%;


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
    padding-top: 1rem;
}

.hoursShare {
    display: flex;
    justify-content: space-evenly;
    font-weight: 500;
    color: ${colors.darkPrimaryColor};
}

.btn-area {
    padding: 0 1em 1em 1em;
}
`;


