import{s as p,c as s,r,a as c,j as e,F as I}from"./index.b242ee12.js";import{B as l}from"./Button.0891ecfe.js";import{a as N,b as T}from"./Style.571d87f9.js";import{T as u}from"./TextField.4fa8fd50.js";import{a as z}from"./index.esm.9283ee80.js";import{a}from"./index.esm.c04cd392.js";import{N as i}from"./NewSelect.0c823722.js";import{D as n}from"./Dropdown.ef28eb4d.js";import"./iconBase.593b40a0.js";import"./useWindow.94bff523.js";import"./ThemeProvider.921e4875.js";import"./extends.a18a37bd.js";import"./setPrototypeOf.41d9bd23.js";import"./NavbarContext.af5f2dbd.js";import"./Button.12c2e030.js";import"./Button.b317a860.js";const F=p(n)`
    height:40px !important;
`,$=p(n.Toggle)`
   height:40px;
   border-radius:5px;
   background:white;
   border:1px solid ${s.borderInput};
   color:${s.textColor};
   text-decoration:none;
   &:hover, &:active {
      background:white;
      border:1px solid ${s.borderInput};
      color:${s.textColor};
   }

`;function j({}){return r.exports.useState([10,90]),r.exports.useState({min:2,max:10}),c(F,{children:[e($,{id:"dropdown-basic",variant:"link",children:"Dropdown Button"}),c(n.Menu,{children:[e(n.Item,{href:"#/action-1",children:"Action"}),e(n.Item,{href:"#/action-2",children:"Another action"}),e(n.Item,{href:"#/action-3",children:"Something else"})]})]})}function U(){const o=[{value:"red",label:"Red"},{value:"green",label:"Green"},{value:"yellow",label:"Yellow"},{value:"blue",label:"Blue",disabled:!0},{value:"white",label:"White"},{value:"orange",label:"Orange"},{value:"purple",label:"Purple"},{value:"prueba",label:"Prueba"},{value:"purple2",label:"purple2"}],[d,b]=r.exports.useState(null);function h(t){b(t)}const[m,x]=r.exports.useState(null);function S(t){x(t)}const[f,g]=r.exports.useState(null);function v(t){g(t)}const[w,O]=r.exports.useState(o[2]);function C(t){O(t)}const[P,B]=r.exports.useState(o[2]);function D(t){B(t)}return c(I,{children:[e(l,{text:"Prueba",icon:e(a,{})})," ",e("br",{}),e(l,{text:"Prueba",icon:e(a,{}),color:"outline"})," ",e("br",{}),e(l,{text:"Prueba",icon:e(a,{}),color:"outline-blue"}),e("br",{}),e(l,{text:"Prueba",color:"outline",isGoogle:!0}),e("br",{}),e(l,{text:"Btn sm",icon:e(a,{}),color:"outline-blue",size:"small-size"}),e("br",{}),e(l,{text:"Btn Large 100%",size:"lg-size"})," ",e("br",{}),e(j,{}),e("br",{}),c(N,{children:[e(l,{text:"Prueba",color:"info",icon:e(a,{})}),e(u,{name:"prueba",placeholder:"prueba"})]}),e("br",{}),e(u,{name:"prueba2",label:"Password",type:"password"}),e("br",{}),e(u,{icon:e(z,{}),edge:"end",label:"Email",placeholder:"Your Email"}),e("br",{}),e(u,{name:"prueba2",label:"100%",width100:!0}),e("br",{}),c(T,{children:[e("p",{children:"Select Normal"}),e(i,{options:o,placeholder:"Select color",value:d,onChange:h}),e("p",{children:"Select sin la opcion de  ni placeholder"}),e(i,{options:o,value:m,onChange:S,isClearable:!1}),e("p",{children:"Select con Buscador"}),e(i,{options:o,value:f,onChange:v,isSearchable:!0}),e("p",{children:"Default Value"}),e(i,{options:o,value:w,onChange:C}),e("p",{children:"Select Multi"}),e(i,{options:o,value:P,onChange:D,isMulti:!0})]})]})}export{U as default};
