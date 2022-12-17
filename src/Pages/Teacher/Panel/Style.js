import {colors} from '../../../Styles/colors'
import styled from 'styled-components';


export const PanelBody = styled.div`
    background-color: ${colors.bgLight2};
    box-sizing: border-box;
    height: 100vh;

`;

export const Welcome = styled.div`
    background-color: ${colors.bgWhite};
    font-family: 'Inter';
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin: 2rem 0;
    padding: 2.3rem 1.3rem ;

h4{
    font-weight: 400;
    color: ${colors.darkPrimaryColor};
    padding-bottom: 1.4rem;
}

p{
    font-weight: 400;
    font-size: 16px;
    color: ${colors.textColor};
}

img{
    
}

a{
    text-decoration: none;
}
`;

export const Solicitudes = styled.div`
    background-color: ${colors.bgWhite};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.5rem, 53rem));
    font-family: 'Inter';
    padding: 2rem 3rem;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    
h4{
    font-weight: 400;
    color: ${colors.darkPrimaryColor};
    padding-bottom: 1.4rem;
}

.empty-box{
    text-align: center;
    color: ${colors.textMutedColor};

}

.full-box{
   /*  display: flex;
    justify-content: space-between; */
    color: ${colors.textColor};
}

.list{
    display: flex;
}

.name-list{
    padding-right: 2rem;
}

.status{
    font-weight: bold;
    padding-left: 5rem; 
}

.pending{
    color: ${colors.orangeColor};
}

.acept{
    color: ${colors.greenColor};
}

.cancel{
    color: ${colors.cancelColor};
}

.refused{
    color: ${colors.redColor};
}
`;