import{s as a,r as d,j as t,a as c,U as l}from"./index.ebe67edf.js";import{f as m,g as u}from"./index.esm.d0ed7035.js";const f=a(m)`
    

&:hover{
    size: 1.6;
}
`,p=a(u)`
      

&:hover{
    size: 1.6;
}
`,x=()=>{const[r,e]=d.exports.useState(!1);function o(s){e(s)}function n(){o(!0)}function i(){o(!1)}return r?t(f,{color:"red",onClick:i}):t(p,{color:"red",onClick:n})},F=x,v=()=>c(b,{children:[t("div",{}),t(k,{}),t(L,{})]}),Y=v,h=l`
    to {
        opacity: 0.3;
        transform: translateY(-25px);
        -webkit-transform: translateY(-25px);
        -moz-transform: translateY(-25px);
        -ms-transform: translateY(-25px);
        -o-transform: translateY(-25px);
}
`,b=a.div`
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
    animation-name: ${h};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
   }`,k=a.div`
animation-delay: 0.4s;
`,L=a.div`
animation-delay: 0.8s;
`;export{F,Y as L};
