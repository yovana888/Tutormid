import{s as m,r as d,u as g,d as x,Q as s,a as l,j as a,L as v}from"./index.b242ee12.js";import{T as p}from"./TextField.4fa8fd50.js";import{B as S}from"./Button.0891ecfe.js";import{u as b,c as I,T as c,N as T}from"./auth.c905aab5.js";import{b as y}from"./index.esm.9283ee80.js";import"./iconBase.593b40a0.js";const C=m.div`
   display: grid;
   height: 100vh;
   align-content: center;
   justify-content: center;
   >img{
    margin: 0 auto;
    margin-bottom:20px;
   }
`,P=m.form`
    width:30rem;
    padding:15px;
    display:flex;
    flex-direction:column;
    gap:20px;
    @media screen and (max-width: 570px) {
        width: 80vw;
    }
`;function R(){const[o,i]=d.exports.useState(!1),[t,u]=d.exports.useState(!1),h=g(),e=b({initialValues:{password:"",repeatpassword:""},validationSchema:I,isInitialValid:!0,onSubmit:function(r){w(r.password)}}),w=async r=>{i(!0);const{data:f,error:n}=await x.auth.updateUser({password:r});f&&(s.info("Su contrase\xF1a se actualiz\xF3 exitosamente",{position:s.POSITION.TOP_RIGHT}),h("/")),n&&s.info(n.toString(),{position:s.POSITION.TOP_RIGHT}),i(!1)};return l(C,{children:[a("img",{src:"/Logo.svg",alt:"",width:130}),l(P,{onSubmit:e.handleSubmit,children:[a(p,{icon:a(y,{onClick:()=>{u(!t)}}),edge:"end",label:"Ingresa tu nueva contrase\xF1a",type:t?"text":"password",placeholder:"************",width100:!0,name:"password",onChange:e.handleChange,value:e.values.password}),e.touched.password&&e.errors.password&&a(c,{children:e.errors.password}),a(p,{edge:"end",label:"Confirmar contrase\xF1a",type:t?"text":"password",placeholder:"************",width100:!0,name:"repeatpassword",onChange:e.handleChange,value:e.values.repeatpassword}),e.touched.repeatpassword&&e.errors.repeatpassword&&a(c,{children:e.errors.repeatpassword}),a(S,{text:o?"Procesando...":"Restablecer Contrase\xF1a",size:"lg-size",type:"submit",className:"mt-2",disabled:!!o}),a("div",{children:a(v,{to:"/",style:{textDecoration:"none"},children:a(T,{name:"Volver a Inicio"})})})]})]})}export{R as default};
