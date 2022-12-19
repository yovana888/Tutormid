import{s as a,c as e,j as r,a as o}from"./index.b242ee12.js";import{B as s}from"./Button.0891ecfe.js";import{d as n,e as d}from"./index.esm.a38c61bb.js";import{B as l}from"./index.esm.16243625.js";import{a as t}from"./index.esm.08e251e5.js";import{B as c}from"./Button.b317a860.js";import"./iconBase.593b40a0.js";import"./ThemeProvider.921e4875.js";import"./Button.12c2e030.js";const m=a.div`
    background-color: ${e.bgLight2};
    padding: 4rem 0;
    font-family: 'Inter';

`,i=a.div`
    background-color: ${e.bgWhite};
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin-bottom: 2rem;
    padding: 2rem 1.3rem;

    h4 {
        color: ${e.darkColor};
        font-weight: 500;        
    }

    p {
        color: ${e.textColor};
    }

    .active {
        color: ${e.materiaColor};
        text-decoration: underline;
    }

/*--------- {ITEMS} -------------*/
    &.items {
        padding: 1rem;      
       
        .text-item {
            padding-left: 10px;
        }
        p {
            margin-bottom: 3px;
            color: ${e.secondaryColor};
            font-size: 20px;
        }

        span {
            color: ${e.bgPurple2};
            font-size: 20px;
        }
    }

/*--------- {ITEMS} -------------*/
    &.acerca{
        padding: 2.5rem;

        h4 {
            color: ${e.nameTeacherColor};
            font-weight: 500;
        }

        p {
            color: ${e.cardDescriptionColor};
            padding: 10px 5rem 0 0;
            font-size: 20px;
            
            
        }
    }
`,p=a(n)`
    font-size: 30px;

    &:hover{
        color: ${e.primaryColor};
     }
 
`,h=a(t)`
    font-size: 30px;
    
    &:hover{
        color: ${e.primaryColor};
     }

`,g=a(c)`
     background-color: ${e.primaryColor};
     border: 1px solid ${e.primaryColor};
     margin-right: 2rem;

     &:hover{
        background-color: #fff;
        border: 1px solid ${e.primaryColor};
        color: ${e.primaryColor};
     }

     &:active {
        background-color: ${e.primaryColor} !important;
        border: 1px solid ${e.bgWhite} !important;
     }
`,x=a(c)`
     background-color: ${e.primaryColor};
     border: 1px solid ${e.primaryColor};
     margin-right: 2rem;

     &:hover{
        background-color: #fff;
        border: 1px solid ${e.primaryColor};
        color: ${e.primaryColor};
     }

     &:active {
        background-color: ${e.primaryColor} !important;
        border: 1px solid ${e.bgWhite} !important;
     }
`;function k(){return r(m,{children:r("div",{className:"container",children:o("div",{className:"row ",children:[o("div",{className:"right-side col-md-3 col-12 mb-4",children:[o(i,{className:"",children:[r("h4",{children:"Mis Anuncios"}),o("p",{className:"active",children:[r("span",{className:"me-2",children:r(l,{})}),"Matematica Financiera"]}),o("p",{children:[r("span",{className:"me-2",children:r(l,{})}),"Matematica General"]}),o("p",{children:[r("span",{className:"me-2",children:r(l,{})}),"Algrebra"]})]}),r(s,{icon:r(d,{}),text:"Crear Otro",color:"outline",size:"adst-size"})]}),o("div",{className:"left-side col-md-9 col-12",children:[o("div",{className:"row",children:[r("div",{className:"col-12 col-lg-4",children:o(i,{className:"d-flex items",children:[r("img",{src:"/image 70.svg",alt:""}),o("div",{className:"text-item",children:[r("p",{children:"Diridigido"}),r("span",{children:" Universitarios"})]})]})}),r("div",{className:"col-12 col-lg-4",children:o(i,{className:"d-flex items",children:[r("img",{src:"/image 71.svg",alt:""}),o("div",{className:"text-item",children:[r("p",{children:"Tarifa"}),r("span",{children:" S/ 25.00 - 30min"})]})]})}),r("div",{className:"col-12 col-lg-4",children:o(i,{className:"d-flex items",children:[r("img",{src:"/image 69.svg",alt:""}),o("div",{className:"text-item",children:[r("p",{children:"Nivel"}),r("span",{children:" General"})]})]})})]}),o(i,{className:"acerca",children:[r("h4",{children:"Acerca del curso y mi metodolog\xEDa de ense\xF1anza"}),r("p",{children:"La metodolog\xEDa del trabajo para comprender este mundo, consiste en explicarla teor\xEDa con ejemplos de la vida cotidiana, ya que la Matem\xE1tica se manifiestaen cualquier parte del mundo de distintas formas:paisajes,pinturas en lienzo,en lasplantas,en animales,en obras art\xEDsticas,etc."})]}),r(i,{className:"horario img-fluid",children:r("img",{src:"/horario.png",alt:"",className:"img-fluid"})}),o("div",{className:"btns d-flex ",children:[r(g,{children:r(p,{})}),r(x,{children:r(h,{})})]})]})]})})})}export{k as default};
