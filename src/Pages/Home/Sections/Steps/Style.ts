import styled from "styled-components";

export const Container = styled.div`
  padding: 3.3rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const ContainerImage = styled.div`
   display:flex;
   justify-content: center;
   align-items:center;
   margin-bottom:4rem;
    img{ 
        width:90%;
        @media screen and (max-width: 768px) {
            width:80%;
        }
    }
`
