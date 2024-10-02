(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{6871:function(e,s,l){Promise.resolve().then(l.bind(l,2787))},4784:function(e,s,l){"use strict";l.d(s,{T9:function(){return n},X:function(){return d},XW:function(){return r}});var i=l(8137),t=l(1116),a=l(3580);let n=(0,t.hg)("plans",async e=>{let{currentPage:s}=e;try{return(await i.Z.get("plan".concat(s?"?page="+s:""),{withCredentials:!0})).data}catch(e){var l,t;throw a.Am.error(null===(t=e.response)||void 0===t?void 0:null===(l=t.data)||void 0===l?void 0:l.message),e}}),r=(0,t.hg)("createSubscription",async e=>{var s,l,t;let{data:n,setModalOpen:r,router:d}=e;try{let e=await i.Z.post("subscription",n,{withCredentials:!0});return r(!1),a.Am.success(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message),d.push("/subscription"),e.data}catch(e){throw a.Am.error(null===(t=e.response)||void 0===t?void 0:null===(l=t.data)||void 0===l?void 0:l.message),e}}),d=(0,t.hg)("getSubscribedPlan",async()=>{try{return(await i.Z.get("subscription/user-subscription",{withCredentials:!0})).data}catch(l){var e,s;throw a.Am.error(null===(s=l.response)||void 0===s?void 0:null===(e=s.data)||void 0===e?void 0:e.message),l}}),o=(0,t.oM)({name:"plans",initialState:{allPlans:{},isAllPlanLoading:!1,isSubscribedPlanLoading:!1,isCreateSubscriptionLoading:!1,subscribedPlan:{}},reducers:{},extraReducers:e=>{e.addCase(n.pending,e=>{e.isAllPlanLoading=!0}),e.addCase(n.fulfilled,(e,s)=>{e.allPlans=s.payload,e.isAllPlanLoading=!1}),e.addCase(n.rejected,e=>{e.isAllPlanLoading=!1}),e.addCase(r.pending,e=>{e.isCreateSubscriptionLoading=!0}),e.addCase(r.fulfilled,(e,s)=>{e.isCreateSubscriptionLoading=!1}),e.addCase(r.rejected,e=>{e.isCreateSubscriptionLoading=!1}),e.addCase(d.pending,e=>{e.isSubscribedPlanLoading=!0}),e.addCase(d.fulfilled,(e,s)=>{e.subscribedPlan=s.payload,e.isSubscribedPlanLoading=!1}),e.addCase(d.rejected,e=>{e.isSubscribedPlanLoading=!1})}});s.ZP=o.reducer},2787:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return _}});var i=l(7437),t=l(2722),a=l(6522),n=l(1001),r=l(2265),d=l(1444),o=l(4784),c=l(528),x=l(7345),u=l(3580),p=l(59),C=l(6463);let h={iconStyle:"solid",hidePostalCode:!0,style:{base:{fontSmoothing:"antialiased","::placeholder":{color:"#CFD7DF"}},invalid:{color:"red"}}};var m=e=>{let{planId:s,setModalOpen:l}=e,t=(0,x.useStripe)(),a=(0,x.useElements)(),n=(0,C.useRouter)(),r=(0,d.I0)(),c=(0,d.v9)(e=>{var s;return null==e?void 0:null===(s=e.plans)||void 0===s?void 0:s.isCreateSubscriptionLoading}),m=async e=>{if(e.preventDefault(),!t||!a)return;let i=a.getElement(x.CardElement);if(!i){u.Am.error("Payment information not found.");return}let d=await t.createPaymentMethod({type:"card",card:i});if(d.error)console.log(d.error.message),u.Am.error(d.error.message);else{var c;let e={planId:s,payment_method:null==d?void 0:null===(c=d.paymentMethod)||void 0===c?void 0:c.id};r((0,o.XW)({data:e,setModalOpen:l,router:n}))}};return(0,i.jsxs)("form",{onSubmit:m,children:[(0,i.jsx)(x.CardElement,{options:h,className:"border border-[#EDEDED] h-14 p-4 rounded-xl bg-white text-base"}),(0,i.jsx)("div",{className:"flex items-center justify-center mt-8",children:(0,i.jsx)("button",{disabled:c,type:"submit",className:"z-10 py-3 px-6 rounded-full flex items-center justify-center gap-1 text-base bg-black text-white w-44",children:c?(0,i.jsx)(p.Z,{}):"Subscribe Now"})})]})},v=l(3537),f=e=>{let{length:s}=e;return(0,i.jsx)(i.Fragment,{children:Array.from({length:s}).map((e,s)=>(0,i.jsxs)("div",{className:"p-6 animate-pulse border rounded-xl shadow-[0px_0px_60px_30px_#00000008] bg-white flex flex-col items-center",children:[(0,i.jsx)("div",{className:"h-8 bg-gray-200 rounded mb-4 w-2/4"}),Array.from({length:3}).map((e,s)=>(0,i.jsx)("div",{className:"h-4 bg-gray-200 rounded w-full mb-2"},s)),(0,i.jsx)("div",{className:"h-10 bg-gray-200 rounded mb-6 w-2/4 mt-4"}),Array.from({length:4}).map((e,s)=>(0,i.jsx)("div",{className:"h-6 bg-gray-200 rounded w-3/4 mb-2"},s))]},s))})},g=l(3153),b=l(3792),j=l(3329),w=e=>{var s,l,t;let{plan:a,selectedPlan:n,features:r,setSelectedPlan:o}=e,c=(0,d.v9)(e=>{var s,l;return null==e?void 0:null===(l=e.plans)||void 0===l?void 0:null===(s=l.subscribedPlan)||void 0===s?void 0:s.userSubscriptions});return(0,i.jsxs)("div",{className:"shadow-[0px_0px_60px_30px_#00000008] h-full p-6 rounded-xl flex flex-col justify-between items-center gap-6 transition-all duration-300 cursor-pointer relative ".concat((null==n?void 0:n._id)===(null==a?void 0:a._id)?"bg-black text-white transform scale-y-100":"bg-white"),onClick:()=>o(a),children:[c&&(null===(l=c[0])||void 0===l?void 0:null===(s=l.planId)||void 0===s?void 0:s._id)===(null==a?void 0:a._id)&&(0,i.jsx)("div",{className:"absolute -top-3 px-2 py-1 text-sm shadow-[0px_0px_60px_30px_#00000008] rounded-2xl ".concat((null==n?void 0:n._id)===(null==a?void 0:a._id)?"text-black bg-white":"text-white bg-black"),children:"Current Plan"}),(0,i.jsxs)("div",{className:"flex flex-col items-center text-center gap-4",children:[(0,i.jsx)("span",{className:"text-2xl font-bold",children:a.name}),(0,i.jsx)("span",{children:a.description}),(0,i.jsxs)("div",{className:"flex items-center justify-center",children:[(0,i.jsxs)("span",{className:"lg:text-5xl text-4xl font-bold",children:["$",a.price]}),!a.free&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:"/"}),(0,i.jsx)("span",{className:"capitalize",children:a.interval})]})]}),(0,i.jsx)("div",{className:"flex flex-col items-start gap-3",children:null===(t=r[a._id])||void 0===t?void 0:t.map((e,s)=>(0,i.jsxs)("span",{className:"text-left flex items-start gap-3",children:[(0,i.jsx)("div",{className:"w-[8px] h-[18px] border-r-2 border-b-2 transform rotate-45 ".concat((null==n?void 0:n._id)===(null==a?void 0:a._id)?"border-white":"border-black")}),e]},s))})]})]})};let N={"66f69dfc2317187b59337ecf":["Register 1 Business","Limited access to basic features","Add 1 Location","Create 1 Review Form"],"66f69d142317187b59337ec3":["Register up to 3 Businesses","Basic analytics dashboard","Add up to 3 Locations","Create up to 3 Review Forms"],"66f69d762317187b59337ec5":["Register Unlimited Businesses","Advanced analytics and reporting","Add Unlimited Location","Create Unlimited Review Forms"]};var y=e=>{var s,l;let{pageCount:t,onPageChange:a,currentPage:n}=e,o=(0,r.useRef)(null),u=(0,v.J)("pk_test_51LMyjxA4W5oaFcE3knRBfDStl55nBP3yg0ayEpI1Zjt8T04HpNamuG13e0astSrIceY4vrCRIoYaoOzyWPIYFvEE00iC1iIUXU"),[C,h]=(0,r.useState)(null),[y,_]=(0,r.useState)(!1),k=(0,d.v9)(e=>{var s;return null==e?void 0:null===(s=e.plans)||void 0===s?void 0:s.isAllPlanLoading}),L=(0,d.v9)(e=>{var s;return null==e?void 0:null===(s=e.plans)||void 0===s?void 0:s.isCreateSubscriptionLoading}),P=(0,d.v9)(e=>{var s;return null==e?void 0:null===(s=e.plans)||void 0===s?void 0:s.allPlans}),Z=(0,d.v9)(e=>{var s,l;return null==e?void 0:null===(l=e.plans)||void 0===l?void 0:null===(s=l.subscribedPlan)||void 0===s?void 0:s.userSubscriptions}),S=(0,r.useMemo)(()=>{var e;return(null==P?void 0:null===(e=P.data)||void 0===e?void 0:e.docs)?[...P.data.docs].sort((e,s)=>e.price-s.price):[]},[P]);(0,r.useEffect)(()=>{(null==Z?void 0:Z.length)?h(S.find(e=>e._id===Z[0].planId._id)):h(S.find(e=>!0===e.free))},[S,Z]);let M=()=>{_(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"gradient-bg 2xl:h-[calc(100vh-260px)] lg:flex lg:flex-col lg:justify-center lg:items-center",children:[(0,i.jsx)("div",{className:"hidden sm:grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-6 mb-6 w-full",children:S.length>0?k?(0,i.jsx)(f,{length:3}):(0,i.jsxs)(i.Fragment,{children:[S.map((e,s)=>(0,i.jsx)(w,{plan:e,selectedPlan:C,features:N,setSelectedPlan:h},s)),t>1&&(0,i.jsx)("div",{className:"flex justify-center mt-4 mb-2",children:(0,i.jsx)(j.Z,{pageCount:t,onPageChange:a,currentPage:n})})]}):(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center min-h-52 bg-white rounded-xl gap-3 shadow-[0px_0px_60px_30px_#00000008]",children:[(0,i.jsx)(b.Z,{}),(0,i.jsx)("h2",{className:"text-2xl font-primary",children:"No Plan found"})]})}),(0,i.jsx)("div",{className:"mb-8 block sm:hidden",children:S.length>0?k?(0,i.jsx)(f,{length:1}):(0,i.jsx)(g.Z,{ref:o,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,children:S.map((e,s)=>{var l,t,a;return(0,i.jsxs)("div",{className:"shadow-[0px_0px_60px_30px_#00000008] p-6 rounded-xl !flex flex-col justify-between items-center gap-2 transition-all duration-300 cursor-pointer ".concat((null==C?void 0:C._id)===(null==e?void 0:e._id)?"bg-black text-white transform scale-y-100":"bg-white"),onClick:()=>h(e),children:[Z&&(null===(t=Z[0])||void 0===t?void 0:null===(l=t.planId)||void 0===l?void 0:l._id)===(null==e?void 0:e._id)&&(0,i.jsx)("div",{className:" px-2 py-1 text-sm shadow-[0px_0px_60px_30px_#00000008] w-max rounded-2xl ".concat((null==C?void 0:C._id)===(null==e?void 0:e._id)?"text-black bg-white":"text-white bg-black"),children:"Current Plan"}),(0,i.jsxs)("div",{className:"flex flex-col items-center text-center gap-4",children:[(0,i.jsxs)("span",{className:"text-2xl font-bold",children:[" ",e.name]}),(0,i.jsx)("span",{className:"flex-1",children:e.description}),(0,i.jsxs)("div",{className:"flex items-center justify-center",children:[(0,i.jsxs)("span",{className:"text-4xl font-bold",children:["$",e.price]}),e.free?"":(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:"/"}),(0,i.jsx)("span",{className:"capitalize",children:e.interval})]})]}),(0,i.jsx)("div",{className:"flex flex-col items-start gap-3",children:null===(a=N[null==e?void 0:e._id])||void 0===a?void 0:a.map((s,l)=>(0,i.jsxs)("span",{className:"text-left flex items-start gap-3",children:[(0,i.jsx)("div",{className:"w-[8px] h-[18px] border-r-2 border-b-2  transform rotate-45 ".concat((null==C?void 0:C._id)===(null==e?void 0:e._id)?"border-white":"border-black")}),s]},l))})]})]},s)})}):""}),(null===(l=Z[0])||void 0===l?void 0:null===(s=l.planId)||void 0===s?void 0:s._id)!==(null==C?void 0:C._id)&&(0,i.jsx)("div",{className:"flex items-center justify-center",children:(0,i.jsx)("button",{onClick:()=>_(!0),className:"z-10 py-4 px-6 rounded-full flex items-center gap-1 text-base transition-all duration-300 bg-black text-white",children:"Subscribe Now"})})]}),(0,i.jsx)(c.Z,{isOpen:y,onClose:()=>_(!1),heading:"Payment Method",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex flex-col border border-[#EDEDED] p-3 rounded-xl mb-2",children:[(0,i.jsxs)("div",{className:"flex justify-between text-black gap-3 items-center border-b border-[#EDEDED] pb-3 flex-wrap",children:[(0,i.jsx)("span",{className:"text-base",children:"Subscription Type"}),(0,i.jsx)("h4",{className:"text-lg font-semibold",children:null==C?void 0:C.name})]}),(0,i.jsxs)("div",{className:"flex justify-between text-black gap-3 items-center pt-3 flex-wrap",children:[(0,i.jsx)("span",{className:"text-base",children:"Total"}),(0,i.jsxs)("h4",{className:"text-lg font-semibold",children:["$",null==C?void 0:C.price]})]})]}),(null==C?void 0:C.free)?(0,i.jsx)("div",{className:"flex items-center justify-center mt-2",children:(0,i.jsx)("button",{disabled:k,onClick:()=>M(),className:"z-10 py-3 px-6 rounded-full flex items-center gap-1 text-base bg-black text-white",children:L?(0,i.jsx)(p.Z,{}):"Get Started For Free"})}):(0,i.jsx)(x.Elements,{stripe:u,children:(0,i.jsx)(m,{planId:null==C?void 0:C._id,setModalOpen:_})})]})})]})},_=(0,a.Z)(()=>{let e=(0,C.useRouter)(),s=(0,d.I0)(),[l,a]=(0,r.useState)(1),c=(0,d.v9)(e=>{var s;return null==e?void 0:null===(s=e.plans)||void 0===s?void 0:s.allPlans}),x=Math.ceil((null==c?void 0:c.totalRecords)/10),u=(0,d.v9)(e=>{var s,l;return null==e?void 0:null===(l=e.plans)||void 0===l?void 0:null===(s=l.subscribedPlan)||void 0===s?void 0:s.userSubscriptions});return(0,r.useEffect)(()=>{s((0,o.T9)({currentPage:l}))},[s,l]),(0,r.useEffect)(()=>{s((0,o.X)())},[s]),(0,i.jsx)("main",{className:"container",children:(0,i.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between gap-6 sm:flex-nowrap flex-wrap",children:[(0,i.jsxs)("div",{className:"flex items-center gap-3  sm:flex-nowrap flex-wrap",children:[(0,i.jsx)("div",{className:"bg-[#26A8F1] h-14 w-14 rounded-full flex items-center justify-center",children:(0,i.jsx)(t.Z,{})}),(0,i.jsx)(n.Z,{heading:"Payment Plans",description:"Choose and manage your payment plans with flexible options and easy upgrades.",business:!0})]}),u.length>0&&(0,i.jsx)("button",{onClick:()=>e.push("/subscription"),className:"bg-black text-white py-3 px-4 rounded-full flex items-center gap-1 text-sm",children:"View Subscription"})]}),(0,i.jsx)(y,{pageCount:x,currentPage:l,onPageChange:e=>{a(e.selected)}})]})})})},9320:function(e,s,l){"use strict";var i=l(7437);l(2265),s.Z=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#000000",className:"w-6 h-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})},59:function(e,s,l){"use strict";l.d(s,{Z:function(){return t}});var i=l(7437);function t(){return(0,i.jsx)("div",{role:"status",children:(0,i.jsxs)("svg",{"aria-hidden":"true",className:"inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}l(2265)},3792:function(e,s,l){"use strict";var i=l(7437);l(2265),s.Z=e=>{let{height:s=42,width:l=37}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("svg",{width:l,height:s,viewBox:"0 0 37 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M16.1252 18.5412C15.9712 16.9229 15.3987 15.489 14.2172 14.3431C13.0982 13.2572 11.7609 12.7769 10.2061 13.0545C8.86441 13.2938 7.85337 14.0638 7.08509 15.1601C6.17064 16.4652 5.80346 17.9348 5.8809 19.514C5.96617 21.2637 6.56304 22.8029 7.83249 24.0471C9.73449 25.9108 12.6754 25.7986 14.4477 23.8096C15.6232 22.4897 16.1305 20.9331 16.1574 19.1807C16.147 18.9745 16.1453 18.757 16.1244 18.5412H16.1252Z",fill:"white"}),(0,i.jsx)("path",{d:"M28.5919 14.6678C27.6679 13.5558 26.4959 12.8919 25.0246 12.8763C23.5184 12.8597 22.3108 13.5219 21.3641 14.6565C19.282 17.151 19.3011 21.062 21.3867 23.5504C23.2165 25.7335 26.2418 25.8692 28.2395 23.8428C29.5403 22.5246 30.0684 20.8923 30.1102 19.1365C30.0884 17.4381 29.6508 15.9416 28.5919 14.6678Z",fill:"white"}),(0,i.jsx)("path",{d:"M35.583 23.2179C35.0836 23.1292 34.5798 23.0692 34.0743 23.0387C33.9272 23.03 33.9011 22.9952 33.9351 22.8455C34.203 21.664 34.2761 20.4702 34.1265 19.2652C33.8724 17.2248 33.0685 15.4098 31.8521 13.7723C31.6241 13.4652 31.5484 13.1807 31.578 12.8031C31.6981 11.2526 31.7938 9.69948 31.8225 8.1429C31.8538 6.44015 31.8503 4.74001 31.5441 3.05727C31.4327 2.44387 31.2674 1.84351 30.9515 1.29536C30.6218 0.721974 30.1345 0.439197 29.4707 0.447898C29.0139 0.453988 28.5814 0.565359 28.1629 0.730674C27.1284 1.13874 26.2253 1.7652 25.3587 2.44735C23.7716 3.69591 22.3543 5.12285 21.0004 6.61591C20.8899 6.73772 20.7925 6.78383 20.628 6.74729C20.2965 6.6742 19.9607 6.61417 19.6248 6.56979C19.5952 6.56631 19.5717 6.56022 19.5517 6.55326C18.3006 6.38186 17.2495 6.44624 16.7161 6.5028C16.4055 6.53847 16.0958 6.58894 15.7886 6.65158C15.6781 6.6742 15.6007 6.65158 15.5215 6.56457C14.7741 5.7467 14.0006 4.95405 13.1967 4.19186C12.0334 3.08947 10.8292 2.03754 9.47705 1.1692C8.68266 0.659328 7.86131 0.192094 6.91205 0.0450499C5.84794 -0.119396 5.25976 0.15468 4.82385 1.06044C4.4123 1.9166 4.28701 2.84323 4.19565 3.77422C4.04426 5.32732 4.07558 6.88302 4.1478 8.43873C4.22001 9.98573 4.34095 11.5301 4.48104 13.0719C4.49844 13.2642 4.46538 13.4156 4.34183 13.5696C4.13823 13.8237 3.95116 14.0917 3.77279 14.3631C2.02393 17.029 1.35048 19.9055 2.09266 23.0535C2.13182 23.2205 2.08309 23.2649 1.92126 23.2762C1.4227 23.3128 0.926753 23.3745 0.436027 23.4703C0.122797 23.5312 -0.0451286 23.7757 0.0105567 24.0689C0.0627616 24.3464 0.313345 24.5091 0.615264 24.4552C1.15732 24.3577 1.70461 24.3021 2.25189 24.2481C2.38588 24.2351 2.4494 24.2733 2.49377 24.3952C2.63559 24.7832 2.81135 25.1573 3.01234 25.5176C3.07934 25.6376 3.05845 25.6829 2.94099 25.7455C2.37805 26.044 1.82642 26.3624 1.29654 26.7174C1.15994 26.8088 1.04421 26.9158 1.01289 27.0846C0.973738 27.2951 1.03377 27.4787 1.21127 27.6005C1.40269 27.7328 1.61064 27.7258 1.80206 27.5971C2.35021 27.2299 2.92098 26.9027 3.50394 26.5947C3.61183 26.5382 3.66316 26.5512 3.7319 26.6469C3.99814 27.0185 4.28788 27.3717 4.62199 27.6832C4.72292 27.7772 4.69943 27.8398 4.6333 27.9381C4.39055 28.2975 4.15041 28.6603 3.92158 29.0292C3.74408 29.3155 3.80933 29.6148 4.0634 29.767C4.31833 29.9202 4.59937 29.8279 4.78122 29.5391C4.9735 29.2328 5.17536 28.9318 5.36591 28.6238C5.44074 28.5019 5.50164 28.4932 5.6165 28.5846C7.01124 29.6966 8.60001 30.4327 10.2897 30.966C11.4652 31.3375 12.6711 31.5786 13.8884 31.7621C14.4017 31.5907 14.9064 31.763 15.411 31.8117C16.6874 31.9353 17.9656 32.0092 19.2463 31.9483C20.2139 31.9031 21.1797 31.8239 22.1376 31.6734C22.2003 31.6638 22.2664 31.6734 22.3308 31.6734C22.8145 31.5829 23.3009 31.5055 23.7812 31.3993C26.2392 30.8546 28.5493 29.9767 30.5269 28.3636C30.6218 28.2862 30.6635 28.3062 30.7245 28.3993C30.9254 28.709 31.1377 29.0109 31.3387 29.3207C31.531 29.6165 31.8155 29.7105 32.0766 29.5539C32.3289 29.4025 32.3846 29.0849 32.1966 28.7917C31.9704 28.4384 31.7407 28.086 31.4945 27.7458C31.4022 27.6188 31.4057 27.5466 31.5145 27.4387C31.8129 27.142 32.0809 26.8175 32.315 26.4686C32.4124 26.3233 32.4881 26.3076 32.6404 26.3885C33.2042 26.6852 33.7619 26.9932 34.2996 27.3352C34.5145 27.4718 34.7338 27.4544 34.9035 27.3082C35.0696 27.1646 35.1253 26.9436 35.0488 26.7365C35.0009 26.606 34.9008 26.526 34.7895 26.4546C34.2526 26.111 33.7001 25.7934 33.1294 25.5097C33.0128 25.4523 32.9849 25.401 33.0528 25.2818C33.2547 24.9294 33.413 24.5553 33.5479 24.1733C33.5992 24.028 33.6679 23.9932 33.8141 24.0045C34.3631 24.0454 34.9087 24.115 35.4542 24.1846C35.7744 24.2255 36.0059 24.048 36.0407 23.7739C36.0755 23.4964 35.8954 23.2745 35.5847 23.2188L35.583 23.2179ZM14.4487 23.8087C12.6763 25.7977 9.73546 25.91 7.83346 24.0463C6.56401 22.802 5.96714 21.2629 5.88187 19.5131C5.8053 17.9339 6.17161 16.4644 7.08606 15.1592C7.85435 14.0629 8.86538 13.2938 10.207 13.0536C11.7619 12.7761 13.0983 13.2564 14.2181 14.3422C15.3988 15.4881 15.9722 16.922 16.1262 18.5404C16.1471 18.7562 16.1488 18.9737 16.1593 19.1799C16.1314 20.9322 15.6251 22.4888 14.4496 23.8087H14.4487ZM28.2404 23.8418C26.2418 25.8673 23.2174 25.7325 21.3876 23.5494C19.302 21.061 19.2829 17.15 21.365 14.6555C22.3116 13.5209 23.5193 12.8596 25.0254 12.8753C26.4959 12.8909 27.6687 13.5557 28.5928 14.6668C29.6516 15.9397 30.0893 17.4362 30.111 19.1355C30.0693 20.8913 29.5411 22.5227 28.2404 23.8418Z",fill:"#020202"}),(0,i.jsx)("path",{d:"M8.94086 19.2348C8.94086 20.3081 9.25727 21.3412 9.8259 22.1246C10.3945 22.908 11.1728 23.383 12.0029 23.4532C12.8329 23.5234 13.6526 23.1835 14.2956 22.5026C14.9386 21.8217 15.3568 20.8507 15.4654 19.7866C15.574 18.7224 15.3648 17.6448 14.8802 16.7724C14.3957 15.8999 13.6721 15.2979 12.8563 15.0886C12.0405 14.8792 11.1934 15.078 10.487 15.6448C9.78065 16.2116 9.26779 17.1039 9.0525 18.1406L12.2171 19.2348H8.94086Z",fill:"black"}),(0,i.jsx)("path",{d:"M22.8913 19.2348C22.8913 20.3081 23.2077 21.3412 23.7763 22.1246C24.345 22.908 25.1232 23.383 25.9533 23.4532C26.7833 23.5234 27.603 23.1835 28.246 22.5026C28.889 21.8217 29.3072 20.8507 29.4158 19.7866C29.5244 18.7224 29.3152 17.6448 28.8307 16.7724C28.3462 15.8999 27.6226 15.2979 26.8067 15.0886C25.9909 14.8792 25.1439 15.078 24.4375 15.6448C23.7311 16.2116 23.2182 17.1039 23.0029 18.1406L26.1676 19.2348H22.8913Z",fill:"black"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.314 28.1438C16.5001 26.0842 19.4652 26.0842 20.6512 28.1438L25.9617 37.3658C27.1478 39.4254 25.6652 41.9999 23.2931 41.9999H12.6722C11.7588 41.9999 10.9774 41.6183 10.4294 41.0313C10.0419 41.2766 9.59648 41.4498 9.11677 41.5378C8.04333 41.7344 7.01548 41.5292 6.03092 41.0995C4.62183 40.4836 3.39944 39.5914 2.33177 38.4902C1.72043 37.8601 1.19248 37.1643 0.872545 36.335C0.600721 35.6303 0.53285 34.9232 0.84136 34.2087C1.04034 33.7491 1.36803 33.4822 1.88251 33.466C2.37819 33.4503 2.82061 33.621 3.24256 33.8539C4.35731 34.469 5.1578 35.3903 5.80927 36.4656C6.24641 37.1867 6.70194 37.8997 7.19383 38.5843C7.516 39.0318 7.96499 39.3443 8.5416 39.4174C8.95805 39.4705 9.32351 39.3861 9.59885 39.1835C9.54392 38.5835 9.66505 37.9537 10.0036 37.3658L15.314 28.1438Z",fill:"black"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.233 32.1147C23.2975 32.7585 22.9136 33.343 22.3757 33.4201C20.2928 33.7188 19.1336 33.8801 17.9551 33.8801C16.7779 33.8801 15.596 33.7192 13.467 33.4205C12.9289 33.345 12.5438 32.7617 12.6069 32.1177C12.6699 31.4736 13.1573 31.0127 13.6954 31.0882C15.8586 31.3916 16.9162 31.5318 17.9551 31.5318C18.9927 31.5318 20.0262 31.392 22.1423 31.0885C22.6803 31.0114 23.1686 31.4708 23.233 32.1147Z",fill:"#EC1A1A"}),(0,i.jsx)("path",{d:"M18.1272 25.2166C18.3861 25.2166 18.6525 25.282 18.9065 25.3437C19.4613 25.4794 19.665 26.0536 19.3128 26.5006C19.19 26.6556 19.0256 26.7828 18.8636 26.9015C18.6206 27.0796 18.5985 27.2419 18.812 27.4587C19.1839 27.8355 19.9448 27.827 20.3364 27.4406C20.4014 27.3776 20.4579 27.3037 20.5315 27.2516C20.7463 27.0978 21.0556 27.1232 21.2299 27.2988C21.4324 27.5036 21.452 27.7906 21.2544 28.0414C20.8592 28.5417 20.3167 28.7658 19.6932 28.8033C19.195 28.8336 18.7224 28.7234 18.3125 28.4302C18.1444 28.3103 18.0278 28.3624 17.8768 28.4605C16.9993 29.025 15.7719 28.8905 15.0797 28.1649C14.7852 27.8561 14.7606 27.5241 15.0147 27.2867C15.2528 27.0626 15.567 27.1099 15.8628 27.4127C16.2543 27.8124 16.9882 27.8488 17.3871 27.4878C17.635 27.2637 17.6203 27.0832 17.349 26.8918C17.2091 26.7925 17.0692 26.6871 16.9575 26.5599C16.5513 26.096 16.7415 25.4843 17.3405 25.3401C17.5945 25.2783 17.8437 25.2166 18.1247 25.2166H18.1272Z",fill:"white"}),(0,i.jsx)("ellipse",{cx:"18.2001",cy:"33.5755",rx:"1.4",ry:"1.4",fill:"#E9AF1C"}),(0,i.jsx)("path",{d:"M18.2 31.9199C17.2696 31.9199 16.52 32.6695 16.52 33.5999C16.52 34.5304 17.2696 35.2799 18.2 35.2799C19.1305 35.2799 19.88 34.5304 19.88 33.5999C19.88 32.6695 19.1305 31.9199 18.2 31.9199ZM19.0529 34.763L18.2 34.1556L17.3471 34.763L17.6702 33.7679L16.8173 33.1476H17.864L18.2 32.1525L18.5231 33.1476H19.5699L18.7169 33.7679L19.0529 34.763Z",fill:"black"}),(0,i.jsx)("g",{clipPath:"url(#clip0_369_42)",children:(0,i.jsx)("path",{d:"M29.7002 11.6426C27.7196 9.30098 25.8996 8.32098 23.1377 7.39847C24.1746 6.30297 25.1964 4.99137 26.4464 3.96137C28.1362 2.56571 29.7955 3.2463 29.9423 5.44988C30.0783 7.49493 29.7963 9.56838 29.6975 11.6435L29.7002 11.6426Z",fill:"white"})}),(0,i.jsx)("path",{d:"M6.37211 11.3638C8.35266 9.02217 10.1727 8.04217 12.9346 7.11966C11.8977 6.02417 10.8758 4.71256 9.62582 3.68256C7.93602 2.2869 6.27681 2.96749 6.12995 5.17107C5.99395 7.21612 6.276 9.28957 6.37477 11.3646L6.37211 11.3638Z",fill:"white"}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_369_42",children:(0,i.jsx)("rect",{width:"7.196",height:"8.5652",fill:"white",transform:"translate(22.3623 5.04004) rotate(-18.2015)"})})})]})})}},2722:function(e,s,l){"use strict";var i=l(7437);l(2265),s.Z=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"#ffffff",className:"size-8",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"})})})},8137:function(e,s,l){"use strict";let i=l(8472).Z.create({baseURL:"".concat("https://keephy-bk.vercel.app/api/v1/"),withCredentials:!0});s.Z=i},528:function(e,s,l){"use strict";var i=l(7437);l(2265);var t=l(9320);s.Z=e=>{let{isOpen:s,onClose:l,children:a,heading:n}=e;return s?(0,i.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50 ",children:[(0,i.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50",onClick:l}),(0,i.jsxs)("div",{className:"relative bg-white shadow-lg overflow-hidden w-11/12 max-w-md z-10 rounded-xl",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center pl-6 pr-4 py-4 border-b border-[#D9D9D9]",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold ",children:n}),(0,i.jsx)("button",{className:" right-2 text-gray-500 hover:text-gray-700",onClick:l,children:(0,i.jsx)(t.Z,{})})]}),(0,i.jsx)("div",{className:"p-6 flex flex-col gap-3",children:a})]})]}):null}},6522:function(e,s,l){"use strict";var i=l(7437),t=l(6463),a=l(2265),n=l(1444);s.Z=e=>{let s=s=>{let l=(0,t.usePathname)(),r=(0,n.v9)(e=>{var s;return null==e?void 0:null===(s=e.user)||void 0===s?void 0:s.isLoggedIn});return(0,a.useEffect)(()=>{r?r&&("/login"===l||"/"===l||l.includes("/verify-account"))&&(0,t.redirect)("/all-business"):"/login"===l||"/"===l||l.startsWith("/verify-account")||(0,t.redirect)("/login")},[r,l]),(0,i.jsx)(e,{...s})};return e.getInitialProps&&(s.getInitialProps=e.getInitialProps),s}},1001:function(e,s,l){"use strict";var i=l(7437);l(2265),s.Z=e=>{let{heading:s,description:l,red:t,business:a}=e;return(0,i.jsx)("div",{className:a?"":"container mb-11",children:(0,i.jsxs)("div",{className:"flex flex-col ".concat(a?"items-start":"items-center text-center"),children:[(0,i.jsx)("h2",{className:"sm:text-3xl text-2xl font-medium text-black capitalize",children:s}),(0,i.jsx)("p",{className:"text-sm font-normal max-w-lg ".concat(t?"text-[#FB2525]":"text-[#8D8D8D]"),children:l})]})})}},3329:function(e,s,l){"use strict";l.d(s,{Z:function(){return d}});var i=l(7437);l(2265);var t=l(8998),a=l.n(t),n=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("svg",{width:"24px",height:"24px",viewBox:"0 0 1024 1024",fill:"#000000",className:"icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:0}),(0,i.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,i.jsx)("path",{d:"M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"})})]})}),r=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("svg",{width:"24px",height:"24px",className:"transform rotate-180",viewBox:"0 0 1024 1024",fill:"#000000",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:0}),(0,i.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,i.jsx)("path",{d:"M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"})})]})}),d=e=>{let{pageCount:s,onPageChange:l,currentPage:t}=e;return(0,i.jsx)(a(),{previousLabel:(0,i.jsx)(n,{}),nextLabel:(0,i.jsx)(r,{}),previousClassName:"py-2 px-3 border-r border-black",nextClassName:"py-2 px-3 border-l border-black",activeLinkClassName:"bg-black text-white",containerClassName:"flex items-center rounded-full bg-white shadow-[0px_0px_60px_30px_#00000008]",pageLinkClassName:"py-2 px-3",breakLabel:"...",breakClassName:"break-me",pageCount:s,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>l({selected:e.selected+1}),initialPage:t-1})}}},function(e){e.O(0,[2427,4506,5080,2971,7023,1744],function(){return e(e.s=6871)}),_N_E=e.O()}]);