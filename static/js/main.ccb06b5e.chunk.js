(this.webpackJsonpbiddr_client=this.webpackJsonpbiddr_client||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(16),r=n.n(s),i=(n(24),n(9)),a=n(7),o=(n(25),n(6)),l=n(2),u=n(0);function j(){return Object(u.jsx)("img",{className:"welcome",src:"/auction/WelcomePage.png",width:"100%"})}var d="https://chengs-auction.herokuapp.com/api/v1",b=function(e){var t=JSON.stringify(e).length+1;return fetch("".concat(d,"/session"),{headers:{"Content-Type":"application/json",Host:"chengs-auction.herokuapp.com","Content-Length":t},credentials:"include",method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()}))},m=function(){return fetch("".concat(d,"/current_user"),{headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()}))},h=function(){return fetch("".concat(d,"/session"),{method:"DELETE",credentials:"include"}).then((function(e){return e.json()}))},f=function(e){return fetch("".concat(d,"/users"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e})}).then((function(e){return e.json()}))},O=function(){return fetch("".concat(d,"/auctions")).then((function(e){return e.json()}))},x=function(e){return fetch("".concat(d,"/auctions"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},p=function(e){return fetch("".concat(d,"/auctions/").concat(e)).then((function(e){return e.json()}))},v=function(e){return fetch("".concat(d,"/auctions/").concat(e),{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({published:!0})}).then((function(e){return e.json()}))},g=function(e,t){return fetch("".concat(d,"/auctions/").concat(e,"/bids"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}))};function N(e){e.current_user;var t=Object(c.useState)([]),n=Object(a.a)(t,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){O().then((function(e){r(e)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{style:{backgroundColor:"#FFF6E8",textAlign:"center"},children:Object(u.jsx)("h1",{children:Object(u.jsx)("strong",{children:"Auctions"})})}),s.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(o.b,{to:"/auctions/".concat(e.id),children:Object(u.jsx)("p",{children:e.title})},e.id),Object(u.jsxs)("p",{children:["Posted on ",new Date(e.created_at).toDateString()]})]},e.id)}))]})}function _(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),s=n[0],r=n[1];e.current_user;function i(){p(e.match.params.id).then((function(e){r(e)}))}return Object(c.useEffect)((function(){i()}),[]),Object(u.jsx)(u.Fragment,{children:s?Object(u.jsxs)("div",{className:"container pt-4",children:[Object(u.jsx)("h1",{children:s.title}),Object(u.jsxs)("div",{className:"container-fluid row justify-content-between",children:[Object(u.jsxs)("div",{className:"col-6",children:[Object(u.jsx)("p",{children:s.description}),Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={amount:new FormData(e.currentTarget).get("amount")};g(s.id,t).then((function(){return i()}))},children:Object(u.jsxs)("p",{className:"form-group d-flex",children:[Object(u.jsx)("input",{type:"number",name:"amount",id:"amount",placeholder:"475",className:"form-control"}),Object(u.jsx)("input",{type:"submit",value:"Bid",className:"btn btn-secondary ml-2"})]})}),Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),v(e.match.params.id).then((function(e){console.log(e)}))},children:Object(u.jsx)("p",{className:"form-group d-flex",children:Object(u.jsx)("input",{type:"submit",value:"Publish",className:"btn btn-secondary ml-2 form-control"})})}),Object(u.jsx)("p",{children:Object(u.jsx)("u",{children:"Previous Bids"})}),s.bids?s.bids.map((function(e,t){return Object(u.jsxs)("p",{children:[e.amount," on ",new Date(e.created_at).toDateString()]},t)})):null]}),Object(u.jsxs)("div",{className:"col-6",children:[Object(u.jsxs)("p",{children:["Current Bid: $",s.active_bid?s.active_bid:0]}),Object(u.jsxs)("p",{children:["Ends At: ",new Date(s.end_date).toDateString()]}),Object(u.jsx)("p",{children:s.active_bid<s.reserve_bid?"Reserved Price Met":"Reserved Price Not Met"})]})]})]}):""})}var y=function(e){var t=e.forField,n=e.errors,c=void 0===n?{}:n,s=[];return c[t]&&(console.log("Error Field:",c[t]),s=c[t],console.log("Filtered Errors",s)),Object(u.jsx)("ul",{children:function(e){if(e)return e.map((function(e,t){return Object(u.jsx)("li",{children:e},t)}))}(s)})},S=function(e){var t=Object(c.useState)({}),n=Object(a.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),l=o[0],j=o[1],d=Object(c.useState)(""),b=Object(a.a)(d,2),m=b[0],h=b[1],f=Object(c.useState)(""),O=Object(a.a)(f,2),p=O[0],v=O[1],g=Object(c.useState)(""),N=Object(a.a)(g,2),_=N[0],S=N[1],w=function(t){t.preventDefault();var n=new FormData(t.currentTarget);!function(t){x(t).then((function(t){if(t.errors&&r(t.errors),t.id){var n=t.id;e.history.push("/auctions/".concat(n))}}))}({title:n.get("title"),description:n.get("description"),end_date:n.get("end_date"),reserve_bid:n.get("reserve_bid")}),t.currentTarget.reset()};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{style:{backgroundColor:"#FFF6E8",textAlign:"center"},children:Object(u.jsx)("h1",{children:Object(u.jsx)("strong",{children:"Create An Auction"})})}),Object(u.jsx)("form",{onSubmit:function(e){return w(e)},children:Object(u.jsxs)("div",{className:"container col-8",children:[Object(u.jsxs)("div",{className:"form-group d-flex",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title*: "}),Object(u.jsx)("input",{name:"title",id:"title",value:l,onChange:function(e){return j(e.target.value)},className:"form-control ml-3"})]}),Object(u.jsxs)("div",{className:"form-group d-flex",children:[Object(u.jsx)("label",{htmlFor:"description",children:"Description*: "}),Object(u.jsx)("textarea",{name:"description",id:"description",value:m,onChange:function(e){return h(e.target.value)},className:"form-control ml-3"})]}),Object(u.jsxs)("div",{className:"form-group d-flex",children:[Object(u.jsx)("label",{htmlFor:"end_date",children:"EndsAt*: "}),Object(u.jsx)("input",{type:"date",min:Date.now(),name:"end_date",id:"end_date",value:p,onChange:function(e){return v(e.target.value)},className:"form-control ml-3"})]}),Object(u.jsxs)("div",{className:"form-group d-flex",children:[Object(u.jsx)("label",{htmlFor:"reserve_bid",children:"ReservePrice*: "}),Object(u.jsx)("input",{type:"number",min:1,name:"reserve_bid",id:"reserve_bid",value:_,onChange:function(e){return S(e.target.value)},className:"form-control ml-3"})]}),Object(u.jsx)(y,{errors:s,forField:"title"}),Object(u.jsx)(y,{errors:s,forField:"description"}),Object(u.jsx)(y,{errors:s,forField:"end_date"}),Object(u.jsx)(y,{errors:s,forField:"reserve_bid"}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})})]})},w=function(e){var t=e.handleSubmit,n=e.history;return Object(u.jsx)("main",{className:"container d-flex justify-content-center pt-4",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=e.currentTarget,s=new FormData(c),r={email:s.get("email"),password:s.get("password")};t(r),n.push("/auctions")},children:[Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email*"}),Object(u.jsx)("input",{id:"email",type:"email",name:"email",className:"form-control"})]}),Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password*"}),Object(u.jsx)("input",{id:"password",type:"password",name:"password",className:"form-control"})]}),Object(u.jsx)("input",{type:"submit",value:"Sign In",className:"form-control btn btn-secondary mt-2"})]})})},F=function(e){var t=e.handleSubmit,n=e.history;return Object(u.jsx)("main",{className:"container d-flex justify-content-center pt-4",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=e.currentTarget,s=new FormData(c),r={first_name:s.get("first_name"),last_name:s.get("last_name"),email:s.get("email"),password:s.get("password"),password_confirmation:s.get("password_confirmation")};t(r),n.push("/auctions")},children:[Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("label",{htmlFor:"first_name",children:"First Name*"}),Object(u.jsx)("input",{id:"first_name",type:"text",name:"first_name",className:"form-control"})]}),Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("label",{htmlFor:"last_name",children:"Last Name*"}),Object(u.jsx)("input",{id:"last_name",type:"text",name:"last_name",className:"form-control"})]}),Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email*"}),Object(u.jsx)("input",{id:"email",type:"email",name:"email",className:"form-control"})]}),Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password*"}),Object(u.jsx)("input",{id:"password",type:"password",name:"password",className:"form-control"})]}),Object(u.jsxs)("div",{className:"d-flex flex-column",children:[Object(u.jsx)("label",{htmlFor:"password_confirmation",children:"Password*"}),Object(u.jsx)("input",{id:"password_confirmation",type:"password",name:"password_confirmation",className:"form-control"})]}),Object(u.jsx)("input",{type:"submit",value:"Sign In",className:"form-control btn btn-secondary mt-2"})]})})},T=function(e){var t=e.current_user,n=e.destroySession;return Object(u.jsxs)("nav",{className:"container-fluid navbar navbar-expand bg-light navbar-light justify-content-between py-0 font-size-lg",children:[Object(u.jsx)("ul",{className:"navbar-nav",children:Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.c,{to:"/auction",className:"nav-link",children:Object(u.jsx)("img",{src:"/auction/logo.jpg",alt:"Auction Logo"})})})}),Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.c,{to:"/auction",className:"nav-link",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.c,{to:"/auctions",className:"nav-link",children:"Auctions"})}),t.user?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.c,{to:"/auctions/new",className:"nav-link",children:"New Auctions"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("span",{className:"nav-link",children:t.user.first_name})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("button",{onClick:n,children:"Sign Out"})})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.c,{to:"/sign_in",className:"nav-link",children:"Sign In"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.c,{to:"/sign_up",className:"nav-link",children:"Sign Up"})})]})]})]})},C=n(19),D=function(e){var t=e.isAuth,n=e.component,c=Object(C.a)(e,["isAuth","component"]);return Object(u.jsx)(l.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){return t?Object(u.jsx)(n,Object(i.a)({},e)):Object(u.jsx)(l.a,{to:"/sign_in"})}}))},E=function(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){m().then((function(e){console.log("CURRENT_USER: ",e),s({user:e})}))}),[]);var r=function(e){b(e).then((function(e){return console.log("SignIn button: ",e),s({user:e}),m()})).then((function(e){console.log("bottom after: ",e),s({user:e})}))},d=function(e){f(e).then((function(){return m()})).then((function(e){s({user:e})}))};return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(T,{current_user:n,destroySession:function(){h().then((function(e){s({user:null})}))}}),Object(u.jsx)("div",{className:"app container-fluid",children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/auction",component:j}),Object(u.jsx)(D,{exact:!0,path:"/auctions/new",isAuth:n.user,component:S}),Object(u.jsx)(l.b,{path:"/auctions/:id",render:function(e){return Object(u.jsx)(_,Object(i.a)({current_user:n},e))}}),Object(u.jsx)(l.b,{path:"/auctions",render:function(e){return Object(u.jsx)(N,Object(i.a)({current_user:n},e))}}),Object(u.jsx)(l.b,{path:"/sign_in",render:function(e){return Object(u.jsx)(w,Object(i.a)({handleSubmit:r},e))}}),Object(u.jsx)(l.b,{path:"/sign_up",render:function(e){return Object(u.jsx)(F,Object(i.a)({handleSubmit:d},e))}})]})})]})};n(35);r.a.render(Object(u.jsx)(E,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ccb06b5e.chunk.js.map