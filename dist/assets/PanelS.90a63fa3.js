import{s as o,c as r,r as m,j as e,a as i,A as p,L as h,F as s}from"./index.ebe67edf.js";import{P as u}from"./ProfileCard.d22798a1.js";import{G as g}from"./iconBase.2ca0f33d.js";import{B as x}from"./index.esm.b806443e.js";import{B as f}from"./Button.b338f9cc.js";import"./index.esm.3835afb2.js";import"./ThemeProvider.b4733c37.js";import"./NavbarContext.a0f3fddc.js";import"./extends.a18a37bd.js";import"./useWindow.75ee041c.js";import"./Button.375fb275.js";import"./index.esm.d0ed7035.js";import"./index.esm.af26c755.js";import"./NewModal.9c318701.js";import"./setPrototypeOf.41d9bd23.js";import"./TextField.059cdd04.js";import"./CardHeaderContext.08225436.js";import"./ElementChildren.6068e26a.js";const b=o.div`
    background-color: ${r.bgLight2};
    box-sizing: border-box;
    padding-top: 3rem;
    

`,y=o.div`
    background-color: ${r.bgWhite};
    font-family: 'Inter';
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin-bottom: 2rem;
    padding: 2.3rem 1.3rem;

h4{
    font-weight: 400;
    color: ${r.darkPrimaryColor};
    padding-bottom: 1.4rem;
}

p{
    font-weight: 400;
    font-size: 16px;
    color: ${r.textColor};
}

img{
    
}

a{
    text-decoration: none;
}
`,v=o.div`
    background-color: ${r.bgWhite};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.5rem, 53rem));
    font-family: 'Inter';
    padding: 2rem 3rem;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    
h4{
    font-weight: 400;
    color: ${r.darkPrimaryColor};
    padding-bottom: 1.4rem;
}

.empty-box{
    text-align: center;
    color: ${r.textMutedColor};

}

.full-box{
   /*  display: flex;
    justify-content: space-between; */
    color: ${r.textColor};
}

.fecha {
    color: ${r.dateColor};
}

.list{
    /* display: flex; */
}

.name-list{
    padding-right: 2rem;
}

.status{
    font-weight: bold;
    padding-left: 5rem; 
}

.pending{
    color: ${r.orangeColor};
}

.acept{
    color: ${r.greenColor};
}

.cancel{
    color: ${r.cancelColor};
}

.refused{
    color: ${r.redColor};
}
`;function C(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fillRule:"evenodd",points:"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"}}]})(t)}const c=o.div`
    font-family: 'Inter';
    display: grid;
    grid-template-columns: minmax(300px, 1fr);
    justify-content: center;
    grid-gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 991px) {
        margin: 2rem 0;
    }

.contenedor {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    background-color: ${r.bgWhite};
}

.title{
    text-align: start;
    font-weight: 400;
    padding: 1rem 2.6rem;
    color: ${r.darkPrimaryColor};
}

.empty-box{
    display: grid;
    color: ${r.textMutedColor};
    padding-bottom: 2.9rem;
    
    
}

.full-box{
    text-align: start;
    padding-left: 2.6rem;
}
`,N=o(C)`
    width: 80px;
    height: 80px;    
`,d=o(x)`
     color: #FF384B;
      
`;function w({idUser:t}){const[a,n]=m.exports.useState(!1);return a?e(c,{children:i("div",{className:"contenedor",children:[e("h4",{className:"title",children:"Mis Favoritos"}),i("div",{className:"empty-box",children:[e("span",{children:e(N,{})}),e("span",{children:"A\xFAn no tienes favoritos"})]})]})}):e(c,{children:i("div",{className:"contenedor",children:[e("h4",{className:"title",children:"Mis Favoritos"}),i("div",{className:"full-box",children:[i("p",{children:[e(d,{})," Lisa Sotelo"]}),i("p",{children:[e(d,{})," Camila Flores"]}),i("p",{children:[e(d,{})," Jhonatan Jimenez"]})]})]})})}function E(){const{user:t}=m.exports.useContext(p);let a=[{fecha:"Hoy",teachers:[{name:"Lisa Sotelo Quispe",materia:"Matematica Financiera",status:"Pendiente",style:"pending"}]},{fecha:"10-12-22",teachers:[{name:"Lisa Sotelo Quispe",materia:"Matematica Financiera",status:"Aceptado",style:"acept"},{name:"Lisa Sotelo Quispe",materia:"Matematica Financiera",status:"Cancelado",style:"cancel"}]},{fecha:"10-10-22",teachers:[{name:"Lisa Sotelo Quispe",materia:"Matematica Financiera",status:"Rechazado",style:"refused"}]}];return e(b,{children:e("div",{className:"container",children:i("div",{className:"row ",children:[i("div",{className:"col-md-5",children:[e(u,{img:t.photo_url,name:t.full_name,email:t.email,number:t.phone,date:t.datebirthay,description:t.about_me,isStudent:!0}),e(w,{idUser:t.id})]}),i("div",{className:"col-md-7",children:[e(y,{children:e("div",{className:"container",children:i("div",{className:"row",children:[i("div",{className:"col-md-7 left-side",children:[i("h4",{children:["\u{1F44B}  Bienvenid@ ",t.full_name.split(" ")[0]]}),e("p",{children:"Recuerda que puedes buscar a tu profesor ideal con los filtros que selecciones."}),e(h,{to:"/ads",children:e(f,{text:"Ver Profesores",color:"outline"})})]}),e("div",{className:"col-md-5 right-img",children:e("img",{className:"",src:"/image 58.svg",alt:""})})]})})}),i(v,{children:[e("h4",{children:"Mis solicitudes de clases"}),a.length?e(s,{children:e("div",{className:"full-box",children:e("div",{className:"list",children:a.map(n=>i(s,{children:[i("div",{className:"d-flex justify-content-between align-items-center",children:[e("span",{className:"fecha",children:n.fecha})," ",e(F,{secondaryColor:"grey"})]}),n.teachers.map(l=>i("ul",{className:"list-unstyled d-flex justify-content-between",children:[e("li",{children:l.name}),e("li",{children:l.materia}),e("li",{children:e("span",{className:l.style,children:l.status})}),e("li",{})]}))]}))})})}):e(s,{children:i("div",{className:"empty-box",children:[e("img",{src:"/image 61.svg",alt:""}),e("p",{children:"Aqu\xED aparecer\xE1n tus solicitudes de clases"})]})})]})]})]})})})}function F(t){return e("hr",{style:{backgroundColor:t.secondaryColor,height:"1px",width:"84%"}})}export{E as default};
