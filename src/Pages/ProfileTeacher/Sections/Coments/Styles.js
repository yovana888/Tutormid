import styled from "styled-components";
import { colors } from '../../../../Styles/colors'

export const BodyComents = styled.div `
    font-family: 'Inter';
    padding: 0 3rem 0 2rem;

h4 {
    padding-bottom: 2rem;
}

.section {
    display: flex;
    justify-content: space-between;
}

.content {
    margin-left: 2rem;
}

.nameStar {
    display: flex;
    justify-content: space-between;
}  

.name {
    color: ${colors.materiaColor};
    font-weight: 500;
    margin-bottom: 7px;
}

.date {
    margin-bottom: 7px;
    
}

.text {
    color: ${colors.cardDescriptionColor};
    font-size: 19px;
}


`;