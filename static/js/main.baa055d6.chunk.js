(this["webpackJsonpau-test"]=this["webpackJsonpau-test"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"city":"\u0410\u0440\u0442\u0451\u043c\u043e\u0432\u0441\u043a","population":"1688"},{"city":"\u0410\u0447\u0438\u043d\u0441\u043a","population":"105259"},{"city":"\u0411\u043e\u0433\u043e\u0442\u043e\u043b","population":"19819"},{"city":"\u0411\u043e\u0440\u043e\u0434\u0438\u043d\u043e","population":"16061"},{"city":"\u0414\u0438\u0432\u043d\u043e\u0433\u043e\u0440\u0441\u043a","population":"29195"},{"city":"\u0414\u0443\u0434\u0438\u043d\u043a\u0430","population":"21015"},{"city":"\u0415\u043d\u0438\u0441\u0435\u0439\u0441\u043a","population":"17805"},{"city":"\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e\u0440\u0441\u043a","population":"83857"},{"city":"\u0417\u0430\u043e\u0437\u0451\u0440\u043d\u044b\u0439","population":"10286"},{"city":"\u0417\u0435\u043b\u0435\u043d\u043e\u0433\u043e\u0440\u0441\u043a","population":"61915"},{"city":"\u0418\u0433\u0430\u0440\u043a\u0430","population":"4417"},{"city":"\u0418\u043b\u0430\u043d\u0441\u043a\u0438\u0439","population":"14967"},{"city":"\u041a\u0430\u043d\u0441\u043a","population":"89111"},{"city":"\u041a\u043e\u0434\u0438\u043d\u0441\u043a","population":"15911"},{"city":"\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a","population":"1095286"},{"city":"\u041b\u0435\u0441\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a","population":"59525"},{"city":"\u041c\u0438\u043d\u0443\u0441\u0438\u043d\u0441\u043a","population":"68007"},{"city":"\u041d\u0430\u0437\u0430\u0440\u043e\u0432\u043e","population":"49825"},{"city":"\u041d\u043e\u0440\u0438\u043b\u044c\u0441\u043a","population":"179554"},{"city":"\u0421\u043e\u0441\u043d\u043e\u0432\u043e\u0431\u043e\u0440\u0441\u043a","population":"40614"},{"city":"\u0423\u0436\u0443\u0440","population":"15563"},{"city":"\u0423\u044f\u0440","population":"11981"},{"city":"\u0428\u0430\u0440\u044b\u043f\u043e\u0432\u043e","population":"37136"}]')},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),l=a(1),o=a.n(l),n=a(8),s=a.n(n),r=(a(14),a(15),a(4)),i=a(3),u=a(2),m=function(e){var t=e.value,a=e.onChange,l=e.formSelector,o=e.title,n=e.name,s=e.label,r=e.classSelector,i=e.about;return Object(c.jsxs)("div",{className:"form__input-container ".concat(l),children:[Object(c.jsx)("label",{onClick:a,className:"form__label form__label_".concat(r),htmlFor:s,children:o||""}),Object(c.jsxs)("div",{className:"form__item-wrapper",children:[Object(c.jsx)("div",{id:s,onClick:a,name:n,className:"form__item form__item_".concat(r," ").concat(t?"form__item_".concat(r,"_check"):"")}),Object(c.jsx)("label",{onClick:a,className:"form__label form__checkbox-about",htmlFor:s,children:i})]})]})},p=a(5),_=function(e){var t=e.onChange,a=e.value,l=e.formSelector,o=e.title,n=e.label,s=e.classSelector,r=e.prompt,u=e.validationMessage,m=e.name,_=Object(p.a)(e,["onChange","value","formSelector","title","label","classSelector","prompt","validationMessage","name"]);return Object(c.jsxs)("div",{className:"form__input-container ".concat(l),children:[Object(c.jsx)("label",{className:"form__label form__label_".concat(s),htmlFor:n,children:o||"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "}),Object(c.jsx)("input",Object(i.a)({value:a||"",onChange:t,id:n,name:m,className:"form__item form__item_".concat(s," form__item_").concat(u?"error":"")},_)),Object(c.jsx)("p",{className:"form__item-prompt",children:r||""}),Object(c.jsx)("span",{className:"form__input-error form__input-error_visible",children:u})]})},j=function(e){var t=e.value,a=e.onChange,l=e.formSelector,o=e.title,n=e.label,s=e.classSelector,r=e.selectList,u=e.prompt,m=Object(p.a)(e,["value","onChange","formSelector","title","label","classSelector","selectList","prompt"]);return Object(c.jsxs)("div",{className:"form__input-container ".concat(l),children:[Object(c.jsx)("label",{className:"form__label",htmlFor:n,children:o||"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(c.jsx)("div",{className:"form__select-wrapper",children:Object(c.jsx)("select",Object(i.a)(Object(i.a)({value:t,onChange:function(e){a(e)},id:n,className:"form__item ".concat(s)},m),{},{children:r?r.map((function(e,t){return Object(c.jsx)("option",{value:e.city,children:e.city},t)})):Object(c.jsx)("option",{children:"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"})}))}),Object(c.jsx)("p",{className:"form__item-prompt",children:u||""})]})},d=a(7),b=d.filter((function(e){return e.population>5e4})).sort((function(e,t){return t.population-e.population})).splice(0,1),f=d.filter((function(e){return e.population>5e4&e.population!==b[0].population+""}));f.unshift(b[0]);var O=f,h=(a(16),function(e){var t=e.onClick,a=e.type,l=e.children,o=e.classSelector,n=e.ariaLabel,s=e.isEnabled,r=void 0===s||s;return Object(c.jsx)("button",{onClick:function(e){t(e)},type:a,"aria-label":l,className:"button ".concat(o," ").concat(r?"":o+"_disabled"),"arial-label":n,disabled:!r,children:l})}),v=(a(17),function(e){var t=e.date;return Object(c.jsx)("div",{className:"form__save-info",children:Object(c.jsx)("p",{className:"form__save-date",children:"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ".concat(t)})})}),x=function(){var e=Object(l.useState)(O[0].city),t=Object(u.a)(e,2),a=t[0],o=t[1],n=Object(l.useState)(!1),s=Object(u.a)(n,2),p=s[0],d=s[1],b=Object(l.useState)({}),f=Object(u.a)(b,2),x=f[0],y=f[1],g=Object(l.useState)({}),S=Object(u.a)(g,2),w=S[0],N=S[1],C=Object(l.useState)(!1),k=Object(u.a)(C,2),L=k[0],E=k[1],F=Object(l.useState)("21 \u043e\u043a\u0442\u044f\u0431\u0440\u044f 2015 \u0432 04:29:00"),M=Object(u.a)(F,2),R=M[0],q=M[1],D=Object(l.useRef)();Object(l.useEffect)((function(){var e=x.password===x.passwordRepeat;E(D.current.checkValidity()&&e)}),[x]);var J=function(e){var t=e.target,a=t.name,c=t.value;y(Object(i.a)(Object(i.a)({},x),{},Object(r.a)({},a,c))),N(Object(i.a)(Object(i.a)({},w),{},Object(r.a)({},a,z(c,a,t))))},z=function(e,t,a){return"password"!==t||a.validity.valid?"userEmail"!==t||a.validity.valid?"passwordRepeat"===t&&e!==x.password?"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442":void 0:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 E-mail":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},B=function(){o(O[0].city),d(!1),y({})},I=function(){var e=x.userEmail,t=x.password;console.log(JSON.stringify({city:a,password:t,userEmail:e,check:p},null,"\t"))};return Object(c.jsxs)("form",{ref:D,className:"form form__container",children:[Object(c.jsx)("fieldset",{className:"form__fieldset form__fieldset_ctrl_city",children:Object(c.jsx)(j,{value:a,onChange:function(e){o(e.target.value)},formSelector:"form__input-container_ctrl_city",title:"\u0412\u0430\u0448 \u0433\u043e\u0440\u043e\u0434",name:"userCity",label:"user-city",classSelector:"form__item_city",selectList:O,required:!0})}),Object(c.jsxs)("fieldset",{className:"form__fieldset form__fieldset_ctrl_password",children:[Object(c.jsx)(_,{value:x.password,onChange:J,formSelector:"form__input-container_ctrl_password",title:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",label:"password",classSelector:"password",type:"password",prompt:"\u0412\u0430\u0448 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",minLength:"5",maxLength:"40",autoComplete:"off",validationMessage:w.password,required:!0}),Object(c.jsx)(_,{value:x.passwordRepeat,onChange:J,formSelector:"form__input-container_ctrl_password",title:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",name:"passwordRepeat",label:"password-repeat",classSelector:"password",type:"password",prompt:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u044d\u0442\u043e \u043e\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u0438\u0442 \u0432\u0430\u0441 \u0441 \u043d\u0430\u043c\u0438 \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u043e\u0448\u0438\u0431\u043a\u0438.",minLength:"5",maxLength:"40",validationMessage:w.passwordRepeat,autoComplete:"off",required:!0})]}),Object(c.jsxs)("fieldset",{className:"form__fieldset form__fieldset_ctrl_email",children:[Object(c.jsx)(_,{value:x.userEmail,onChange:J,formSelector:"form__input-container_ctrl_email",title:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",name:"userEmail",label:"user-email",classSelector:"email",type:"email",validationMessage:w.userEmail,prompt:"\u041c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.",pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0}),Object(c.jsx)(m,{value:p,onChange:function(){d(!p)},formSelector:"form__input-container_ctrl_email-check",title:"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d",name:"userAgreement",label:"user-agreement",classSelector:"agreement",about:"\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0435\u043c\u0435\u0439\u043b"})]}),Object(c.jsxs)("div",{className:"form__submit",children:[Object(c.jsx)(h,{onClick:function(e){e.preventDefault();var t=(new Date).toLocaleString("ru",{day:"numeric",year:"numeric",month:"long"}).slice(0,-3)+" \u0432 "+(new Date).toLocaleString("ru",{hour:"numeric",minute:"numeric",second:"numeric"});I(),q(t),B()},type:"submit",classSelector:"form__button",ariaLabel:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",isEnabled:L,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(c.jsx)(v,{date:R})]})]})},y=(a(18),function(e){var t=e.classSelector,a=e.user,o=Object(l.useState)("\u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c, \u043d\u0430\u0434\u043e \u043f\u043e\u043d\u044f\u0442\u044c"),n=Object(u.a)(o,2),s=n[0],r=n[1],i=Object(l.useState)(!1),m=Object(u.a)(i,2),p=m[0],_=m[1],j=Object(l.useState)("\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"),d=Object(u.a)(j,2),b=d[0],f=d[1];return Object(c.jsxs)("div",{className:"".concat(t," wellcome"),children:[Object(c.jsxs)("h1",{className:"wellcome__user-title",children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ",Object(c.jsx)("span",{className:"wellcome__user-current",children:a})]}),Object(c.jsx)(h,{onClick:function(e){_(!p),f(p?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")},disabled:"false",classSelector:"wellcome__button",children:b}),Object(c.jsxs)("div",{className:"wellcome__status",children:[p?Object(c.jsx)("input",{autoFocus:!0,maxLength:"120",value:s,onChange:function(e){r(e.target.value)},name:"status",type:"text",className:"wellcome__status-input wellcome__status-text".concat(p?"":"wellcome__status-input_display_hidden")}):Object(c.jsxs)("p",{className:"wellcome__status-text",children:[" ",s||"\u0412\u0430\u0448 \u0441\u0442\u0430\u0442\u0443\u0441"]}),Object(c.jsx)("div",{className:"wellcome__square-status"})]})]})});var g=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("header",{className:"header",children:Object(c.jsx)(y,{classSelector:"header__wrapper",user:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a".concat("\xa0","\u2116",Math.floor(1e3*Math.random()))})}),Object(c.jsx)("main",{className:"main",children:Object(c.jsx)(x,{})})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),l(e),o(e),n(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),S()}],[[19,1,2]]]);
//# sourceMappingURL=main.baa055d6.chunk.js.map