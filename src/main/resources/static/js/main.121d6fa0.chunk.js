(this["webpackJsonpforce-point-main"]=this["webpackJsonpforce-point-main"]||[]).push([[0],{158:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),o=n(12),i=n.n(o),b=n(5),u=n(42),j=n(8),s=n(9),O=n(10),l=n(3),d=s.c.input(c||(c=Object(j.a)(["\n  width: 80px;\n  margin-left: 0.5rem;\n  border-radius: 4px;\n  outline: none;\n  border: 1px solid ",";\n"])),O.gray[5]),f=function(e){var t=e.name,n=e.value,c=e.onChange,r=e.onKeyPress;return Object(l.jsx)(d,{type:"text",name:t,value:n,onChange:c,onKeyPress:r,placeholder:t[0].toUpperCase()+t.slice(1)})},g=n(6),v=n(40),h=n(0),m=Object(b.b)({key:"AuthUser",default:""}),x=Object(b.b)({key:"Menu",default:[]}),p=Object(b.b)({key:"Page",default:{currentPage:1,lastPage:1}}),y=Object(b.b)({key:"Counter",default:{value:20,label:"20"}}),T=Object(b.b)({key:"StartTime",default:{date:new Date}}),k=Object(b.b)({key:"EndTime",default:{date:new Date}}),w=Object(b.b)({key:"StartAgentTime",default:{date:new Date}}),C=Object(b.b)({key:"EndAgentTime",default:{date:new Date}}),P=Object(b.b)({key:"Time",default:{visible:!1,value:"",sort:"none"}}),A=Object(b.b)({key:"AgentTime",default:{visible:!1,value:"",sort:"none"}}),D=Object(b.b)({key:"User",default:{visible:!1,value:"",sort:"none"}}),M=Object(b.b)({key:"Agent",default:{visible:!1,value:"",sort:"none"}}),S=Object(b.b)({key:"Person",default:{visible:!1,value:"",sort:"none"}}),B=Object(b.b)({key:"Policy",default:{visible:!1,value:"",sort:"none"}}),Y=Object(b.b)({key:"Application",default:{visible:!1,value:"",sort:"none"}}),F=Object(b.b)({key:"Category",default:{visible:!1,value:"",sort:"none"}}),K=Object(b.b)({key:"Matches",default:{visible:!1,value:"",sort:"none"}}),U=Object(b.b)({key:"Resource",default:{visible:!1,value:"",sort:"none"}}),E=Object(b.b)({key:"Group",default:{visible:!1,value:"",sort:"none"}}),I=Object(b.b)({key:"ListTable",default:[{evidenceId:"",channel:"",evidenceStartTime:new Date,agentTime:new Date,userDim:{label:"",targetUser:{samAccountName:""}},eventType:{label:""},agentDim:{label:""},policy:"",applicationName:"",category:"",matchText:"",resources:"",group:""}]});var N=function(){var e=Object(b.c)(P),t=Object(g.a)(e,2),n=t[0],c=t[1];return{time:n,onToggleTime:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangeTime:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var G=function(){var e=Object(b.c)(A),t=Object(g.a)(e,2),n=t[0],c=t[1];return{agentTime:n,onToggleAgentTime:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangeAgentTime:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var z=function(){var e=Object(b.c)(D),t=Object(g.a)(e,2),n=t[0],c=t[1];return{user:n,onToggleUser:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangeUser:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var L=function(){var e=Object(b.c)(M),t=Object(g.a)(e,2),n=t[0],c=t[1];return{agent:n,onToggleAgent:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangeAgent:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var R=function(){var e=Object(b.c)(S),t=Object(g.a)(e,2),n=t[0],c=t[1];return{person:n,onTogglePerson:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangePerson:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var J=function(){var e=Object(b.c)(B),t=Object(g.a)(e,2),n=t[0],c=t[1];return{policy:n,onTogglePolicy:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangePolicy:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var q=function(){var e=Object(b.c)(Y),t=Object(g.a)(e,2),n=t[0],c=t[1];return{application:n,onToggleApplication:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangeApplication:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var H=function(){var e=Object(b.c)(F),t=Object(g.a)(e,2),n=t[0],c=t[1];return{category:n,onToggleCategory:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangeCategory:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var Q=function(){var e=Object(b.c)(K),t=Object(g.a)(e,2),n=t[0],c=t[1];return{matches:n,onToggleMatches:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangeMatches:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var V=function(){var e=Object(b.c)(E),t=Object(g.a)(e,2),n=t[0],c=t[1];return{group:n,onToggleGroup:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangeGroup:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}};var W,X,Z,$,_,ee,te,ne,ce,re=function(){var e=Object(b.c)(U),t=Object(g.a)(e,2),n=t[0],c=t[1];return{resource:n,onToggleResource:function(e){c(e?function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!1})}:function(e){return Object(h.a)(Object(h.a)({},e),{},{visible:!e.visible})})},onChangeResource:function(e){c((function(t){return Object(h.a)(Object(h.a)({},t),{},{value:e.target.value})}))}}},ae=s.c.div(W||(W=Object(j.a)(["\n  display: flex;\n  .select {\n    min-width: 140px;\n  }\n"]))),oe=[{value:"user",label:"User"},{value:"time",label:"Time"},{value:"agentTime",label:"Agent Time"},{value:"agent",label:"Agent"},{value:"person",label:"Person"},{value:"policy",label:"Policy"},{value:"application",label:"Application"},{value:"category",label:"Category"},{value:"matches",label:"Matches"},{value:"group",label:"Group"}],ie=function(){var e=N().onToggleTime,t=G().onToggleAgentTime,n=z().onToggleUser,c=L().onToggleAgent,r=R().onTogglePerson,a=J().onTogglePolicy,o=q().onToggleApplication,i=H().onToggleCategory,u=Q().onToggleMatches,j=re().onToggleResource,s=V().onToggleGroup,O=Object(b.c)(x),d=Object(g.a)(O,2),f=d[0],h=d[1],m=function(){e(!0),t(!0),n(!0),c(!0),r(!0),a(!0),o(!0),i(!0),u(!0),j(!0),s(!0)};return Object(l.jsx)(ae,{children:Object(l.jsx)(v.a,{className:"select",value:oe.filter((function(e){return f.includes(e.value)})),options:oe,onChange:function(b,O){var l=O.action,d="";switch(h(Array.isArray(b)?b.map((function(e){return d=e.value,e.value})):[]),"clear"===l&&m(),d){case"time":return e();case"agentTime":return t();case"user":return n();case"agent":return c();case"person":return r();case"policy":return a();case"application":return o();case"category":return i();case"matches":return u();case"resource":return j();case"group":return s();default:return}},isMulti:!0,hideSelectedOptions:!0,placeholder:"Search"})})},be=n(25),ue=s.c.button(X||(X=Object(j.a)(["\n  font-size: 0.912rem;\n  font-weight: bold;\n  padding: 0 0.9rem;\n  margin-left: 1rem;\n  background: white;\n  border: 1px solid ",";\n  border-radius: 5px;\n  color: ",";\n  cursor: pointer;\n  transition: all 0.2s;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  &:hover {\n    background: ",";\n    border: 1px solid ",";\n    color: white;\n  }\n  &:active {\n    transform: translateY(2px);\n  }\n"])),O.cyan[7],O.cyan[7],O.cyan[6],O.cyan[5]),je=function(e){var t=e.children,n=Object(be.a)(e,["children"]);return Object(l.jsx)(ue,Object(h.a)(Object(h.a)({},n),{},{onClick:function(e){n.onClick&&n.onClick(e),e.target.blur()},children:t}))},se=n(24),Oe=n.n(se),le=s.c.div(Z||(Z=Object(j.a)(["\n  margin-left: 0.5rem;\n  label {\n    margin-left: 0.5rem;\n    margin-right: 0.2rem;\n  }\n  input {\n    border-radius: 4px;\n    width: 120px;\n    height: 34px;\n    outline: none;\n    border: 1px solid ",";\n    text-align: center;\n  }\n"])),O.gray[4]),de=s.c.div($||($=Object(j.a)(["\n  display: inline;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n"]))),fe=function(){var e=Object(b.c)(T),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(b.c)(k),o=Object(g.a)(a,2),i=o[0],u=o[1];return Object(r.useEffect)((function(){if(i.date.getTime()-n.date.getTime()<0)return alert("\ub05d \uc2dc\uac04\uc774 \uc2dc\uc791 \uc2dc\uac04\ubcf4\ub2e4 \uc791\uc73c\uba74 \uc548\ub429\ub2c8\ub2e4!"),c({date:new Date}),void u({date:new Date})}),[n.date,i.date,c,u]),Object(l.jsxs)(le,{children:[Object(l.jsx)("label",{children:"Time"}),Object(l.jsx)(Oe.a,{locale:"ko",startDate:n.date,selected:n.date,onChange:function(e){return c({date:e})},dateFormat:"yyyy, MM dd"}),Object(l.jsx)(de,{children:"~"}),Object(l.jsx)(Oe.a,{locale:"ko",startDate:i.date,selected:i.date,onChange:function(e){return u({date:e})},dateFormat:"yyyy, MM dd"})]})},ge=s.c.div(_||(_=Object(j.a)(["\n  margin-left: 0.5rem;\n  label {\n    margin-left: 0.5rem;\n    margin-right: 0.2rem;\n  }\n  input {\n    border-radius: 4px;\n    width: 120px;\n    height: 34px;\n    outline: none;\n    border: 1px solid ",";\n    text-align: center;\n  }\n"])),O.gray[4]),ve=s.c.div(ee||(ee=Object(j.a)(["\n  display: inline;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n"]))),he=function(){var e=Object(b.c)(w),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(b.c)(C),o=Object(g.a)(a,2),i=o[0],u=o[1];return Object(r.useEffect)((function(){if(i.date.getTime()-n.date.getTime()<0)return alert("\ub05d \uc2dc\uac04\uc774 \uc2dc\uc791 \uc2dc\uac04\ubcf4\ub2e4 \uc791\uc73c\uba74 \uc548\ub429\ub2c8\ub2e4!"),c({date:new Date}),void u({date:new Date})}),[n.date,i.date,c,u]),Object(l.jsxs)(ge,{children:[Object(l.jsx)("label",{children:"Agent Time"}),Object(l.jsx)(Oe.a,{locale:"ko",startDate:n.date,selected:n.date,onChange:function(e){return c({date:e})},dateFormat:"yyyy, MM dd"}),Object(l.jsx)(ve,{children:"~"}),Object(l.jsx)(Oe.a,{locale:"ko",startDate:i.date,selected:i.date,onChange:function(e){return u({date:e})},dateFormat:"yyyy, MM dd"})]})},me=s.c.div(te||(te=Object(j.a)(["\n  display: flex;\n  margin-bottom: 1.2rem;\n"]))),xe=function(e){var t=e.onSubmit,n=e.onKeyPress,c=Object(b.d)(x),r=N().time,a=G().agentTime,o=z(),i=o.user,u=o.onChangeUser,j=L(),s=j.agent,O=j.onChangeAgent,d=R(),g=d.person,v=d.onChangePerson,h=J(),m=h.policy,p=h.onChangePolicy,y=q(),T=y.application,k=y.onChangeApplication,w=H(),C=w.category,P=w.onChangeCategory,A=Q(),D=A.matches,M=A.onChangeMatches,S=V(),B=S.group,Y=S.onChangeGroup;return Object(l.jsxs)(me,{children:[Object(l.jsx)(ie,{}),r.visible&&Object(l.jsx)(fe,{}),a.visible&&Object(l.jsx)(he,{}),i.visible&&Object(l.jsx)(f,{name:"user",value:i.value,onChange:u,onKeyPress:n}),s.visible&&Object(l.jsx)(f,{name:"agent",value:s.value,onChange:O,onKeyPress:n}),g.visible&&Object(l.jsx)(f,{name:"person",value:g.value,onChange:v,onKeyPress:n}),m.visible&&Object(l.jsx)(f,{name:"policy",value:m.value,onChange:p,onKeyPress:n}),T.visible&&Object(l.jsx)(f,{name:"application",value:T.value,onChange:k,onKeyPress:n}),C.visible&&Object(l.jsx)(f,{name:"category",value:C.value,onChange:P,onKeyPress:n}),D.visible&&Object(l.jsx)(f,{name:"matches",value:D.value,onChange:M,onKeyPress:n}),B.visible&&Object(l.jsx)(f,{name:"group",value:B.value,onChange:Y,onKeyPress:n}),c.length>0&&Object(l.jsx)(je,{onClick:t,children:"\uc870 \ud68c"})]})},pe=n(53),ye=s.c.th(ne||(ne=Object(j.a)(["\n  cursor: pointer;\n  transition: all 0.2s;\n  user-select: none;\n  &:hover {\n    background: ",";\n  }\n  &:active {\n    color: ",";\n  }\n  svg {\n    vertical-align: bottom;\n  }\n"])),O.gray[5],O.gray[1]),Te=function(e){var t=e.name,n=e.model,c=e.onToggle;return Object(l.jsxs)(ye,{onClick:c,children:[t," ","none"!==n.sort&&Object(l.jsx)(l.Fragment,{children:"asc"===n.sort?Object(l.jsx)(pe.b,{}):Object(l.jsx)(pe.a,{})})]})},ke=s.c.thead(ce||(ce=Object(j.a)(["\n  th {\n    user-select: none;\n  }\n"]))),we=function(){var e=Object(b.c)(P),t=Object(g.a)(e,2),n=t[0],c=t[1],r=Object(b.c)(A),a=Object(g.a)(r,2),o=a[0],i=a[1],u=Object(b.c)(D),j=Object(g.a)(u,2),s=j[0],O=j[1],d=Object(b.c)(M),f=Object(g.a)(d,2),v=f[0],m=f[1],x=Object(b.c)(S),p=Object(g.a)(x,2),y=p[0],T=p[1],k=Object(b.c)(B),w=Object(g.a)(k,2),C=w[0],I=w[1],N=Object(b.c)(Y),G=Object(g.a)(N,2),z=G[0],L=G[1],R=Object(b.c)(F),J=Object(g.a)(R,2),q=J[0],H=J[1],Q=Object(b.c)(K),V=Object(g.a)(Q,2),W=V[0],X=V[1],Z=Object(b.c)(U),$=Object(g.a)(Z,2),_=$[0],ee=$[1],te=Object(b.c)(E),ne=Object(g.a)(te,2),ce=ne[0],re=ne[1];return Object(l.jsx)(ke,{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Channel"}),Object(l.jsx)(Te,{name:"Time",model:n,onToggle:function(){i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)(Te,{name:"Agent Time",model:o,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)(Te,{name:"User",model:s,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)("th",{children:"Activity"}),Object(l.jsx)(Te,{name:"Agent",model:v,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)(Te,{name:"Person",model:y,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)(Te,{name:"Policy",model:C,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)(Te,{name:"Application",model:z,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)(Te,{name:"Category",model:q,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)(Te,{name:"Matches",model:W,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)("th",{children:"Matches(\ud55c\uae00)"}),Object(l.jsx)(Te,{name:"Resource",model:_,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(l.jsx)(Te,{name:"Group",model:ce,onToggle:function(){c((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),i((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),O((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),m((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),T((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),I((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),H((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),X((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),ee((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"})})),re((function(e){return Object(h.a)(Object(h.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}})]})})},Ce=n(13),Pe=n.n(Ce),Ae=n(33),De=n(70),Me=n.n(De),Se=n(29),Be=n.n(Se);var Ye,Fe,Ke=function(){var e=Object(b.d)(P),t=Object(b.d)(A),n=Object(b.d)(y),c=Object(b.d)(T),r=Object(b.d)(k),a=Object(b.d)(w),o=Object(b.d)(C),i=Object(b.d)(D),j=Object(b.d)(M),s=Object(b.d)(S),O=Object(b.d)(B),l=Object(b.d)(Y),d=Object(b.d)(F),f=Object(b.d)(K),v=Object(b.d)(U),x=Object(b.d)(E),N=Object(b.c)(p),G=Object(g.a)(N,2),z=G[0],L=G[1],R=Object(b.c)(I),J=Object(g.a)(R,2)[1],q=Object(b.d)(m),H=function(){var b=Object(Ae.a)(Pe.a.mark((function b(){var g,m;return Pe.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,g=[{name:"time",sort:e.sort},{name:"agentTime",sort:t.sort},{name:"userDim.label",sort:i.sort},{name:"agent",sort:j.sort},{name:"userDim.targetUser.label",sort:s.sort},{name:"policy",sort:O.sort},{name:"application",sort:l.sort},{name:"category",sort:d.sort},{name:"matches",sort:f.sort},{name:"resource",sort:v.sort},{name:"group",sort:x.sort}],m=g.filter((function(e){return"none"!==e.sort})),b.next=5,Me.a.get("/evidences/9/list?page=".concat(z.currentPage,"&size=").concat(n.value).concat(""!==i.value?"&user=".concat(i.value):"").concat(""!==j.value?"&agent=".concat(j.value):"").concat(""!==s.value?"&person=".concat(s.value):"").concat(""!==O.value?"&policy=".concat(O.value):"").concat(""!==l.value?"&application=".concat(l.value):"").concat(""!==d.value?"&category=".concat(d.value):"").concat(""!==f.value?"&matches=".concat(f.value):"").concat(""!==v.value?"&resources=".concat(v.value):"").concat(""!==x.value?"&group=".concat(x.value):"").concat(m[0]?"&sort=".concat(m[0].name,",").concat(m[0].sort):"").concat(e.visible?"&startTime=".concat(Be()(c.date).format("YYYY-MM-DD")):"").concat(e.visible?"&endTime=".concat(Be()(r.date).format("YYYY-MM-DD")):"").concat(t.visible?"&startAgentTime=".concat(Be()(a.date).format("YYYY-MM-DD")):"").concat(t.visible?"&endAgentTime=".concat(Be()(o.date).format("YYYY-MM-DD")):"","\n            "),{headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",JSESSIONID:q}}).then((function(e){var t=e.data,n=t.content,c=t.totalPages;J(n),L((function(e){return Object(h.a)(Object(h.a)({},e),{},{lastPage:c})}))})).catch((function(e){return console.error(e)}));case 5:b.next=10;break;case 7:b.prev=7,b.t0=b.catch(0),Object(u.b)(b.t0);case 10:case"end":return b.stop()}}),b,null,[[0,7]])})));return function(){return b.apply(this,arguments)}}();return{onSubmit:H,onPrevPage:function(){L((function(e){return Object(h.a)(Object(h.a)({},e),{},{currentPage:e.currentPage-1})}))},onNextPage:function(){L((function(e){return Object(h.a)(Object(h.a)({},e),{},{currentPage:e.currentPage+1})}))},onKeyPress:function(e){"Enter"===e.key&&H()}}},Ue=s.c.button(Ye||(Ye=Object(j.a)(["\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.25rem 1rem;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  background: ",";\n  &:hover {\n    background: ",";\n  }\n  &:disabled {\n    background: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n"])),O.gray[8],O.gray[6],O.gray[3],O.gray[5]),Ee=function(e){var t=e.disabled,n=e.onClick,c=e.children;return t?Object(l.jsx)(Ue,{disabled:!0,children:c}):Object(l.jsx)(Ue,{onClick:n,children:c})},Ie=s.c.div(Fe||(Fe=Object(j.a)(["\n  width: 320px;\n  margin: 0 auto;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  .now {\n    display: flex;\n    align-items: center;\n  }\n"]))),Ne=function(e){var t=e.page,n=e.lastPage,c=e.onPrev,r=e.onNext;return Object(l.jsxs)(Ie,{children:[Object(l.jsx)(Ee,{disabled:1===t,onClick:1===t?void 0:c,children:"\uc774\uc804 \ud398\uc774\uc9c0"}),Object(l.jsxs)("div",{className:"now",children:[t," \ud398\uc774\uc9c0"]}),Object(l.jsx)(Ee,{disabled:t===n||0===n,onClick:t===n?void 0:r,children:"\ub2e4\uc74c \ud398\uc774\uc9c0"})]})},Ge=function(){var e=Object(b.d)(p),t=Ke(),n=t.onPrevPage,c=t.onNextPage;return Object(l.jsx)(Ne,{page:e.currentPage,lastPage:e.lastPage,onPrev:n,onNext:c})};var ze,Le,Re,Je=function(){return{contents:Object(b.d)(I)}},qe=n(71),He=function(){var e=Object(l.jsx)("td",{children:Object(l.jsxs)(qe.a,{speed:50,height:60,viewBox:"0 0 50 60",backgroundColor:"#f3f3f3",foregroundColor:"#ababab",children:[Object(l.jsx)("rect",{x:"0",y:"10",rx:"3",ry:"3",width:"50",height:"8"}),Object(l.jsx)("rect",{x:"0",y:"30",rx:"3",ry:"3",width:"50",height:"8"}),Object(l.jsx)("rect",{x:"0",y:"50",rx:"3",ry:"3",width:"50",height:"8"})]})});return Object(l.jsxs)("tr",{children:[e,e,e,e,e,e,e,e,e,e,e,e,e,e]})},Qe=s.c.div(ze||(ze=Object(j.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  table {\n    border-spacing: 0 0;\n    overflow: hidden;\n  }\n  th,\n  td {\n    border: 1px solid ",";\n    padding: 0.5rem 0.7rem;\n  }\n  th {\n    background: ",";\n    color: white;\n  }\n"])),O.gray[7],O.gray[6]),Ve=function(){var e=Je().contents,t=Ke().onSubmit,n=Object(b.d)(p),c=Object(b.d)(P),a=Object(b.d)(A),o=Object(b.d)(D),i=Object(b.d)(M),u=Object(b.d)(S),j=Object(b.d)(B),s=Object(b.d)(Y),O=Object(b.d)(F),d=Object(b.d)(K),f=Object(b.d)(U),g=Object(b.d)(E);return Object(r.useEffect)((function(){t()}),[n.currentPage,c.sort,a.sort,o.sort,i.sort,u.sort,j.sort,s.sort,O.sort,d.sort,f.sort,g.sort]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Qe,{children:Object(l.jsxs)("table",{children:[Object(l.jsx)(we,{}),Object(l.jsx)("tbody",{children:e&&e[0]?Object(l.jsx)(l.Fragment,{children:""!==e[0].evidenceId?Object(l.jsx)(l.Fragment,{children:e.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:{width:"5%",wordBreak:"break-all"},children:e.channel}),Object(l.jsx)("td",{style:{width:"6%",wordBreak:"break-all"},children:e.evidenceStartTime}),Object(l.jsx)("td",{style:{width:"6%",wordBreak:"break-all"},children:new Date(e.agentTime).toISOString()}),Object(l.jsx)("td",{style:{width:"7%",wordBreak:"break-all"},children:e.eventType.label}),Object(l.jsx)("td",{style:{width:"8%",wordBreak:"break-all"},children:e.userDim.label}),Object(l.jsx)("td",{style:{width:"8%",wordBreak:"break-all"},children:e.agentDim.label}),Object(l.jsx)("td",{style:{width:"10%",wordBreak:"break-all"},children:e.userDim.targetUser.samAccountName}),Object(l.jsx)("td",{style:{width:"6%",wordBreak:"break-all"},children:e.policy}),Object(l.jsx)("td",{style:{width:"8%",wordBreak:"break-all"},children:e.applicationName}),Object(l.jsx)("td",{style:{width:"8%",wordBreak:"break-all"},children:e.category}),Object(l.jsx)("td",{style:{width:"8%",wordBreak:"break-all"},children:e.matchText}),Object(l.jsx)("td",{style:{width:"10%",wordBreak:"break-all"},children:e.matchText}),Object(l.jsx)("td",{style:{width:"5%",wordBreak:"break-all"},children:e.resources}),Object(l.jsx)("td",{style:{width:"5%",wordBreak:"break-all"},children:e.group})]},e.evidenceId)}))}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(He,{}),Object(l.jsx)(He,{}),Object(l.jsx)(He,{}),Object(l.jsx)(He,{}),Object(l.jsx)(He,{}),Object(l.jsx)(He,{}),Object(l.jsx)(He,{}),Object(l.jsx)(He,{}),Object(l.jsx)(He,{}),Object(l.jsx)(He,{})]})}):Object(l.jsx)("tr",{children:Object(l.jsx)("td",{style:{width:"100vw",textAlign:"center"},colSpan:14,children:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})})})]})}),Object(l.jsx)(Ge,{})]})},We=s.c.div(Le||(Le=Object(j.a)(["\n  display: flex;\n  margin-bottom: 2rem;\n  .counter {\n    min-width: 100px;\n  }\n"]))),Xe=[{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"}],Ze=function(){var e=Object(b.c)(y),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsx)(We,{children:Object(l.jsx)(v.a,{className:"counter",options:Xe,onChange:function(e){c({value:e.value,label:e.label})},hideSelectedOptions:!0,placeholder:n.value})})},$e=s.c.main(Re||(Re=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),_e=function(e){var t=e.children;return Object(l.jsx)($e,{children:t})};var et,tt=function(){var e=Object(b.c)(m),t=Object(g.a)(e,2)[1],n=function(){localStorage.removeItem("jsessionId")};Object(r.useEffect)((function(){var e=localStorage.getItem("jsessionId");e?t(e):document.location.href="/customLogin"}),[t]),Object(r.useEffect)((function(){return window.addEventListener("beforeunload",n),function(){window.removeEventListener("beforeunload",n)}}),[])},nt=Object(s.a)(et||(et=Object(j.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    box-sizing: border-box;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n"])));var ct=function(){tt();var e=Ke(),t=e.onSubmit,n=e.onKeyPress;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(nt,{}),Object(l.jsxs)(_e,{children:[Object(l.jsx)(xe,{onSubmit:t,onKeyPress:n}),Object(l.jsx)(Ze,{}),Object(l.jsx)(Ve,{})]}),Object(l.jsx)(u.a,{position:"bottom-center",draggable:!1})]})},rt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b.a,{children:Object(l.jsx)(ct,{})})}),document.getElementById("root")),rt()}},[[158,1,2]]]);
//# sourceMappingURL=main.121d6fa0.chunk.js.map