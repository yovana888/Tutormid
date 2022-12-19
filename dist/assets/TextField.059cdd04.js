import{s as e,c as t,r as y,a as i,j as d}from"./index.ebe67edf.js";const r=()=>`
    padding: 8px 14px;
    display: inline-block;
    border-radius: 5px;
    box-sizing: border-box;
    color:${t.textColor};
    outline: none;
    transition: border .1s ease-in-out;
    &:focus {
        border: 1px solid #5C4D9C;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color:${t.placeholderColor}
    }
`;e.input`
    ${r()}
`;const C=e.span`
    color:${t.secondaryColor};
   
`;e.textarea`
    ${r()}
`;const $=e.div`
    span {
        margin-bottom: 8px;
        display: block;
    }
`,B=e.input`
    ${r()}
    border: none;
    &:focus {
        border: none;
    }
`,m=e.div`
    ${r()}
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border: 1px solid ${({isFocus:o})=>o?t.primaryColor:t.borderInput};
    ${({edge:o})=>o&&(o==="start"?"padding-left: 12px; color:#B2BBCB":"padding-right: 12px; color:#B2BBCB")};
    svg {
        cursor: pointer;
    }
    input{
        width: 100%;
    }
`,g=({classes:o="",icon:n=null,edge:s=null,placeholder:c="",label:l,type:p="text",name:u,onChange:x,isReadOnly:b=!1,width100:f=!1,value:F=""})=>{const[h,a]=y.exports.useState(!1);return i($,{className:o,onFocus:()=>a(!0),onBlur:()=>a(!1),children:[l?d(C,{children:l}):null,i(m,{isFocus:h,edge:s,style:{width:f?"100%":"30ch"},children:[s==="start"?n:null,d(B,{placeholder:c,type:p,name:u,onChange:x,readOnly:b}),s==="end"?n:null]})]})},v=g;export{v as T};
