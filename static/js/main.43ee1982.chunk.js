(this["webpackJsonpdigital-wallet"]=this["webpackJsonpdigital-wallet"]||[]).push([[0],{107:function(e,t,s){},122:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),n=s(28),i=s.n(n),l=(s(107),s(89)),r=Object(l.a)({reducer:{}}),j=s(88),d=s(45),b=s(17),o=s(22),m=s(74),x=s(1),O=["component"],h=["component"],u=function(e){var t=e.component,s=Object(m.a)(e,O),c=!!localStorage.getItem("TOKEN");return Object(x.jsx)(b.b,Object(o.a)(Object(o.a)({},s),{},{render:function(e){return c?Object(x.jsx)(t,Object(o.a)({},e)):Object(x.jsx)(b.a,{to:"/auth/login"})}}))},f=function(e){var t=e.component,s=Object(m.a)(e,h),c=!!localStorage.getItem("TOKEN");return Object(x.jsx)(b.b,Object(o.a)(Object(o.a)({},s),{},{render:function(e){return c?Object(x.jsx)(b.a,{to:"/"}):Object(x.jsx)(t,Object(o.a)({},e))}}))},v=s.p+"static/media/logo.2ea5df70.svg",p=s(15),N=s.n(p),g=s(25),A=s(13),w=s(165),S=s(162),k=s(170),y=s(163),U=s(158),R=s(159),T=s(61),z=function(){var e=Object(b.g)(),t=Object(T.a)(),s=t.register,c=t.handleSubmit,n=(t.watch,t.formState.errors),i=a.a.useState(!1),l=Object(A.a)(i,2),r=l[0],j=l[1],d=function(){var t=Object(g.a)(N.a.mark((function t(s){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("TOKEN",JSON.stringify(new Date)),e.push("/");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("form",{className:"my-3",onSubmit:c(d),children:[Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)(w.a,{className:"ml-2",htmlFor:"username",children:"Username"}),Object(x.jsx)(S.a,Object(o.a)({size:"small",fullWidth:!0,hiddenLabel:!0,id:"username",variant:"outlined"},s("username",{required:!0}))),n.username&&Object(x.jsx)("p",{children:"This field is required"})]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)(w.a,{className:"ml-2",htmlFor:"password",children:"Password"}),Object(x.jsx)(S.a,Object(o.a)({size:"small",fullWidth:!0,hiddenLabel:!0,id:"password",type:r?"text":"password",InputProps:{endAdornment:Object(x.jsx)(k.a,{position:"end",children:Object(x.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:function(){j(!r)},edge:"end",children:r?Object(x.jsx)(U.a,{}):Object(x.jsx)(R.a,{})})})},variant:"outlined"},s("password",{required:!0}))),n.password&&Object(x.jsx)("p",{children:"This field is required"})]}),Object(x.jsx)("div",{className:"py-3",children:Object(x.jsx)("button",{className:"block mx-auto btn btn-blue",type:"submit",children:"Unlock"})})]})},C=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"bg-auth-ronin pt-8 pb-3 mb-4",children:Object(x.jsx)("img",{className:"mx-auto",src:v})}),Object(x.jsx)("h1",{className:"text-center py-2",children:"Ronin Wallet"}),Object(x.jsx)("p",{className:"text-center tracking-wide pt-1 pb-2",children:"Your Digital Passport"}),Object(x.jsx)(z,{})]})},E=s.p+"static/media/profile-icon.22073b92.svg",B=s.p+"static/media/copy-icon.dc2111f6.svg",W=s.p+"static/media/send-icon.9da5defd.svg",q=s.p+"static/media/ronin-white.8281dc78.svg",I=function(){return Object(x.jsx)("div",{className:"cursor-pointer w-full",children:Object(x.jsxs)("div",{className:"flex items-center rounded bg-blue-50 hover:bg-blue-100 px-3 py-2",children:[Object(x.jsx)("div",{className:"mx-2",children:Object(x.jsx)("img",{width:40,src:"data:image/png;base64,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"})}),Object(x.jsx)("div",{className:"ml-2 w-full",children:Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("span",{className:"font-semibold text-left text-sm",children:"50 EUR"}),Object(x.jsx)("span",{className:"text-left text-sm text-gray-500",children:"1,531,972 VND"})]})})]})})},D=function(){var e=Object(b.g)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"bg-home-ronin mt-8 mb-4",children:[Object(x.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[Object(x.jsxs)("div",{className:"flex flex-row items-center",children:[Object(x.jsx)("span",{className:"block w-2 h-2 bg-blue-500 rounded m-2"}),"Ronin Wallet"]}),Object(x.jsx)("img",{src:E})]}),Object(x.jsxs)("div",{className:"p-5 my-5 shadow-2xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 divide-y divide-blue-200",children:[Object(x.jsxs)("div",{className:"flex flex-row justify-between mb-3",children:[Object(x.jsxs)("div",{className:"text-white",children:["My Wallet \xa0 (",Object(x.jsx)("span",{children:"7300 3777 3888 3334"}),")"]}),Object(x.jsx)("img",{className:"cursor-pointer p-1 rounded hover:bg-blue-600",src:B})]}),Object(x.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(x.jsxs)("div",{className:"text-white mt-3",children:[Object(x.jsx)("h1",{className:"mb-2",children:"1,000 USD"}),Object(x.jsx)("div",{children:"23,046,000 VND"})]}),Object(x.jsx)("img",{className:"self-end",src:q})]})]}),Object(x.jsx)("div",{className:"flex flex-row justify-center",children:Object(x.jsxs)("button",{onClick:function(){return e.push("/send")},children:[Object(x.jsx)("img",{className:"mx-auto p-3 rounded-xl hover:bg-blue-100",src:W,alt:""}),Object(x.jsx)("span",{className:"text-xs text-center",children:"Send"})]})}),Object(x.jsx)("h2",{className:"font-semibold my-2",children:"Assets"}),Object(x.jsx)("div",{className:"flex flex-col",children:Object(x.jsx)(I,{})})]})})},P=s(87),J=s.n(P),L=s(171),Q=s(172),K=s(173),F=s(161),H=function(){var e=Object(b.g)(),t=Object(T.a)(),s=t.register,c=t.handleSubmit,n=(t.watch,t.formState.errors),i=a.a.useState(!1),l=Object(A.a)(i,2),r=l[0],j=l[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{className:"my-3 px-2",onSubmit:c((function(e){alert(JSON.stringify(e))})),children:[Object(x.jsxs)("div",{className:"mb-4",children:[Object(x.jsx)(w.a,{className:"ml-2",htmlFor:"username",children:"From"}),Object(x.jsx)(S.a,Object(o.a)({size:"small",fullWidth:!0,hiddenLabel:!0,disabled:!0,id:"from",variant:"outlined"},s("from",{required:!0})))]}),Object(x.jsxs)("div",{className:"mb-4",children:[Object(x.jsx)(w.a,{className:"ml-2",htmlFor:"to",children:"To"}),Object(x.jsx)(S.a,Object(o.a)({size:"small",fullWidth:!0,hiddenLabel:!0,id:"to",variant:"outlined"},s("to",{required:!0}))),n.to&&Object(x.jsx)("p",{children:"This field is required"})]}),Object(x.jsxs)("div",{className:"mb-4",children:[Object(x.jsx)(w.a,{className:"ml-2",htmlFor:"asset",children:"Asset"}),Object(x.jsx)(S.a,Object(o.a)({size:"small",fullWidth:!0,hiddenLabel:!0,id:"asset",variant:"outlined",disabled:!0,onClick:function(){j(!0)}},s("asset",{required:!0}))),n.asset&&Object(x.jsx)("p",{children:"This field is required"})]}),Object(x.jsxs)("div",{className:"mb-4",children:[Object(x.jsx)(w.a,{className:"ml-2",htmlFor:"amount",children:"Amount"}),Object(x.jsx)(S.a,Object(o.a)({size:"small",fullWidth:!0,hiddenLabel:!0,type:"number",id:"amount",variant:"outlined"},s("amount",{required:!0}))),n.amount&&Object(x.jsx)("p",{children:"This field is required"})]}),Object(x.jsxs)("div",{className:"py-3 grid grid-cols-2 gap-4",children:[Object(x.jsx)("button",{onClick:function(t){t.preventDefault(),e.goBack()},className:"btn text-blue-500 bg-blue-50 hover:bg-blue-100",children:"Cancel"}),Object(x.jsx)("button",{className:"btn btn-blue hover:bg-gradient-to-l hover:from-blue-400 hover:via-blue-500 hover:to-blue-600",type:"submit",children:"Send"})]})]}),Object(x.jsxs)(L.a,{open:r,maxWidth:"xs",fullWidth:!0,children:[Object(x.jsxs)(Q.a,{children:[Object(x.jsx)("div",{className:"text-center text-sm",children:"Assets"}),Object(x.jsx)(y.a,{"aria-label":"close",onClick:function(){return j(!1)},sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(x.jsx)(F.a,{})})]}),Object(x.jsx)(K.a,{dividers:!0,children:Object(x.jsx)(I,{})})]})]})},V=function(){var e=Object(b.g)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"relative p-3 mb-2",children:[Object(x.jsx)("div",{className:"absolute left-0 top-1",children:Object(x.jsx)(y.a,{onClick:function(){return e.goBack()},children:Object(x.jsx)(J.a,{})})}),Object(x.jsx)("div",{className:"text-center",children:"Send Assets"})]}),Object(x.jsx)(H,{})]})},Y=function(){return Object(x.jsx)(d.a,{basename:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/digital-wallet",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PUBLIC_URL),children:Object(x.jsx)("div",{className:"w-96 mx-auto py-8",children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(b.b,{path:"/auth",children:Object(x.jsx)(b.d,{children:Object(x.jsx)(f,{path:"/auth/login",component:C})})}),Object(x.jsx)(b.b,{path:"/",children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(u,{exact:!0,path:"/",component:D}),Object(x.jsx)(u,{path:"/send",component:V})]})})]})})})},M=function(){return Object(x.jsx)(j.a,{store:r,children:Object(x.jsx)(Y,{})})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,174)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root")),X()}},[[122,1,2]]]);
//# sourceMappingURL=main.43ee1982.chunk.js.map