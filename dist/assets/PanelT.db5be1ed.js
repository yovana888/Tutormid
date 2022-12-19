import{s as l,c as i,r as p,A as u,j as e,a,F as s}from"./index.ebe67edf.js";import{o as x,p as g}from"./index.esm.d0ed7035.js";import{a as f}from"./index.esm.29073555.js";import{P as b}from"./ProfileCard.d22798a1.js";import"./iconBase.2ca0f33d.js";import"./index.esm.3835afb2.js";import"./ThemeProvider.b4733c37.js";import"./NavbarContext.a0f3fddc.js";import"./extends.a18a37bd.js";import"./useWindow.75ee041c.js";import"./Button.375fb275.js";import"./index.esm.af26c755.js";import"./NewModal.9c318701.js";import"./setPrototypeOf.41d9bd23.js";import"./TextField.059cdd04.js";import"./Button.b338f9cc.js";import"./CardHeaderContext.08225436.js";import"./ElementChildren.6068e26a.js";const C=l.div`
    background-color: ${i.bgLight2};
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    font-family: 'Inter'; 
    /* padding-bottom: 50px; */

    @media (min-width: 992px) {
        padding: 5.6rem 4.5rem 12rem 4.5rem;
    }

    @media (max-width: 991px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`,w=l.div`
    font-family: 'Inter';   
    /* width: 26.9rem; */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: ${i.bgWhite};
    margin: 2rem 0 0 0;
    padding: 2rem;
    
    h4 {
        color: ${i.darkPrimaryColor};
    }

    .info-studies {
        display: flex;
        
        p {
            margin-left: 13px;
            color: ${i.cardDescriptionColor};
            font-weight: 400;
        }

        .uni {
            color: ${i.tittlePurpleColor};
        }
    }
    `,y=l.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: auto;
    background-color: ${i.bgWhite};
    padding: 2rem;
h4{
    color: ${i.darkPrimaryColor};
    padding-bottom: 1.4rem;
}

.class-day {
    font-size: 20px;
    color: ${i.bgPurple2};
}

.list-class {
    margin-top: 2rem;
}

.list-details {   
    
}

.list-info {
    display: flex;
    margin: 0 2rem 1.5rem 0;
    list-style: none;
    padding: 0;

    @media screen and (max-width: 575px) {
        flex-direction: column;
    }
    
    .hour {
        color: ${i.materiaColor};
        margin-right: 20px;
        font-weight: 400;
        }

        .list-name {
            color: ${i.darkColor};
            margin-right: 30px;
            font-weight: 400;
        }

        .materia-list {
            color: ${i.textColor};
            font-weight: 300;

            display: flex;
            justify-content: space-between;
            width: 35%;

            @media (min-width: 576px) and (max-width: 992px) {
                width: 40%;
            }

            @media (min-width: 381px) and (max-width: 575px) {
                width: 80%;
                svg { 
                    margin-top: -25px;
                }
            }

            @media (max-width: 380px) {
                width: 100%;
                svg { 
                    margin-top: -25px;
                }
            }
        }
}




`,v=l.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    /* overflow-x: scroll; */
    background-color: ${i.bgWhite};
    /* padding: 2rem; */
    margin-top: 3.5rem;
    text-align: left;
    
h4{
    font-weight: 400;
    color: ${i.darkPrimaryColor};
    padding-bottom: 1.4rem;
}

.empty-box{
    text-align: center;
    color: ${i.textMutedColor};

}

.full-box{
    color: ${i.textColor};
    padding: 2rem;
    overflow-x: scroll;

    .list {
        min-width: 700px;
    }
}

.title-studies {
    padding: 20px 20px 0 20px;
}

.fecha {
    color: ${i.dateColor};
}


.name-info{
    padding-right: 2rem;
}

.status{
    font-weight: bold;
    padding-left: 5rem; 
}

.pending{
    color: ${i.orangeColor};
}

.acept{
    color: ${i.greenColor};
}

.cancel{
    color: ${i.cancelColor};
}

.refused{
    color: ${i.redColor};
}
`,d=l(x)`
    color: ${i.blueColor};    
`,c=l(f)`
    color: ${i.darkPrimaryColor};   
    width: 24px;
    height: 24px;
    cursor: pointer;
`,N=l(g)`
    color: ${i.darkPrimaryColor};   
    width: 24px;
    height: 24px;
    cursor: pointer;
`;function I(){const{user:r}=p.exports.useContext(u);let n=[{fecha:"Hoy",teachers:[{name:"Lisa Sotelo Quispe",materia:"Matematica Financiera",status:"Pendiente",style:"pending"}]},{fecha:"10-12-22",teachers:[{name:"Lisa Sotelo Quispe",materia:"Matematica Financiera",status:"Aceptado",style:"acept"},{name:"Lisa Sotelo Quispe",materia:"Matematica Financiera",status:"Cancelado",style:"cancel"}]},{fecha:"10-10-22",teachers:[{name:"Lisa Sotelo Quispe",materia:"Matematica Financiera",status:"Rechazado",style:"refused"}]}];return e(C,{children:e("div",{className:"container-fluid",children:a("div",{className:"row",children:[a("div",{className:"col-12 col-md-5",children:[e(b,{img:r.photo_url,name:r.full_name,email:r.email,number:r.phone,date:r.datebirthay,description:r.about_me,isStudent:!1}),e(w,{className:"mb-5",children:a("div",{children:[e("h4",{children:"Mis Estudios"}),r.studies.length>0?r.studies.map(t=>a("div",{className:"info-studies",children:[e("span",{children:e(d,{})}),e("div",{children:a("p",{children:[t.grado,e("br",{})," ",e("span",{className:"uni",children:t.universidad})," "]})})]})):e("div",{className:"info-studies",children:a("span",{children:[e(d,{})," Aqu\xED apareceran tus estudios"]})})]})})]}),a("div",{className:"col-12 col-md-7 ",children:[a(y,{children:[a("h4",{children:["\u{1F44B} Bienvenid@ ",r.full_name.split(" ")[0]]}),e("div",{className:"list-class",children:a("div",{className:"list-details",children:[a("ul",{className:"list-info",children:[e("li",{className:"hour",children:"9:30 - 10:30"}),e("li",{className:"list-name",children:"Julio Perez Chavez"}),a("li",{className:"materia-list",children:["Matematica General",e(c,{})]})]}),a("ul",{className:"list-info",children:[e("li",{className:"hour",children:"9:30 - 10:30"}),e("li",{className:"list-name",children:"Julio Perez Chavez"}),a("li",{className:"materia-list",children:["Matematica General",e(c,{})]})]})]})})]}),a(v,{children:[e("h4",{className:"title-studies",children:"Mis solicitudes de clases"}),n.length?e(s,{children:e("div",{className:"full-box",children:e("div",{className:"list",children:n.map((t,m)=>a(s,{children:[a("div",{className:"d-flex justify-content-between align-items-center",children:[e("span",{className:"fecha",children:t.fecha})," ",e($,{secondaryColor:"grey"})]},m),t.teachers.map((o,h)=>a("ul",{className:"list-unstyled d-flex justify-content-between",children:[e("li",{children:o.name}),e("li",{children:o.materia}),e("li",{children:e("span",{className:o.style,children:o.status})}),e("li",{children:e(N,{})})]},h))]}))})})}):e(s,{children:a("div",{className:"empty-box",children:[e("img",{src:"/image 61.svg",alt:""}),e("p",{children:"Aqu\xED aparecer\xE1n tus solicitudes de clases"})]})})]})]})]})})})}function $(r){return e("hr",{style:{backgroundColor:r.secondaryColor,height:"1px",width:"84%"}})}export{I as default};
