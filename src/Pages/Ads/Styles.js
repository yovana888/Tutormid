import styled from "styled-components";
import { colors }  from "../../Styles/colors";


export const BodyAds = styled.div `
background-color: ${colors.bgLight2};

.results {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 22px;
    padding: 2rem 0;
    color: ${colors.primaryColor};
}

.btn-ads {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
}

`;