(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),l=c(3),n=c(12),o=c(4),r=c(10),d=c(11);const i=e=>({type:"currentTodo/SET",payload:e}),j=()=>({type:"currentTodo/REMOVE"});var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}};const h=e=>({type:"filter/SET_QUERY",payload:e}),b=e=>({type:"filter/SET_STATUS",payload:e}),m=()=>({type:"filter/RESET_QUERY"});var O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:"all"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return{...e,query:t.payload};case"filter/SET_STATUS":return{...e,status:t.payload};case"filter/RESET_QUERY":return{...e,query:""};default:return e}};const x=e=>({type:"todos/SET",payload:e});var p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e};const v=Object(o.combineReducers)({currentTodo:u,filter:O,todos:p}),f=Object(o.createStore)(v,Object(r.composeWithDevTools)(Object(o.applyMiddleware)(d.a)));var y=c(0),N=(c(20),c(21),c(8)),T=c.n(N);const E=l.b,g=l.c;let S;!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(S||(S={}));var C=c(1);const k=()=>{const e=g((e=>e.todos)),t=g((e=>e.filter)),c=g((e=>e.currentTodo)),{query:s,status:a}=t,l=E(),n=Object(y.useMemo)((()=>{let t=[...e];return a&&(t=t.filter((e=>{switch(a){case S.ALL:return e;case S.ACTIVE:return!e.completed;case S.COMPLETED:return e.completed;default:return e}}))),s.trim()&&(t=t.filter((e=>e.title.toLowerCase().includes(s.toLowerCase())))),t}),[e,t,s]);return Object(C.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:" "})]})}),Object(C.jsx)("tbody",{children:n.map((e=>{const{id:t,title:s,completed:a}=e;return Object(C.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(C.jsx)("td",{className:"is-vcentered",children:t}),a?Object(C.jsx)("td",{className:"is-vcentered",children:Object(C.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(C.jsx)("i",{className:"fas fa-check"})})}):Object(C.jsx)("td",{className:"is-vcentered"}),Object(C.jsx)("td",{className:"is-vcentered is-expanded",children:Object(C.jsx)("p",{className:T()({"has-text-success":a},{"has-text-danger":!a}),children:s})}),Object(C.jsx)("td",{className:"has-text-right is-vcentered",children:Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:()=>(e=>{e&&l(i(e))})(e),children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:T()("far",{"fa-eye":c!==e},{"fa-eye-slash":c===e})})})})})]},t)}))})]})},w=()=>{const e=g((e=>e.filter)),{query:t,status:c}=e,s=E();return Object(C.jsxs)("form",{className:"field has-addons",onSubmit:e=>{e.preventDefault()},children:[Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("span",{className:"select",children:Object(C.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){s(b(e.target.value))},children:[Object(C.jsx)("option",{value:"all",children:"All"}),Object(C.jsx)("option",{value:"active",children:"Active"}),Object(C.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(C.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(C.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){s(h(e.target.value))}}),Object(C.jsx)("span",{className:"icon is-left",children:Object(C.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(C.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(C.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"button",type:"button",className:"delete",onClick:function(){s(m())}})})]})]})};c(23);const _=()=>Object(C.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(C.jsx)("div",{className:"Loader__content"})});function L(e){const t="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(c=300,new Promise((e=>{setTimeout(e,c)}))).then((()=>fetch(t))).then((e=>e.json()));var c}const R=()=>{const[e,t]=Object(y.useState)(!0),[c,s]=Object(y.useState)(null),a=g((e=>e.currentTodo)),l=E();return Object(y.useEffect)((()=>{var e;a&&(e=a.userId,L("/users/".concat(e))).then(s).finally((()=>{t(!1)}))}),[]),Object(C.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(C.jsx)("div",{className:"modal-background"}),e?Object(C.jsx)(_,{}):Object(C.jsxs)("div",{className:"modal-card",children:[Object(C.jsxs)("header",{className:"modal-card-head",children:[Object(C.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===a||void 0===a?void 0:a.id)}),Object(C.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:()=>{l(j())}})]}),Object(C.jsxs)("div",{className:"modal-card-body",children:[Object(C.jsx)("p",{className:"block","data-cy":"modal-title",children:null===a||void 0===a?void 0:a.title}),Object(C.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==a&&void 0!==a&&a.completed?Object(C.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(C.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(C.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})},A=()=>{const[e,t]=Object(y.useState)(!1),c=g((e=>e.todos)),s=g((e=>e.currentTodo)),a=E();return Object(y.useEffect)((()=>{t(!0),L("/todos").then((e=>a(x(e)))).finally((()=>t(!1)))}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"section",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"box",children:[Object(C.jsx)("h1",{className:"title",children:"Todos:"}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(w,{})}),Object(C.jsxs)("div",{className:"block",children:[e&&Object(C.jsx)(_,{}),!e&&c.length>0&&Object(C.jsx)(k,{})]})]})})}),s&&Object(C.jsx)(R,{})]})},M=()=>Object(C.jsx)(l.a,{store:f,children:Object(C.jsx)(n.a,{children:Object(C.jsx)(A,{})})});a.a.render(Object(C.jsx)(M,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.27bac99c.chunk.js.map