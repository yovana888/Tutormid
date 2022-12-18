import styled from 'styled-components';

export const Container = styled.div`
   display: grid;
   height: 100vh;
   align-content: center;
   justify-content: center;
   >img{
    margin: 0 auto;
    margin-bottom:20px;
   }
`;

export const FormContainer = styled.form`
    width:30rem;
    padding:15px;
    display:flex;
    flex-direction:column;
    gap:20px;
    @media screen and (max-width: 570px) {
        width: 80vw;
    }
`