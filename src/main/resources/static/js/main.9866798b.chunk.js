(this["webpackJsonpforce-point-main"]=this["webpackJsonpforce-point-main"]||[]).push([[0],{181:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),o=n(16),i=n.n(o),b=n(5),u=n(49),s=n(15),l=n.n(s),j=n(2),O=n(27),d=n(7),g=n(12),f=n(13),v=n(14),m=n(3),h=f.c.input(c||(c=Object(g.a)(["\n  width: 80px;\n  max-height: 38px;\n  margin-left: 0.5rem;\n  border-radius: 4px;\n  outline: none;\n  border: 1px solid ",";\n"])),v.gray[5]),p=function(e){var t=e.name,n=e.value,c=e.onChange,a=e.onKeyPress;return Object(m.jsx)(h,{type:"text",name:t,value:n,onChange:c,onKeyPress:a,placeholder:t[0].toUpperCase()+t.slice(1)})},x=n(48),y=n(97),T=Object(b.b)({key:"AuthUser",default:""}),w=Object(b.b)({key:"Menu",default:[]}),k=Object(b.b)({key:"Page",default:{currentPage:0,lastPage:0}}),C=Object(b.b)({key:"Counter",default:{value:20,label:"20"}}),P=Object(b.b)({key:"EvidenceType",default:{value:"ALL",label:"ALL"}}),D=Object(b.b)({key:"StartTime",default:{date:new Date}}),A=Object(b.b)({key:"EndTime",default:{date:new Date}}),E=Object(b.b)({key:"StartAgentTime",default:{date:new Date}}),M=Object(b.b)({key:"EndAgentTime",default:{date:new Date}}),S=Object(b.b)({key:"Time",default:{visible:!1,value:"",sort:"none"}}),L=Object(b.b)({key:"AgentTime",default:{visible:!1,value:"",sort:"none"}}),Y=Object(b.b)({key:"User",default:{visible:!1,value:"",sort:"none"}}),N=Object(b.b)({key:"Agent",default:{visible:!1,value:"",sort:"none"}}),I=Object(b.b)({key:"Person",default:{visible:!1,value:"",sort:"none"}}),B=Object(b.b)({key:"Policy",default:{visible:!1,value:"",sort:"none"}}),F=Object(b.b)({key:"Application",default:{visible:!1,value:"",sort:"none"}}),U=Object(b.b)({key:"Category",default:{visible:!1,value:"",sort:"none"}}),K=Object(b.b)({key:"Matches",default:{visible:!1,value:"",sort:"none"}}),R=Object(b.b)({key:"Resource",default:{visible:!1,value:"",sort:"none"}}),z=Object(b.b)({key:"Group",default:{visible:!1,value:"",sort:"none"}}),G=Object(b.b)({key:"ListTable",default:[{evidenceId:"",channel:"",evidenceStartTime:new Date,agentTime:new Date,userDim:{label:"",targetUser:{samAccountName:""}},eventType:{evidenceType:"",label:""},agentDim:{label:""},policy:"",applicationName:"",category:"",matchText:"",matchTextHan:"",resources:"",group:""}]}),J=Object(b.b)({key:"Total",default:0});var V=function(){var e=Object(b.c)(S),t=Object(d.a)(e,2),n=t[0],c=t[1];return{time:n,onToggleTime:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangeTime:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var H=function(){var e=Object(b.c)(L),t=Object(d.a)(e,2),n=t[0],c=t[1];return{agentTime:n,onToggleAgentTime:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangeAgentTime:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var q=function(){var e=Object(b.c)(Y),t=Object(d.a)(e,2),n=t[0],c=t[1];return{user:n,onToggleUser:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangeUser:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var Q=function(){var e=Object(b.c)(N),t=Object(d.a)(e,2),n=t[0],c=t[1];return{agent:n,onToggleAgent:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangeAgent:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var W=function(){var e=Object(b.c)(I),t=Object(d.a)(e,2),n=t[0],c=t[1];return{person:n,onTogglePerson:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangePerson:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var X=function(){var e=Object(b.c)(B),t=Object(d.a)(e,2),n=t[0],c=t[1];return{policy:n,onTogglePolicy:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangePolicy:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var Z=function(){var e=Object(b.c)(F),t=Object(d.a)(e,2),n=t[0],c=t[1];return{application:n,onToggleApplication:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangeApplication:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var $=function(){var e=Object(b.c)(U),t=Object(d.a)(e,2),n=t[0],c=t[1];return{category:n,onToggleCategory:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangeCategory:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var _=function(){var e=Object(b.c)(K),t=Object(d.a)(e,2),n=t[0],c=t[1];return{matches:n,onToggleMatches:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangeMatches:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var ee=function(){var e=Object(b.c)(z),t=Object(d.a)(e,2),n=t[0],c=t[1];return{group:n,onToggleGroup:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangeGroup:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}};var te,ne,ce,ae,re,oe,ie,be,ue,se,le,je=function(){var e=Object(b.c)(R),t=Object(d.a)(e,2),n=t[0],c=t[1];return{resource:n,onToggleResource:function(e){c(e?function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!1})}:function(e){return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible})})},onChangeResource:function(e){c((function(t){return Object(j.a)(Object(j.a)({},t),{},{value:e.target.value})}))}}},Oe=f.c.div(te||(te=Object(g.a)(["\n  display: flex;\n  .select {\n    min-width: 140px;\n  }\n  .css-1rhbuit-multiValue {\n    display: none!important;\n  }\n"]))),de=Object(y.a)(),ge=function(){var e=Object(a.useMemo)((function(){return[{value:"user",label:"User"},{value:"time",label:"Time"},{value:"agentTime",label:"Agent Time"},{value:"agent",label:"Agent"},{value:"person",label:"Person"},{value:"policy",label:"Policy"},{value:"application",label:"Application"},{value:"category",label:"Category"},{value:"matches",label:"Matches"},{value:"group",label:"Group"}]}),[]),t=V().onToggleTime,n=H().onToggleAgentTime,c=q().onToggleUser,r=Q().onToggleAgent,o=W().onTogglePerson,i=X().onTogglePolicy,u=Z().onToggleApplication,s=$().onToggleCategory,l=_().onToggleMatches,j=je().onToggleResource,O=ee().onToggleGroup,g=Object(b.c)(w),f=Object(d.a)(g,2),v=f[0],h=f[1],p=function(){t(!0),n(!0),c(!0),r(!0),o(!0),i(!0),u(!0),s(!0),l(!0),j(!0),O(!0)},y=function(e){switch(e){case"time":return t();case"agentTime":return n();case"user":return c();case"agent":return r();case"person":return o();case"policy":return i();case"application":return u();case"category":return s();case"matches":return l();case"resource":return j();case"group":return O();default:return}},T=function(e){switch(console.log(e),e){case"time":return t(!0);case"agentTime":return n(!0);case"user":return c(!0);case"agent":return r(!0);case"person":return o(!0);case"policy":return i(!0);case"application":return u(!0);case"category":return s(!0);case"matches":return l(!0);case"resource":return j(!0);case"group":return O(!0);default:return}};return Object(m.jsx)(Oe,{children:Object(m.jsx)(x.a,{className:"select",components:de,value:e.filter((function(e){return v.includes(e.value)})),options:e,onChange:function(e,t){var n=t.action,c="";switch(h(Array.isArray(e)?e.map((function(e){return c=e.value,e.value})):[]),n){case"clear":return p();case"select-option":return y(c);case"remove-value":return T(c);default:return}},isMulti:!0,placeholder:"Search",closeMenuOnSelect:!0})})},fe=n(39),ve=f.c.button(ne||(ne=Object(g.a)(["\n  font-size: 0.912rem;\n  font-weight: bold;\n  padding: 0 0.9rem;\n  margin-left: 0.5rem;\n  background: white;\n  border: 1px solid ",";\n  border-radius: 5px;\n  color: ",";\n  max-height: 38px;\n  cursor: pointer;\n  transition: all 0.2s;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  &:hover {\n    background: ",";\n    border: 1px solid ",";\n    color: white;\n  }\n  &:active {\n    transform: translateY(2px);\n  }\n\n  ","\n\n  ","\n"])),v.gray[7],v.gray[7],v.gray[6],v.gray[5],(function(e){return e.cyan&&Object(f.b)(ce||(ce=Object(g.a)(["\n      border: 1px solid ",";\n      color: ",";\n\n      &:hover {\n        background: ",";\n        border: 1px solid ",";\n        color: white;\n      }\n    "])),v.cyan[7],v.cyan[7],v.cyan[6],v.cyan[5])}),(function(e){return e.green&&Object(f.b)(ae||(ae=Object(g.a)(["\n      background: ",";\n      color: white;\n      border: 1px solid ",";\n\n      &:hover {\n        background: white;\n        color: ",";\n        border: 1px solid ",";\n      }\n    "])),v.green[6],v.green[8],v.green[8],v.green[8])})),me=function(e){var t=e.children,n=Object(fe.a)(e,["children"]);return Object(m.jsx)(ve,Object(j.a)(Object(j.a)({},n),{},{onClick:function(e){n.onClick&&n.onClick(e),e.target.blur()},children:t}))},he=n(38),pe=n.n(he),xe=f.c.div(re||(re=Object(g.a)(["\n  display: flex;\n  margin-left: 0.5rem;\n  label {\n    display: flex;\n    align-self: center;\n    margin-left: 0.5rem;\n    margin-right: 0.2rem;\n  }\n  input {\n    border-radius: 4px;\n    width: 120px;\n    height: 34px;\n    outline: none;\n    border: 1px solid ",";\n    text-align: center;\n  }\n"])),v.gray[4]),ye=f.c.div(oe||(oe=Object(g.a)(["\n  display: flex;\n  align-self: center;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n"]))),Te=function(){var e=Object(b.c)(D),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(b.c)(A),o=Object(d.a)(r,2),i=o[0],u=o[1];return Object(a.useEffect)((function(){if(i.date.getTime()-n.date.getTime()<0)return alert("\ub05d \uc2dc\uac04\uc774 \uc2dc\uc791 \uc2dc\uac04\ubcf4\ub2e4 \uc791\uc73c\uba74 \uc548\ub429\ub2c8\ub2e4!"),c({date:new Date}),void u({date:new Date})}),[n.date,i.date,c,u]),Object(m.jsxs)(xe,{children:[Object(m.jsx)("label",{children:"Time"}),Object(m.jsx)(pe.a,{locale:"ko",startDate:n.date,selected:n.date,onChange:function(e){return c({date:e})},dateFormat:"yyyy, MM dd"}),Object(m.jsx)(ye,{children:"~"}),Object(m.jsx)(pe.a,{locale:"ko",startDate:i.date,selected:i.date,onChange:function(e){return u({date:e})},dateFormat:"yyyy, MM dd"})]})},we=f.c.div(ie||(ie=Object(g.a)(["\n  display: flex;\n  margin-left: 0.5rem;\n\n  label {\n    display: flex;\n    align-self: center;\n    margin-left: 0.5rem;\n    margin-right: 0.2rem;\n  }\n  input {\n    border-radius: 4px;\n    width: 120px;\n    height: 34px;\n    outline: none;\n    border: 1px solid ",";\n    text-align: center;\n  }\n"])),v.gray[4]),ke=f.c.div(be||(be=Object(g.a)(["\n  display: flex;\n  align-self: center;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n"]))),Ce=function(){var e=Object(b.c)(E),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(b.c)(M),o=Object(d.a)(r,2),i=o[0],u=o[1];return Object(a.useEffect)((function(){if(i.date.getTime()-n.date.getTime()<0)return alert("\ub05d \uc2dc\uac04\uc774 \uc2dc\uc791 \uc2dc\uac04\ubcf4\ub2e4 \uc791\uc73c\uba74 \uc548\ub429\ub2c8\ub2e4!"),c({date:new Date}),void u({date:new Date})}),[n.date,i.date,c,u]),Object(m.jsxs)(we,{children:[Object(m.jsx)("label",{children:"Agent Time"}),Object(m.jsx)(pe.a,{locale:"ko",startDate:n.date,selected:n.date,onChange:function(e){return c({date:e})},dateFormat:"yyyy, MM dd"}),Object(m.jsx)(ke,{children:"~"}),Object(m.jsx)(pe.a,{locale:"ko",startDate:i.date,selected:i.date,onChange:function(e){return u({date:e})},dateFormat:"yyyy, MM dd"})]})},Pe=f.c.div(ue||(ue=Object(g.a)(["\n  display: flex;\n  margin-bottom: 1.2rem;\n"]))),De=function(e){var t=e.onSubmit,n=e.onKeyPress,c=Object(b.c)(w),a=Object(d.a)(c,2),r=a[0],o=a[1],i=Object(b.c)(k),u=Object(d.a)(i,2)[1],s=H().agentTime,g=q(),f=g.user,v=g.onChangeUser,h=Q(),x=h.agent,y=h.onChangeAgent,T=W(),C=T.person,G=T.onChangePerson,J=X(),te=J.policy,ne=J.onChangePolicy,ce=Z(),ae=ce.application,re=ce.onChangeApplication,oe=$(),ie=oe.category,be=oe.onChangeCategory,ue=_(),se=ue.matches,le=ue.onChangeMatches,Oe=ee(),de=Oe.group,fe=Oe.onChangeGroup,ve=V().time,he=V().onToggleTime,pe=H().onToggleAgentTime,xe=q().onToggleUser,ye=Q().onToggleAgent,we=W().onTogglePerson,ke=X().onTogglePolicy,De=Z().onToggleApplication,Ae=$().onToggleCategory,Ee=_().onToggleMatches,Me=je().onToggleResource,Se=ee().onToggleGroup,Le=Object(b.c)(P),Ye=Object(d.a)(Le,2)[1],Ne=Object(b.c)(D),Ie=Object(d.a)(Ne,2)[1],Be=Object(b.c)(A),Fe=Object(d.a)(Be,2)[1],Ue=Object(b.c)(E),Ke=Object(d.a)(Ue,2)[1],Re=Object(b.c)(M),ze=Object(d.a)(Re,2)[1],Ge=Object(b.c)(S),Je=Object(d.a)(Ge,2)[1],Ve=Object(b.c)(L),He=Object(d.a)(Ve,2)[1],qe=Object(b.c)(Y),Qe=Object(d.a)(qe,2)[1],We=Object(b.c)(N),Xe=Object(d.a)(We,2)[1],Ze=Object(b.c)(I),$e=Object(d.a)(Ze,2)[1],_e=Object(b.c)(B),et=Object(d.a)(_e,2)[1],tt=Object(b.c)(F),nt=Object(d.a)(tt,2)[1],ct=Object(b.c)(U),at=Object(d.a)(ct,2)[1],rt=Object(b.c)(K),ot=Object(d.a)(rt,2)[1],it=Object(b.c)(R),bt=Object(d.a)(it,2)[1],ut=Object(b.c)(z),st=Object(d.a)(ut,2)[1],lt=function(){var e=Object(O.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o([]),u((function(e){return Object(j.a)(Object(j.a)({},e),{},{currentPage:0})})),he(!0),pe(!0),xe(!0),ye(!0),we(!0),ke(!0),De(!0),Ae(!0),Ee(!0),Me(!0),Se(!0),Ye((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:"ALL"})})),Ie((function(e){return Object(j.a)(Object(j.a)({},e),{},{date:new Date})})),Fe((function(e){return Object(j.a)(Object(j.a)({},e),{},{date:new Date})})),Ke((function(e){return Object(j.a)(Object(j.a)({},e),{},{date:new Date})})),ze((function(e){return Object(j.a)(Object(j.a)({},e),{},{date:new Date})})),Je((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),He((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),Qe((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),Xe((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),$e((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),et((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),nt((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),at((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),ot((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),bt((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),st((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:""})})),e.next=31,t();case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(Pe,{children:[Object(m.jsx)(ge,{}),ve.visible&&Object(m.jsx)(Te,{}),s.visible&&Object(m.jsx)(Ce,{}),f.visible&&Object(m.jsx)(p,{name:"user",value:f.value,onChange:v,onKeyPress:n}),x.visible&&Object(m.jsx)(p,{name:"agent",value:x.value,onChange:y,onKeyPress:n}),C.visible&&Object(m.jsx)(p,{name:"person",value:C.value,onChange:G,onKeyPress:n}),te.visible&&Object(m.jsx)(p,{name:"policy",value:te.value,onChange:ne,onKeyPress:n}),ae.visible&&Object(m.jsx)(p,{name:"application",value:ae.value,onChange:re,onKeyPress:n}),ie.visible&&Object(m.jsx)(p,{name:"category",value:ie.value,onChange:be,onKeyPress:n}),se.visible&&Object(m.jsx)(p,{name:"matches",value:se.value,onChange:le,onKeyPress:n}),de.visible&&Object(m.jsx)(p,{name:"group",value:de.value,onChange:fe,onKeyPress:n}),Object(m.jsx)(me,{cyan:!0,onClick:t,children:"\uc870 \ud68c"}),r.length>0&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(me,{onClick:lt,children:"\ucd08\uae30\ud654"})})]})},Ae=n(75),Ee=n(95),Me=f.c.th(se||(se=Object(g.a)(["\n  cursor: pointer;\n  transition: all 0.2s;\n  user-select: none;\n  &:hover {\n    background: ",";\n  }\n  &:active {\n    color: ",";\n  }\n  svg {\n    vertical-align: bottom;\n  }\n"])),v.gray[5],v.gray[1]),Se=function(e){var t=e.name,n=e.model,c=e.onToggle;return Object(m.jsxs)(Me,{onClick:c,children:[t," ","none"===n.sort?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(Ee.a,{})}):Object(m.jsx)(m.Fragment,{children:"asc"===n.sort?Object(m.jsx)(Ae.b,{}):Object(m.jsx)(Ae.a,{})})]})},Le=f.c.thead(le||(le=Object(g.a)(["\n  th {\n    user-select: none;\n  }\n"]))),Ye=function(){var e=Object(b.c)(S),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(b.c)(L),r=Object(d.a)(a,2),o=r[0],i=r[1],u=Object(b.c)(Y),s=Object(d.a)(u,2),l=s[0],O=s[1],g=Object(b.c)(N),f=Object(d.a)(g,2),v=f[0],h=f[1],p=Object(b.c)(I),x=Object(d.a)(p,2),y=x[0],T=x[1],w=Object(b.c)(F),k=Object(d.a)(w,2),C=k[0],P=k[1],D=Object(b.c)(K),A=Object(d.a)(D,2),E=A[0],M=A[1],B=Object(b.c)(R),U=Object(d.a)(B,2),z=U[0],G=U[1];return Object(m.jsx)(Le,{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"EvidenceType"}),Object(m.jsx)("th",{children:"Channel"}),Object(m.jsx)(Se,{name:"Time",model:n,onToggle:function(){i((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),O((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),P((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),M((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),G((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),c((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(m.jsx)(Se,{name:"Agent Time",model:o,onToggle:function(){c((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),O((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),P((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),M((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),G((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),i((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(m.jsx)(Se,{name:"User",model:l,onToggle:function(){c((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),i((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),P((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),M((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),G((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),O((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(m.jsx)("th",{children:"Activity"}),Object(m.jsx)(Se,{name:"Agent",model:v,onToggle:function(){c((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),i((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),O((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),P((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),M((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),G((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(m.jsx)(Se,{name:"Person",model:y,onToggle:function(){c((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),i((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),O((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),P((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),M((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),G((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(m.jsx)("th",{children:"Policy"}),Object(m.jsx)(Se,{name:"Application",model:C,onToggle:function(){c((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),i((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),O((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),M((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),G((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),P((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(m.jsx)("th",{children:"Category"}),Object(m.jsx)(Se,{name:"Matches",model:E,onToggle:function(){c((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),i((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),O((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),P((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),G((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),M((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(m.jsx)("th",{children:"Matches(\ud55c\uae00)"}),Object(m.jsx)(Se,{name:"Resource",model:z,onToggle:function(){c((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),i((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),O((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),P((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),M((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"})})),G((function(e){return Object(j.a)(Object(j.a)({},e),{},{sort:"none"===e.sort?"asc":"desc"===e.sort?"none":"desc"})}))}}),Object(m.jsx)("th",{children:"Group"})]})})},Ne=n(47),Ie=n.n(Ne),Be=n(28),Fe=n.n(Be);var Ue,Ke,Re=function(){var e=Object(b.d)(S),t=Object(b.d)(L),n=Object(b.d)(C),c=Object(b.d)(D),a=Object(b.d)(A),r=Object(b.d)(E),o=Object(b.d)(M),i=Object(b.d)(Y),s=Object(b.d)(N),g=Object(b.d)(I),f=Object(b.d)(B),v=Object(b.d)(F),m=Object(b.d)(U),h=Object(b.d)(K),p=Object(b.d)(R),x=Object(b.d)(z),y=Object(b.d)(P),w=Object(b.c)(k),V=Object(d.a)(w,2),H=V[0],q=V[1],Q=Object(b.c)(G),W=Object(d.a)(Q,2)[1],X=Object(b.c)(J),Z=Object(d.a)(X,2),$=Z[0],_=Z[1],ee=Object(b.d)(T),te=function(){var b=Object(O.a)(l.a.mark((function b(){var O,d;return l.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,O=[{name:"EVIDENCESTARTTIME",sort:e.sort},{name:"agentTime",sort:t.sort},{name:"userDim.label",sort:i.sort},{name:"agentDim.label",sort:s.sort},{name:"userDim.targetUser.label",sort:g.sort},{name:"policy",sort:f.sort},{name:"applicationName",sort:v.sort},{name:"category",sort:m.sort},{name:"matchtext",sort:h.sort},{name:"resources",sort:p.sort},{name:"group",sort:x.sort}],d=O.filter((function(e){return"none"!==e.sort})),b.next=5,Ie.a.get("".concat("","/evidences/9/list?page=").concat(H.currentPage,"&size=").concat(n.value).concat(""!==i.value?"&user=".concat(i.value):"").concat(""!==s.value?"&agent=".concat(s.value):"").concat(""!==g.value?"&person=".concat(g.value):"").concat(""!==f.value?"&policy=".concat(f.value):"").concat(""!==v.value?"&application=".concat(v.value):"").concat(""!==m.value?"&category=".concat(m.value):"").concat(""!==h.value?"&matches=".concat(h.value):"").concat(""!==p.value?"&resources=".concat(p.value):"").concat(""!==x.value?"&group=".concat(x.value):"").concat(d[0]?"&sort=".concat(d[0].name,",").concat(d[0].sort):"").concat(e.visible?"&startTime=".concat(Fe()(c.date).format("YYYY-MM-DD")):"").concat(e.visible?"&endTime=".concat(Fe()(a.date).format("YYYY-MM-DD")):"").concat(t.visible?"&startAgentTime=".concat(Fe()(r.date).format("YYYY-MM-DD")):"").concat(t.visible?"&endAgentTime=".concat(Fe()(o.date).format("YYYY-MM-DD")):"").concat("ALL"!==y.value?"&evidenceType=".concat(y.value):"","\n            "),{headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",JSESSIONID:ee}}).then((function(e){var t=e.data,n=t.content,c=t.totalPages,a=t.totalElements,r=window.scrollTo;W(n),q((function(e){return Object(j.a)(Object(j.a)({},e),{},{lastPage:c})})),_(a),r(0,0)})).catch((function(e){console.error(e),document.location.href="/customLogin"}));case 5:b.next=10;break;case 7:b.prev=7,b.t0=b.catch(0),Object(u.b)(b.t0);case 10:case"end":return b.stop()}}),b,null,[[0,7]])})));return function(){return b.apply(this,arguments)}}();return{onSubmit:te,onPrevPage:function(){q((function(e){return Object(j.a)(Object(j.a)({},e),{},{currentPage:e.currentPage-1})}))},onNextPage:function(){q((function(e){return Object(j.a)(Object(j.a)({},e),{},{currentPage:e.currentPage+1})}))},onKeyPress:function(e){"Enter"===e.key&&te()},total:$,onExcel:function(){var b=Object(O.a)(l.a.mark((function b(){var j,O;return l.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,j=[{name:"EVIDENCESTARTTIME",sort:e.sort},{name:"agentTime",sort:t.sort},{name:"userDim.label",sort:i.sort},{name:"agentDim.label",sort:s.sort},{name:"userDim.targetUser.label",sort:g.sort},{name:"policy",sort:f.sort},{name:"applicationName",sort:v.sort},{name:"category",sort:m.sort},{name:"matchtext",sort:h.sort},{name:"resources",sort:p.sort},{name:"group",sort:x.sort}],O=j.filter((function(e){return"none"!==e.sort})),b.next=5,Ie.a.get("".concat("","/evidences/9/excel?page=").concat(H.currentPage,"&size=").concat(n.value).concat(""!==i.value?"&user=".concat(i.value):"").concat(""!==s.value?"&agent=".concat(s.value):"").concat(""!==g.value?"&person=".concat(g.value):"").concat(""!==f.value?"&policy=".concat(f.value):"").concat(""!==v.value?"&application=".concat(v.value):"").concat(""!==m.value?"&category=".concat(m.value):"").concat(""!==h.value?"&matches=".concat(h.value):"").concat(""!==p.value?"&resources=".concat(p.value):"").concat(""!==x.value?"&group=".concat(x.value):"").concat(O[0]?"&sort=".concat(O[0].name,",").concat(O[0].sort):"").concat(e.visible?"&startTime=".concat(Fe()(c.date).format("YYYY-MM-DD")):"").concat(e.visible?"&endTime=".concat(Fe()(a.date).format("YYYY-MM-DD")):"").concat(t.visible?"&startAgentTime=".concat(Fe()(r.date).format("YYYY-MM-DD")):"").concat(t.visible?"&endAgentTime=".concat(Fe()(o.date).format("YYYY-MM-DD")):"").concat("ALL"!==y.value?"&evidenceType=".concat(y.value):"","\n            "),{headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",JSESSIONID:ee},responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data],{type:e.headers["content-type"]})),n=document.createElement("a");n.href=t,n.setAttribute("download","excel.csv"),document.body.appendChild(n),n.click(),n.remove()})).catch((function(e){return console.log(e)}));case 5:b.next=10;break;case 7:b.prev=7,b.t0=b.catch(0),u.b.error(b.t0);case 10:case"end":return b.stop()}}),b,null,[[0,7]])})));return function(){return b.apply(this,arguments)}}()}},ze=f.c.button(Ue||(Ue=Object(g.a)(["\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.25rem 1rem;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  background: ",";\n  &:hover {\n    background: ",";\n  }\n  &:disabled {\n    background: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n"])),v.gray[8],v.gray[6],v.gray[3],v.gray[5]),Ge=function(e){var t=e.disabled,n=e.onClick,c=e.children;return t?Object(m.jsx)(ze,{disabled:!0,children:c}):Object(m.jsx)(ze,{onClick:n,children:c})},Je=f.c.div(Ke||(Ke=Object(g.a)(["\n  width: 320px;\n  margin: 0 auto;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  .now {\n    display: flex;\n    align-items: center;\n  }\n"]))),Ve=function(e){var t=e.page,n=e.lastPage,c=e.onPrev,a=e.onNext;return Object(m.jsxs)(Je,{children:[Object(m.jsx)(Ge,{disabled:0===t,onClick:0===t?void 0:c,children:"\uc774\uc804 \ud398\uc774\uc9c0"}),Object(m.jsxs)("div",{className:"now",children:[t+1," \ud398\uc774\uc9c0"]}),Object(m.jsx)(Ge,{disabled:t+1===n||1===n,onClick:t+1===n?void 0:a,children:"\ub2e4\uc74c \ud398\uc774\uc9c0"})]})},He=function(){var e=Object(b.d)(k),t=Re(),n=t.onPrevPage,c=t.onNextPage;return Object(m.jsx)(Ve,{page:e.currentPage,lastPage:e.lastPage,onPrev:n,onNext:c})};var qe,Qe,We,Xe,Ze,$e,_e,et,tt=function(){return{contents:Object(b.d)(G)}},nt=n(96),ct=function(){var e=Object(m.jsx)("td",{children:Object(m.jsxs)(nt.a,{speed:50,height:60,viewBox:"0 0 50 60",backgroundColor:"#f3f3f3",foregroundColor:"#ababab",children:[Object(m.jsx)("rect",{x:"0",y:"10",rx:"3",ry:"3",width:"50",height:"8"}),Object(m.jsx)("rect",{x:"0",y:"30",rx:"3",ry:"3",width:"50",height:"8"}),Object(m.jsx)("rect",{x:"0",y:"50",rx:"3",ry:"3",width:"50",height:"8"})]})});return Object(m.jsxs)("tr",{children:[e,e,e,e,e,e,e,e,e,e,e,e,e,e]})},at=f.c.div(qe||(qe=Object(g.a)(["\n  display: flex;\n  justify-content: flex-start;\n  width: 150vw;\n\n  table {\n    border-spacing: 0 0;\n    overflow: scroll;\n  }\n  th,\n  td {\n    border: 1px solid ",";\n    padding: 0.5rem 0.7rem;\n  }\n  th {\n    background: ",";\n    color: white;\n  }\n"])),v.gray[7],v.gray[6]),rt=function(){var e=tt().contents,t=Re().onSubmit,n=Object(b.d)(k),c=Object(b.d)(S),r=Object(b.d)(L),o=Object(b.d)(Y),i=Object(b.d)(N),u=Object(b.d)(I),s=Object(b.d)(B),l=Object(b.d)(F),j=Object(b.d)(U),O=Object(b.d)(K),d=Object(b.d)(R),g=Object(b.d)(z),f=Object(b.d)(C),v=Object(b.d)(P);return Object(a.useEffect)((function(){t()}),[n.currentPage,f.value,c.sort,r.sort,o.sort,i.sort,u.sort,s.sort,l.sort,j.sort,O.sort,d.sort,g.sort,v.value]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(at,{children:Object(m.jsxs)("table",{children:[Object(m.jsx)(Ye,{}),Object(m.jsx)("tbody",{children:e&&e[0]?Object(m.jsx)(m.Fragment,{children:""!==e[0].evidenceId?Object(m.jsx)(m.Fragment,{children:e.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.eventType.evidenceType}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:"Keyboard"}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.evidenceStartTime}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:new Date(e.agentTime).toISOString()}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.userDim.label}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.eventType.label}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.agentDim.label}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.userDim.targetUser.samAccountName}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.policy}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.applicationName}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.category}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.matchText}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.matchTextHan}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.resources}),Object(m.jsx)("td",{style:{wordBreak:"break-all"},children:e.group})]},e.evidenceId)}))}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{}),Object(m.jsx)(ct,{})]})}):Object(m.jsx)("tr",{children:Object(m.jsx)("td",{style:{width:"100vw",textAlign:"center"},colSpan:15,children:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})})})]})}),Object(m.jsx)(He,{})]})},ot=f.c.div(Qe||(Qe=Object(g.a)(["\n  display: flex;\n\n  .counter {\n    min-width: 100px;\n    margin-right: 0.5rem;\n  }\n\n  .event {\n    min-width: 100px;\n  }\n"]))),it=[{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"}],bt=[{value:"ALL",label:"ALL"},{value:"EVENT",label:"EVENT"},{value:"COLLECTION",label:"COLLECTION"}],ut=function(){var e=Object(b.c)(C),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(b.c)(P),r=Object(d.a)(a,2),o=r[0],i=r[1],u=Object(b.c)(k),s=Object(d.a)(u,2)[1];return Object(m.jsxs)(ot,{children:[Object(m.jsx)(x.a,{className:"counter",options:it,onChange:function(e){c({value:e.value,label:e.label}),s((function(e){return Object(j.a)(Object(j.a)({},e),{},{currentPage:0})}))},hideSelectedOptions:!0,placeholder:n.value}),Object(m.jsx)(x.a,{className:"event",options:bt,onChange:function(e){i({value:e.value,label:e.label}),s((function(e){return Object(j.a)(Object(j.a)({},e),{},{currentPage:0})}))},hideSelectedOptions:!0,placeholder:o.value})]})},st=f.c.div(We||(We=Object(g.a)(["\n  padding-right: 0.3rem;\n"]))),lt=function(e){var t,n=e.total;return Object(m.jsxs)(st,{children:["Total: ",(t=n,"NaN"===t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")?"":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]})},jt=f.c.div(Xe||(Xe=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 0.5rem;\n"]))),Ot=function(e){var t=e.total;return Object(m.jsxs)(jt,{children:[Object(m.jsx)(ut,{}),Object(m.jsx)(lt,{total:t})]})},dt=f.c.div(Ze||(Ze=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n  height: 36px;\n"]))),gt=function(e){var t=e.onExcel;return Object(m.jsx)(dt,{children:Object(m.jsx)(me,{green:!0,onClick:t,children:"ExcelExport"})})},ft=f.c.div($e||($e=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n  height: 36px;\n"]))),vt=function(e){var t=e.onLogout;return Object(m.jsx)(ft,{children:Object(m.jsx)(me,{onClick:t,children:"Logout"})})},mt=f.c.main(_e||(_e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),ht=function(e){var t=e.children;return Object(m.jsx)(mt,{children:t})},pt=f.c.div(et||(et=Object(g.a)(["\n  width: 100%;\n  height: 4px;\n  background: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n\n  .progress {\n    height: 100%;\n    background: ",";\n  }\n"])),v.gray[6],v.indigo[7]),xt=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useRef)(null),o=Object(a.useCallback)((function(){var e=document.documentElement,t=e.scrollTop,n=e.scrollHeight,a=e.clientHeight;0!==t?c(100*(t/(n-a))):c(0)}),[]);return Object(a.useEffect)((function(){return window.addEventListener("scroll",o,!0),function(){window.removeEventListener("scroll",o,!0)}}),[o]),Object(m.jsx)(pt,{ref:r,children:Object(m.jsx)("div",{className:"progress",style:{width:n+"%"}})})},yt=n(76),Tt=n.n(yt);var wt,kt=function(){var e=Object(b.c)(T),t=Object(d.a)(e,2)[1],n=Object(a.useState)(0),c=Object(d.a)(n,2),r=c[0],o=c[1],i=function(){o(0)},u=function(){var e=Object(O.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie.a.get("/logout",{headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",JSESSIONID:Tt.a.get("JSESSIONID")}});case 3:document.location.href="/",e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=setTimeout((function(){o((function(e){return e+1}))}),1e3);return r>1200&&u(),function(){return clearTimeout(e)}}),[r]),Object(a.useEffect)((function(){var e=Tt.a.get("JSESSIONID");console.log(e),e?t(e):document.location.href="/customLogin"}),[t]),Object(a.useEffect)((function(){return window.addEventListener("mousemove",i),window.addEventListener("mousedown",i),window.addEventListener("keypress",i),function(){window.removeEventListener("mousemove",i),window.removeEventListener("mousedown",i),window.removeEventListener("keypress",i)}}),[]),{onLogout:u}},Ct=Object(f.a)(wt||(wt=Object(g.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    box-sizing: border-box;\n    font-size: 0.8rem;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n"])));n(179);var Pt=function(){var e=kt().onLogout,t=Re(),n=t.onSubmit,c=t.onKeyPress,a=t.total,r=t.onExcel;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Ct,{}),Object(m.jsx)(xt,{}),Object(m.jsxs)(ht,{children:[Object(m.jsx)(vt,{onLogout:e}),Object(m.jsx)(De,{onSubmit:n,onKeyPress:c}),Object(m.jsx)(gt,{onExcel:r}),Object(m.jsx)(Ot,{total:a}),Object(m.jsx)(rt,{})]}),Object(m.jsx)(u.a,{position:"bottom-center",draggable:!1})]})},Dt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)(Pt,{})})}),document.getElementById("root")),Dt()}},[[181,1,2]]]);
//# sourceMappingURL=main.9866798b.chunk.js.map