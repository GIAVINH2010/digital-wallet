(this["webpackJsonpdigital-wallet"]=this["webpackJsonpdigital-wallet"]||[]).push([[0],{108:function(e,t,c){},123:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(28),l=c.n(n),r=(c(108),c(62)),i={fetchWalletsSuccess:function(e,t){e.wallet=t.payload}},d=Object(r.b)({name:"home",initialState:{wallet:{}},reducers:i}),o=d.actions.fetchWalletsSuccess,b=d.reducer,j=Object(r.a)({reducer:{home:b}}),u=c(48),x=c(45),m=c(17),h=c(22),O=c(76),A=c(1),p=["component"],v=["component"],g=function(e){var t=e.component,c=Object(O.a)(e,p),s=!!localStorage.getItem("TOKEN");return Object(A.jsx)(m.b,Object(h.a)(Object(h.a)({},c),{},{render:function(e){return s?Object(A.jsx)(t,Object(h.a)({},e)):Object(A.jsx)(m.a,{to:"/auth/login"})}}))},f=function(e){var t=e.component,c=Object(O.a)(e,v),s=!!localStorage.getItem("TOKEN");return Object(A.jsx)(m.b,Object(h.a)(Object(h.a)({},c),{},{render:function(e){return s?Object(A.jsx)(m.a,{to:"/"}):Object(A.jsx)(t,Object(h.a)({},e))}}))},N=c.p+"static/media/logo.2ea5df70.svg",w=c(15),k=c.n(w),y=c(23),B=c(12),D=c(166),S=c(163),W=c(171),C=c(164),E=c(159),R=c(160),z=c(63),T=function(){var e=Object(m.g)(),t=Object(z.a)(),c=t.register,s=t.handleSubmit,n=t.formState.errors,l=a.a.useState(!1),r=Object(B.a)(l,2),i=r[0],d=r[1],o=function(){var t=Object(y.a)(k.a.mark((function t(c){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("TOKEN",JSON.stringify(new Date)),e.push("/");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(A.jsxs)("form",{className:"my-3",onSubmit:s(o),children:[Object(A.jsxs)("div",{className:"mb-3",children:[Object(A.jsx)(D.a,{className:"ml-2",htmlFor:"username",children:"Username"}),Object(A.jsx)(S.a,Object(h.a)({size:"small",fullWidth:!0,hiddenLabel:!0,id:"username",variant:"outlined"},c("username",{required:!0}))),n.username&&Object(A.jsx)("p",{children:"This field is required"})]}),Object(A.jsxs)("div",{className:"mb-3",children:[Object(A.jsx)(D.a,{className:"ml-2",htmlFor:"password",children:"Password"}),Object(A.jsx)(S.a,Object(h.a)({size:"small",fullWidth:!0,hiddenLabel:!0,id:"password",type:i?"text":"password",InputProps:{endAdornment:Object(A.jsx)(W.a,{position:"end",children:Object(A.jsx)(C.a,{"aria-label":"toggle password visibility",onClick:function(){d(!i)},edge:"end",children:i?Object(A.jsx)(E.a,{}):Object(A.jsx)(R.a,{})})})},variant:"outlined"},c("password",{required:!0}))),n.password&&Object(A.jsx)("p",{children:"This field is required"})]}),Object(A.jsx)("div",{className:"py-3",children:Object(A.jsx)("button",{className:"block mx-auto btn btn-blue",type:"submit",children:"Unlock"})})]})},V=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"bg-auth-ronin pt-8 pb-3 mb-4",children:Object(A.jsx)("img",{className:"mx-auto",src:N,alt:"logo"})}),Object(A.jsxs)("div",{className:"px-3",children:[Object(A.jsx)("h1",{className:"text-center py-2",children:"Ronin Wallet"}),Object(A.jsx)("p",{className:"text-center tracking-wide pt-1 pb-2",children:"Your Digital Passport"}),Object(A.jsx)(T,{})]})]})},K=c.p+"static/media/profile-icon.22073b92.svg",U=c.p+"static/media/copy-icon.dc2111f6.svg",F=c.p+"static/media/send-icon.9da5defd.svg",J=c.p+"static/media/ronin-white.8281dc78.svg",P="data:image/png;base64,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",Q="data:image/png;base64,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",L="data:image/png;base64,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",I=function(e){return new Intl.NumberFormat("de-DE").format(e)},H=function(e){var t=e.asset,c=e.onClick,s=t.balance,a=t.currency,n=a.name,l=a.exchangeRate;return Object(A.jsx)("div",{className:"cursor-pointer w-full mb-2",onClick:function(){return c(n,s)},children:Object(A.jsxs)("div",{className:"flex items-center rounded-lg bg-blue-50 hover:bg-blue-100 px-3 py-3",children:[Object(A.jsx)("div",{className:"mx-2",children:function(e){switch(e){default:return Object(A.jsx)("img",{width:40,src:L,alt:"icon"});case"EUR":return Object(A.jsx)("img",{width:40,src:P,alt:"icon"});case"YEN":return Object(A.jsx)("img",{width:40,src:Q,alt:"icon"})}}(n)}),Object(A.jsx)("div",{className:"ml-2 w-full",children:Object(A.jsxs)("div",{className:"flex flex-col",children:[Object(A.jsxs)("span",{className:"font-semibold text-left text-sm",children:[I(s)," ",n]}),Object(A.jsxs)("span",{className:"text-left text-sm text-gray-500",children:[I(s*l)," VND"]})]})})]})})},Y=c(89),X=function(){var e=Object(y.a)(k.a.mark((function e(t){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(c=Y.find((function(e){return e.accountId===t})))&&j.dispatch(o(c));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e,t,c=Object(m.g)(),a=Object(u.b)((function(e){return e.home.wallet})),n=null===(e=a.assets)||void 0===e?void 0:e.find((function(e){return 1===e.currency.id})),l=null===(t=a.assets)||void 0===t?void 0:t.filter((function(e){return 1!==e.currency.id}));return Object(s.useEffect)((function(){X(1)}),[]),Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"bg-home-ronin mt-8 mb-4 px-3",children:[Object(A.jsxs)("div",{className:"flex flex-row justify-between mb-2",children:[Object(A.jsxs)("div",{className:"flex flex-row items-center",children:[Object(A.jsx)("span",{className:"block w-2 h-2 bg-blue-500 rounded m-2"}),"Ronin Wallet"]}),Object(A.jsx)("img",{src:K,alt:"profile-icon"})]}),Object(A.jsxs)("div",{className:"p-5 my-5 shadow-2xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 divide-y divide-blue-200",children:[Object(A.jsxs)("div",{className:"flex flex-row justify-between mb-3",children:[Object(A.jsxs)("div",{className:"text-white",children:["My Wallet \xa0 (",Object(A.jsx)("span",{children:a.walletAddress}),")"]}),Object(A.jsx)("img",{className:"cursor-pointer p-1 rounded hover:bg-blue-600",src:U,alt:"copy-icon"})]}),Object(A.jsxs)("div",{className:"flex flex-row justify-between",children:[Object(A.jsxs)("div",{className:"text-white mt-3",children:[Object(A.jsxs)("h1",{className:"mb-2",children:[(null===n||void 0===n?void 0:n.balance)?I(null===n||void 0===n?void 0:n.balance):0," USD"]}),Object(A.jsxs)("div",{children:[(null===n||void 0===n?void 0:n.currency.exchangeRate)?I((null===n||void 0===n?void 0:n.balance)*(null===n||void 0===n?void 0:n.currency.exchangeRate)):0," VND"]})]}),Object(A.jsx)("img",{className:"self-end",src:J,alt:"ronin"})]})]}),Object(A.jsx)("div",{className:"flex flex-row justify-center",children:Object(A.jsxs)("button",{onClick:function(){return c.push("/send")},children:[Object(A.jsx)("img",{className:"mx-auto p-3 rounded-xl hover:bg-blue-100",src:F,alt:""}),Object(A.jsx)("span",{className:"text-xs text-center",children:"Send"})]})}),Object(A.jsx)("h2",{className:"font-semibold my-2",children:"Assets"}),Object(A.jsx)("div",{className:"flex flex-col",children:null===l||void 0===l?void 0:l.map((function(e,t){return Object(A.jsx)(H,{asset:e,onClick:function(){}},t)}))})]})})},Z=c(90),q=c.n(Z),M=c(172),$=c(173),_=c(174),ee=c(162),te=c.p+"static/media/layer-icon.adc15ee5.svg",ce=function(){var e=Object(m.g)(),t=Object(s.useState)({name:"",balance:0}),c=Object(B.a)(t,2),a=c[0],n=c[1],l=Object(s.useState)(!1),r=Object(B.a)(l,2),i=r[0],d=r[1],o=Object(s.useState)(!1),b=Object(B.a)(o,2),j=b[0],x=b[1],O=Object(u.b)((function(e){return e.home.wallet})),p=Object(z.a)(),v=p.register,g=p.handleSubmit,f=p.setValue,N=p.getValues,w=p.formState.errors,k=function(e,t){f("asset",e),d(!1),n({name:e,balance:t})};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("form",{className:"my-3 px-2",onSubmit:g((function(e){console.log("%cForm.tsx line:71 data","color: white; background-color: #007acc;",e),x(!0)})),children:[Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)(D.a,{className:"ml-2",htmlFor:"from",children:"From"}),Object(A.jsx)(S.a,{size:"small",fullWidth:!0,hiddenLabel:!0,disabled:!0,id:"from",variant:"outlined",defaultValue:O.walletAddress})]}),Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)(D.a,{className:"ml-2",htmlFor:"to",children:"To"}),Object(A.jsx)(S.a,Object(h.a)({size:"small",fullWidth:!0,hiddenLabel:!0,id:"to",variant:"outlined"},v("to",{required:!0}))),w.to&&Object(A.jsx)("p",{children:"This field is required"})]}),Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)(D.a,{className:"ml-2",htmlFor:"asset",children:"Asset"}),Object(A.jsx)(S.a,Object(h.a)({size:"small",fullWidth:!0,hiddenLabel:!0,id:"asset",variant:"outlined",onClick:function(){X(2),d(!0)},InputProps:{startAdornment:Object(A.jsx)(W.a,{position:"start",children:function(e){switch(e){case"USD":return Object(A.jsx)("img",{width:30,src:L,alt:"icon"});case"EUR":return Object(A.jsx)("img",{width:30,src:P,alt:"icon"});case"YEN":return Object(A.jsx)("img",{width:30,src:Q,alt:"icon"});default:return Object(A.jsx)(A.Fragment,{})}}(N("asset"))}),endAdornment:Object(A.jsx)(W.a,{position:"start",children:Object(A.jsx)("img",{width:30,src:te,alt:"icon"})}),readOnly:!0}},v("asset",{required:!0}))),w.asset&&Object(A.jsx)("p",{children:"This field is required"})]}),Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)(D.a,{className:"ml-2",htmlFor:"amount",children:"Amount"}),Object(A.jsx)(S.a,Object(h.a)(Object(h.a)({size:"small",fullWidth:!0,hiddenLabel:!0,type:"number",id:"amount",variant:"outlined"},v("amount",{required:!0,min:0,max:a.balance})),{},{InputProps:{endAdornment:Object(A.jsx)(W.a,{position:"start",children:Object(A.jsx)("button",{onClick:function(e){if(e.preventDefault(),0===a.balance)return!0;f("amount",a.balance)},className:"btn-adorment",children:"Max"})})}})),w.amount&&Object(A.jsx)("p",{children:"This field is required"})]}),Object(A.jsxs)("div",{className:"py-5 grid grid-cols-2 gap-4",children:[Object(A.jsx)("button",{onClick:function(t){t.preventDefault(),e.goBack()},className:"btn text-blue-500 bg-blue-50 hover:bg-blue-100",children:"Cancel"}),Object(A.jsx)("button",{className:"btn btn-blue hover:bg-gradient-to-l hover:from-blue-400 hover:via-blue-500 hover:to-blue-600",type:"submit",children:"Send"})]})]}),Object(A.jsxs)(M.a,{open:i,maxWidth:"xs",fullWidth:!0,children:[Object(A.jsxs)($.a,{children:[Object(A.jsx)("div",{className:"text-center text-sm",children:"Assets"}),Object(A.jsx)(C.a,{"aria-label":"close",onClick:function(){return d(!1)},sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(A.jsx)(ee.a,{})})]}),Object(A.jsx)(_.a,{dividers:!0,children:O.assets&&O.assets.map((function(e,t){return Object(A.jsx)(H,{asset:e,onClick:k},t)}))})]}),Object(A.jsx)(M.a,{open:j,maxWidth:"xs",fullWidth:!0,children:Object(A.jsxs)(_.a,{children:[Object(A.jsx)("p",{className:"text-center text-xl font-bold py-3",children:"Successfully sent"}),Object(A.jsxs)("div",{className:"py-5",children:["Your ",Object(A.jsx)("span",{className:"font-bold",children:a.name})," has been sent! ",Object(A.jsx)("br",{}),"Thank you for using our service"]}),Object(A.jsx)("button",{onClick:function(){return e.goBack()},className:"btn btn-blue w-full",children:"OK"})]})})]})},se=function(){var e=Object(m.g)();return Object(A.jsxs)("div",{className:"px-3",children:[Object(A.jsxs)("div",{className:"relative p-3 mb-2",children:[Object(A.jsx)("div",{className:"absolute left-0 top-1",children:Object(A.jsx)(C.a,{onClick:function(){return e.goBack()},children:Object(A.jsx)(q.a,{})})}),Object(A.jsx)("div",{className:"text-center",children:"Send Assets"})]}),Object(A.jsx)(ce,{})]})},ae=function(){return Object(A.jsx)(x.a,{children:Object(A.jsx)("div",{className:"w-96 mx-auto py-8",children:Object(A.jsxs)(m.d,{children:[Object(A.jsx)(m.b,{path:"/auth",children:Object(A.jsx)(m.d,{children:Object(A.jsx)(f,{path:"/auth/login",component:V})})}),Object(A.jsx)(m.b,{path:"/",children:Object(A.jsxs)(m.d,{children:[Object(A.jsx)(g,{exact:!0,path:"/",component:G}),Object(A.jsx)(g,{path:"/send",component:se})]})})]})})})},ne=function(){return Object(A.jsx)(u.a,{store:j,children:Object(A.jsx)(ae,{})})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,175)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))};l.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(ne,{})}),document.getElementById("root")),le()},89:function(e){e.exports=JSON.parse('[{"id":1,"accountId":1,"walletAddress":"675848886","assets":[{"currency":{"id":1,"name":"USD","exchangeRate":23000},"balance":1000},{"currency":{"id":2,"name":"EUR","exchangeRate":26640},"balance":50},{"currency":{"id":3,"name":"YEN","exchangeRate":205},"balance":10000}]},{"id":2,"accountId":2,"walletAddress":"675848886","assets":[{"currency":{"id":1,"name":"USD","exchangeRate":23000},"balance":2000},{"currency":{"id":2,"name":"EUR","exchangeRate":26640},"balance":100},{"currency":{"id":3,"name":"YEN","exchangeRate":205},"balance":20000}]}]')}},[[123,1,2]]]);
//# sourceMappingURL=main.69d8d2ef.chunk.js.map