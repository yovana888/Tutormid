import styled, { keyframes } from "styled-components"

const Loader = () => {
  return (
    <Load>
    <div></div>
    <Loadtwo></Loadtwo>
    <Loadthree></Loadthree>
    </Load>
  )
}

export default Loader

const loading = keyframes`
    to {
        opacity: 0.3;
        transform: translateY(-25px);
        -webkit-transform: translateY(-25px);
        -moz-transform: translateY(-25px);
        -ms-transform: translateY(-25px);
        -o-transform: translateY(-25px);
}
`;

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
   > div {
    width: 25px;
    height: 25px;
    background-color: orchid;
    margin-left: 5px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    margin-top: calc(50px - 12.5px);
    animation-name: ${loading};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
   }`;

const Loadtwo = styled.div`
animation-delay: 0.4s;
`;
const Loadthree = styled.div`
animation-delay: 0.8s;
`;



