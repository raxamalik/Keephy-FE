(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8393],{5216:function(e,l,t){Promise.resolve().then(t.bind(t,7159))},1905:function(e,l,t){"use strict";t.d(l,{$2:function(){return C},Md:function(){return n},PI:function(){return m},bT:function(){return c},eg:function(){return h},nC:function(){return u},qt:function(){return r},yz:function(){return x}});var s=t(8137),a=t(1116),i=t(3580);let n=(0,a.hg)("typeForm/addTypeForm",async e=>{var l,t,a;let{formData:n,setForm:r,setModalOpen:d,setInputs:o}=e;try{let e=await s.Z.post("typeForm/addTypeForm",n);return i.Am.success(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.message),r(null==e?void 0:e.data),d(!0),o([]),e.data}catch(e){throw i.Am.error(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message),e}}),r=(0,a.hg)("typeForm/updateFormById",async e=>{var l,t,a;let{formData:n,router:r,formId:d}=e;try{let e=await s.Z.put("typeForm/updateFormById/".concat(d),n);return i.Am.success(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.message),r.push("/all-forms"),e.data}catch(e){throw i.Am.error(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message),e}}),d=(0,a.hg)("Form/getFormByBusinessId",async e=>{let{businessId:l,currentPage:t}=e;try{return(await s.Z.get("typeForm/getFormByBusinessId/".concat(l,"/?page=").concat(t),{withCredentials:!0})).data}catch(e){var a,n;throw i.Am.error(null===(n=e.response)||void 0===n?void 0:null===(a=n.data)||void 0===a?void 0:a.message),e}}),o=(0,a.hg)("Form/getFormByLocationId",async e=>{let{locationId:l,currentPage:t}=e;try{return(await s.Z.get("typeForm/getFormByLocationId/".concat(l,"/?page=").concat(t),{withCredentials:!0})).data}catch(e){var a,n;throw i.Am.error(null===(n=e.response)||void 0===n?void 0:null===(a=n.data)||void 0===a?void 0:a.message),e}}),c=(0,a.hg)("Form/getForSubmissionByFormId",async e=>{let{formId:l,currentPage:t,selectedBusiness:a,selectedLocation:n}=e,r="",d="";a&&(n?(r="location",d=n.value):(r="business",d=a.value));try{return(await s.Z.get("typeForm/getFormSubmissionByFormId/".concat(l,"/?page=").concat(t).concat(r?"&moduleName=".concat(r,"&moduleId=").concat(d):""),{withCredentials:!0})).data}catch(e){var o,c;throw i.Am.error(null===(c=e.response)||void 0===c?void 0:null===(o=c.data)||void 0===o?void 0:o.message),e}}),u=(0,a.hg)("typeForm/getFormById",async e=>{let{formId:l}=e;try{return(await s.Z.get("typeForm/getFormById/".concat(l))).data}catch(e){var t,a;throw i.Am.error(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message),e}}),h=(0,a.hg)("typeForm/deleteForm",async e=>{var l,t,a;let{deleteFormId:n,router:r,setDeleteModalOpen:d}=e;try{let e=await s.Z.delete("typeForm/deleteForm/".concat(n));return i.Am.success(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.message),d(!1),r.push("/all-forms"),e.data}catch(e){throw i.Am.error(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message),e}}),x=(0,a.hg)("typeForm/addFormSubmission",async e=>{var l,t,a;let{formData:n,router:r}=e;try{let e=await s.Z.post("typeForm/addFormSubmission",n);return i.Am.success(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.message),r.push("/thank-you"),e.data}catch(e){throw i.Am.error(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message),e}}),m=(0,a.hg)("Form",async e=>{let{currentPage:l}=e;try{return(await s.Z.get("typeForm/?".concat(l?"page="+l:""),{withCredentials:!0})).data}catch(e){var t,a;throw i.Am.error(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message),e}}),C=(0,a.hg)("typeForm/getFormByCode",async e=>{let{formCode:l}=e;try{return(await s.Z.get("typeForm/getFormByCode/".concat(l))).data.data}catch(e){var t,a;throw i.Am.error(null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message),e}}),f=(0,a.oM)({name:"reviewForm",initialState:{isLoading:!1,form:{},allForms:{},singleform:{},allFormsSubmissions:{},submissionForm:{}},reducers:{},extraReducers:e=>{e.addCase(n.pending,e=>{e.isLoading=!0}),e.addCase(n.fulfilled,(e,l)=>{e.isLoading=!1}),e.addCase(n.rejected,e=>{e.isLoading=!1}),e.addCase(r.pending,e=>{e.isLoading=!0}),e.addCase(r.fulfilled,(e,l)=>{e.isLoading=!1}),e.addCase(r.rejected,e=>{e.isLoading=!1}),e.addCase(m.pending,e=>{e.isLoading=!0}),e.addCase(m.fulfilled,(e,l)=>{e.allForms=l.payload,e.isLoading=!1}),e.addCase(m.rejected,e=>{e.isLoading=!1}),e.addCase(d.pending,e=>{e.isLoading=!0}),e.addCase(d.fulfilled,(e,l)=>{e.allForms=l.payload,e.isLoading=!1}),e.addCase(d.rejected,e=>{e.isLoading=!1}),e.addCase(o.pending,e=>{e.isLoading=!0}),e.addCase(o.fulfilled,(e,l)=>{e.allForms=l.payload,e.isLoading=!1}),e.addCase(o.rejected,e=>{e.isLoading=!1}),e.addCase(u.pending,e=>{e.isLoading=!0}),e.addCase(u.fulfilled,(e,l)=>{e.singleform=l.payload,e.isLoading=!1}),e.addCase(u.rejected,e=>{e.isLoading=!1}),e.addCase(h.pending,e=>{e.isLoading=!0}),e.addCase(h.fulfilled,(e,l)=>{e.isLoading=!1}),e.addCase(h.rejected,e=>{e.isLoading=!1}),e.addCase(x.pending,e=>{e.isLoading=!0}),e.addCase(x.fulfilled,(e,l)=>{e.isLoading=!1}),e.addCase(x.rejected,e=>{e.isLoading=!1}),e.addCase(c.pending,e=>{e.isLoading=!0}),e.addCase(c.fulfilled,(e,l)=>{e.allFormsSubmissions=l.payload,e.isLoading=!1}),e.addCase(c.rejected,e=>{e.isLoading=!1}),e.addCase(C.pending,e=>{e.isLoading=!0}),e.addCase(C.fulfilled,(e,l)=>{e.isLoading=!1,e.submissionForm={...e.submissionForm,...l.payload}}),e.addCase(C.rejected,e=>{e.isLoading=!1})}});l.ZP=f.reducer},7159:function(e,l,t){"use strict";t.r(l);var s=t(7437),a=t(2265),i=t(6463),n=t(1001),r=t(755),d=t(1444),o=t(1905),c=t(978),u=t(9904),h=t(6522),x=t(9652),m=t(3792);l.default=(0,h.Z)(()=>{var e,l;let t=(0,i.useParams)(),h=(0,i.useRouter)(),C=null==t?void 0:t.formId,f=(0,d.v9)(e=>{var l,t;return null==e?void 0:null===(t=e.reviewForm)||void 0===t?void 0:null===(l=t.singleform)||void 0===l?void 0:l.data}),g=(0,d.I0)();(0,a.useEffect)(()=>{g((0,o.nC)({formId:C}))},[C,g]);let p=null==t?void 0:t.businessId,v=null==t?void 0:t.locationId;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("main",{className:"container gradient-bg",children:[(0,s.jsxs)("button",{className:"text-[#1191D9] font-semibold text-base cursor-pointer mb-4 flex items-center gap-1",onClick:()=>h.back(),children:[(0,s.jsx)(r.Z,{})," Go Back"]}),(0,s.jsx)("div",{className:"flex flex-col gap-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between gap-6 flex-wrap",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3  sm:flex-nowrap flex-wrap",children:[(0,s.jsx)("div",{className:"bg-[#26A8F1] h-14 w-14 rounded-full flex items-center justify-center",children:(0,s.jsx)(x.Z,{})}),(0,s.jsx)(n.Z,{heading:null==f?void 0:f.name,description:"Here is the form you’ve created. Review it or create a new form to gather the information you need.",business:!0})]}),(0,s.jsx)("div",{className:"flex itemx-center gap-3 flex-wrap",children:(0,s.jsx)("button",{className:"bg-black text-white py-3 px-4 rounded-full text-sm",onClick:()=>h.push("/all-business/".concat(p,"/").concat(v,"/").concat(C,"/formSubmission")),children:"View Form Submissions"})})]})}),(0,s.jsx)("div",{className:"p-6 overflow-y-auto bg-white shadow-[0px_0px_60px_30px_#00000008] w-full rounded-xl mt-6",children:(0,s.jsx)("div",{className:"flex flex-col divide-y-[1px] divide-[#0F0F0F]",children:(null==f?void 0:null===(e=f.questions)||void 0===e?void 0:e.length)>0?null==f?void 0:null===(l=f.questions)||void 0===l?void 0:l.map((e,l)=>{var t,a;return(0,s.jsx)("div",{className:"flex items-center justify-between gap-4 w-full py-5 last:pb-0 first:pt-0",children:(0,s.jsxs)("div",{className:"flex gap-3 w-full",children:[(null==e?void 0:e.questionType)==="shortText"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"bg-black text-white hover:bg-grey rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0",children:(0,s.jsx)(c.E,{inputType:e.questionType})}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"w-full max-w-md",children:[(0,s.jsx)("p",{className:"text-black text-lg mb-1",children:e.questionLabel||""}),(0,s.jsx)("input",{type:"text",className:"border border-[#EDEDED] h-14 p-4 rounded-xl w-full text-lg opacity-50 outline-none",placeholder:"Type your answer here...",readOnly:!0})]})})]}),(null==e?void 0:e.questionType)==="longText"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"bg-black text-white hover:bg-grey rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0",children:(0,s.jsx)(c.E,{inputType:e.questionType})}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"w-full max-w-md",children:[(0,s.jsx)("p",{className:"text-black text-lg mb-1",children:e.questionLabel||""}),(0,s.jsx)("textarea",{className:"border border-[#EDEDED] p-4 rounded-xl outline-none resize-none opacity-50 w-full text-lg bg-transparent text-[#828282] focus:text-black}",autoComplete:"off",rows:1,readOnly:!0,placeholder:"Type your answer here..."})]})})]}),(null==e?void 0:e.questionType)==="dropdown"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"bg-black text-white hover:bg-grey rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0",children:(0,s.jsx)(c.E,{inputType:e.questionType})}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"w-full max-w-md",children:[(0,s.jsx)("p",{className:"text-black text-lg mb-1",children:e.questionLabel||""}),(0,s.jsx)("textarea",{className:"outline-none resize-none w-full text-lg h-auto opacity-50 bg-transparent text-[#828282] focus:text-black bg-white border border-[#EDEDED] p-2 rounded-xl",autoComplete:"off",rows:3,defaultValue:(null==e?void 0:null===(t=e.options)||void 0===t?void 0:t.join("\n"))||""})]})})]}),(null==e?void 0:e.questionType)==="multipleChoice"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"bg-black text-white hover:bg-grey rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0",children:(0,s.jsx)(c.E,{inputType:e.questionType})}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"w-full max-w-md",children:[(0,s.jsx)("p",{className:"text-black text-lg mb-1",children:e.questionLabel||""}),(0,s.jsx)("textarea",{className:"outline-none resize-none w-full text-lg opacity-50 h-auto bg-transparent text-[#828282] focus:text-black bg-white border border-[#EDEDED] p-2 rounded-xl",autoComplete:"off",rows:3,defaultValue:(null==e?void 0:null===(a=e.choices)||void 0===a?void 0:a.join("\n"))||"",readOnly:!0})]})})]}),(null==e?void 0:e.questionType)==="yesno"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"bg-black text-white hover:bg-grey rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0",children:(0,s.jsx)(c.E,{inputType:e.questionType})}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"w-full max-w-md",children:[(0,s.jsx)("p",{className:"text-black text-lg mb-1",children:e.questionLabel||""}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("button",{disabled:!0,className:"border-black border hover:bg-gray-50 disabled:opacity-50 transition-colors rounded-xl py-2 max-w-64 w-full",children:"Yes"}),(0,s.jsx)("button",{disabled:!0,className:"border-black border hover:bg-gray-50 disabled:opacity-50 transition-colors rounded-xl py-2 max-w-64 w-full",children:"No"})]})]})})]}),(null==e?void 0:e.questionType)==="rating"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:"bg-black text-white hover:bg-grey rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0",children:(0,s.jsx)(c.E,{inputType:e.questionType})}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"w-full max-w-md",children:[(0,s.jsx)("p",{className:"text-black text-lg mb-1",children:e.questionLabel||""}),(0,s.jsx)(u.Z,{iconSize:24,label:"",value:e.ratingData.maxRating})]})})]})]})},l)}):(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center min-h-52  gap-3",children:[(0,s.jsx)(m.Z,{}),(0,s.jsx)("h2",{className:"text-2xl font-primary",children:"No Form Data Found"})]})})})]}),";"]})})},9652:function(e,l,t){"use strict";var s=t(7437);t(2265),l.Z=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("svg",{fill:"#ffffff",width:32,height:32,viewBox:"0 0 24.00 24.00",children:(0,s.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M3.81818182,11 L20.1818182,11 C21.1859723,11 22,11.8954305 22,13 L22,15 C22,16.1045695 21.1859723,17 20.1818182,17 L3.81818182,17 C2.81402773,17 2,16.1045695 2,15 L2,13 C2,11.8954305 2.81402773,11 3.81818182,11 Z M4,13 L4,15 L20,15 L20,13 L4,13 Z M3.81818182,3 L20.1818182,3 C21.1859723,3 22,3.8954305 22,5 L22,7 C22,8.1045695 21.1859723,9 20.1818182,9 L3.81818182,9 C2.81402773,9 2,8.1045695 2,7 L2,5 C2,3.8954305 2.81402773,3 3.81818182,3 Z M4,5 L4,7 L20,7 L20,5 L4,5 Z M2,19 L14,19 L14,21 L2,21 L2,19 Z"})})})})},3792:function(e,l,t){"use strict";var s=t(7437);t(2265),l.Z=e=>{let{height:l=42,width:t=37}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("svg",{width:t,height:l,viewBox:"0 0 37 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M16.1252 18.5412C15.9712 16.9229 15.3987 15.489 14.2172 14.3431C13.0982 13.2572 11.7609 12.7769 10.2061 13.0545C8.86441 13.2938 7.85337 14.0638 7.08509 15.1601C6.17064 16.4652 5.80346 17.9348 5.8809 19.514C5.96617 21.2637 6.56304 22.8029 7.83249 24.0471C9.73449 25.9108 12.6754 25.7986 14.4477 23.8096C15.6232 22.4897 16.1305 20.9331 16.1574 19.1807C16.147 18.9745 16.1453 18.757 16.1244 18.5412H16.1252Z",fill:"white"}),(0,s.jsx)("path",{d:"M28.5919 14.6678C27.6679 13.5558 26.4959 12.8919 25.0246 12.8763C23.5184 12.8597 22.3108 13.5219 21.3641 14.6565C19.282 17.151 19.3011 21.062 21.3867 23.5504C23.2165 25.7335 26.2418 25.8692 28.2395 23.8428C29.5403 22.5246 30.0684 20.8923 30.1102 19.1365C30.0884 17.4381 29.6508 15.9416 28.5919 14.6678Z",fill:"white"}),(0,s.jsx)("path",{d:"M35.583 23.2179C35.0836 23.1292 34.5798 23.0692 34.0743 23.0387C33.9272 23.03 33.9011 22.9952 33.9351 22.8455C34.203 21.664 34.2761 20.4702 34.1265 19.2652C33.8724 17.2248 33.0685 15.4098 31.8521 13.7723C31.6241 13.4652 31.5484 13.1807 31.578 12.8031C31.6981 11.2526 31.7938 9.69948 31.8225 8.1429C31.8538 6.44015 31.8503 4.74001 31.5441 3.05727C31.4327 2.44387 31.2674 1.84351 30.9515 1.29536C30.6218 0.721974 30.1345 0.439197 29.4707 0.447898C29.0139 0.453988 28.5814 0.565359 28.1629 0.730674C27.1284 1.13874 26.2253 1.7652 25.3587 2.44735C23.7716 3.69591 22.3543 5.12285 21.0004 6.61591C20.8899 6.73772 20.7925 6.78383 20.628 6.74729C20.2965 6.6742 19.9607 6.61417 19.6248 6.56979C19.5952 6.56631 19.5717 6.56022 19.5517 6.55326C18.3006 6.38186 17.2495 6.44624 16.7161 6.5028C16.4055 6.53847 16.0958 6.58894 15.7886 6.65158C15.6781 6.6742 15.6007 6.65158 15.5215 6.56457C14.7741 5.7467 14.0006 4.95405 13.1967 4.19186C12.0334 3.08947 10.8292 2.03754 9.47705 1.1692C8.68266 0.659328 7.86131 0.192094 6.91205 0.0450499C5.84794 -0.119396 5.25976 0.15468 4.82385 1.06044C4.4123 1.9166 4.28701 2.84323 4.19565 3.77422C4.04426 5.32732 4.07558 6.88302 4.1478 8.43873C4.22001 9.98573 4.34095 11.5301 4.48104 13.0719C4.49844 13.2642 4.46538 13.4156 4.34183 13.5696C4.13823 13.8237 3.95116 14.0917 3.77279 14.3631C2.02393 17.029 1.35048 19.9055 2.09266 23.0535C2.13182 23.2205 2.08309 23.2649 1.92126 23.2762C1.4227 23.3128 0.926753 23.3745 0.436027 23.4703C0.122797 23.5312 -0.0451286 23.7757 0.0105567 24.0689C0.0627616 24.3464 0.313345 24.5091 0.615264 24.4552C1.15732 24.3577 1.70461 24.3021 2.25189 24.2481C2.38588 24.2351 2.4494 24.2733 2.49377 24.3952C2.63559 24.7832 2.81135 25.1573 3.01234 25.5176C3.07934 25.6376 3.05845 25.6829 2.94099 25.7455C2.37805 26.044 1.82642 26.3624 1.29654 26.7174C1.15994 26.8088 1.04421 26.9158 1.01289 27.0846C0.973738 27.2951 1.03377 27.4787 1.21127 27.6005C1.40269 27.7328 1.61064 27.7258 1.80206 27.5971C2.35021 27.2299 2.92098 26.9027 3.50394 26.5947C3.61183 26.5382 3.66316 26.5512 3.7319 26.6469C3.99814 27.0185 4.28788 27.3717 4.62199 27.6832C4.72292 27.7772 4.69943 27.8398 4.6333 27.9381C4.39055 28.2975 4.15041 28.6603 3.92158 29.0292C3.74408 29.3155 3.80933 29.6148 4.0634 29.767C4.31833 29.9202 4.59937 29.8279 4.78122 29.5391C4.9735 29.2328 5.17536 28.9318 5.36591 28.6238C5.44074 28.5019 5.50164 28.4932 5.6165 28.5846C7.01124 29.6966 8.60001 30.4327 10.2897 30.966C11.4652 31.3375 12.6711 31.5786 13.8884 31.7621C14.4017 31.5907 14.9064 31.763 15.411 31.8117C16.6874 31.9353 17.9656 32.0092 19.2463 31.9483C20.2139 31.9031 21.1797 31.8239 22.1376 31.6734C22.2003 31.6638 22.2664 31.6734 22.3308 31.6734C22.8145 31.5829 23.3009 31.5055 23.7812 31.3993C26.2392 30.8546 28.5493 29.9767 30.5269 28.3636C30.6218 28.2862 30.6635 28.3062 30.7245 28.3993C30.9254 28.709 31.1377 29.0109 31.3387 29.3207C31.531 29.6165 31.8155 29.7105 32.0766 29.5539C32.3289 29.4025 32.3846 29.0849 32.1966 28.7917C31.9704 28.4384 31.7407 28.086 31.4945 27.7458C31.4022 27.6188 31.4057 27.5466 31.5145 27.4387C31.8129 27.142 32.0809 26.8175 32.315 26.4686C32.4124 26.3233 32.4881 26.3076 32.6404 26.3885C33.2042 26.6852 33.7619 26.9932 34.2996 27.3352C34.5145 27.4718 34.7338 27.4544 34.9035 27.3082C35.0696 27.1646 35.1253 26.9436 35.0488 26.7365C35.0009 26.606 34.9008 26.526 34.7895 26.4546C34.2526 26.111 33.7001 25.7934 33.1294 25.5097C33.0128 25.4523 32.9849 25.401 33.0528 25.2818C33.2547 24.9294 33.413 24.5553 33.5479 24.1733C33.5992 24.028 33.6679 23.9932 33.8141 24.0045C34.3631 24.0454 34.9087 24.115 35.4542 24.1846C35.7744 24.2255 36.0059 24.048 36.0407 23.7739C36.0755 23.4964 35.8954 23.2745 35.5847 23.2188L35.583 23.2179ZM14.4487 23.8087C12.6763 25.7977 9.73546 25.91 7.83346 24.0463C6.56401 22.802 5.96714 21.2629 5.88187 19.5131C5.8053 17.9339 6.17161 16.4644 7.08606 15.1592C7.85435 14.0629 8.86538 13.2938 10.207 13.0536C11.7619 12.7761 13.0983 13.2564 14.2181 14.3422C15.3988 15.4881 15.9722 16.922 16.1262 18.5404C16.1471 18.7562 16.1488 18.9737 16.1593 19.1799C16.1314 20.9322 15.6251 22.4888 14.4496 23.8087H14.4487ZM28.2404 23.8418C26.2418 25.8673 23.2174 25.7325 21.3876 23.5494C19.302 21.061 19.2829 17.15 21.365 14.6555C22.3116 13.5209 23.5193 12.8596 25.0254 12.8753C26.4959 12.8909 27.6687 13.5557 28.5928 14.6668C29.6516 15.9397 30.0893 17.4362 30.111 19.1355C30.0693 20.8913 29.5411 22.5227 28.2404 23.8418Z",fill:"#020202"}),(0,s.jsx)("path",{d:"M8.94086 19.2348C8.94086 20.3081 9.25727 21.3412 9.8259 22.1246C10.3945 22.908 11.1728 23.383 12.0029 23.4532C12.8329 23.5234 13.6526 23.1835 14.2956 22.5026C14.9386 21.8217 15.3568 20.8507 15.4654 19.7866C15.574 18.7224 15.3648 17.6448 14.8802 16.7724C14.3957 15.8999 13.6721 15.2979 12.8563 15.0886C12.0405 14.8792 11.1934 15.078 10.487 15.6448C9.78065 16.2116 9.26779 17.1039 9.0525 18.1406L12.2171 19.2348H8.94086Z",fill:"black"}),(0,s.jsx)("path",{d:"M22.8913 19.2348C22.8913 20.3081 23.2077 21.3412 23.7763 22.1246C24.345 22.908 25.1232 23.383 25.9533 23.4532C26.7833 23.5234 27.603 23.1835 28.246 22.5026C28.889 21.8217 29.3072 20.8507 29.4158 19.7866C29.5244 18.7224 29.3152 17.6448 28.8307 16.7724C28.3462 15.8999 27.6226 15.2979 26.8067 15.0886C25.9909 14.8792 25.1439 15.078 24.4375 15.6448C23.7311 16.2116 23.2182 17.1039 23.0029 18.1406L26.1676 19.2348H22.8913Z",fill:"black"}),(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.314 28.1438C16.5001 26.0842 19.4652 26.0842 20.6512 28.1438L25.9617 37.3658C27.1478 39.4254 25.6652 41.9999 23.2931 41.9999H12.6722C11.7588 41.9999 10.9774 41.6183 10.4294 41.0313C10.0419 41.2766 9.59648 41.4498 9.11677 41.5378C8.04333 41.7344 7.01548 41.5292 6.03092 41.0995C4.62183 40.4836 3.39944 39.5914 2.33177 38.4902C1.72043 37.8601 1.19248 37.1643 0.872545 36.335C0.600721 35.6303 0.53285 34.9232 0.84136 34.2087C1.04034 33.7491 1.36803 33.4822 1.88251 33.466C2.37819 33.4503 2.82061 33.621 3.24256 33.8539C4.35731 34.469 5.1578 35.3903 5.80927 36.4656C6.24641 37.1867 6.70194 37.8997 7.19383 38.5843C7.516 39.0318 7.96499 39.3443 8.5416 39.4174C8.95805 39.4705 9.32351 39.3861 9.59885 39.1835C9.54392 38.5835 9.66505 37.9537 10.0036 37.3658L15.314 28.1438Z",fill:"black"}),(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.233 32.1147C23.2975 32.7585 22.9136 33.343 22.3757 33.4201C20.2928 33.7188 19.1336 33.8801 17.9551 33.8801C16.7779 33.8801 15.596 33.7192 13.467 33.4205C12.9289 33.345 12.5438 32.7617 12.6069 32.1177C12.6699 31.4736 13.1573 31.0127 13.6954 31.0882C15.8586 31.3916 16.9162 31.5318 17.9551 31.5318C18.9927 31.5318 20.0262 31.392 22.1423 31.0885C22.6803 31.0114 23.1686 31.4708 23.233 32.1147Z",fill:"#EC1A1A"}),(0,s.jsx)("path",{d:"M18.1272 25.2166C18.3861 25.2166 18.6525 25.282 18.9065 25.3437C19.4613 25.4794 19.665 26.0536 19.3128 26.5006C19.19 26.6556 19.0256 26.7828 18.8636 26.9015C18.6206 27.0796 18.5985 27.2419 18.812 27.4587C19.1839 27.8355 19.9448 27.827 20.3364 27.4406C20.4014 27.3776 20.4579 27.3037 20.5315 27.2516C20.7463 27.0978 21.0556 27.1232 21.2299 27.2988C21.4324 27.5036 21.452 27.7906 21.2544 28.0414C20.8592 28.5417 20.3167 28.7658 19.6932 28.8033C19.195 28.8336 18.7224 28.7234 18.3125 28.4302C18.1444 28.3103 18.0278 28.3624 17.8768 28.4605C16.9993 29.025 15.7719 28.8905 15.0797 28.1649C14.7852 27.8561 14.7606 27.5241 15.0147 27.2867C15.2528 27.0626 15.567 27.1099 15.8628 27.4127C16.2543 27.8124 16.9882 27.8488 17.3871 27.4878C17.635 27.2637 17.6203 27.0832 17.349 26.8918C17.2091 26.7925 17.0692 26.6871 16.9575 26.5599C16.5513 26.096 16.7415 25.4843 17.3405 25.3401C17.5945 25.2783 17.8437 25.2166 18.1247 25.2166H18.1272Z",fill:"white"}),(0,s.jsx)("ellipse",{cx:"18.2001",cy:"33.5755",rx:"1.4",ry:"1.4",fill:"#E9AF1C"}),(0,s.jsx)("path",{d:"M18.2 31.9199C17.2696 31.9199 16.52 32.6695 16.52 33.5999C16.52 34.5304 17.2696 35.2799 18.2 35.2799C19.1305 35.2799 19.88 34.5304 19.88 33.5999C19.88 32.6695 19.1305 31.9199 18.2 31.9199ZM19.0529 34.763L18.2 34.1556L17.3471 34.763L17.6702 33.7679L16.8173 33.1476H17.864L18.2 32.1525L18.5231 33.1476H19.5699L18.7169 33.7679L19.0529 34.763Z",fill:"black"}),(0,s.jsx)("g",{clipPath:"url(#clip0_369_42)",children:(0,s.jsx)("path",{d:"M29.7002 11.6426C27.7196 9.30098 25.8996 8.32098 23.1377 7.39847C24.1746 6.30297 25.1964 4.99137 26.4464 3.96137C28.1362 2.56571 29.7955 3.2463 29.9423 5.44988C30.0783 7.49493 29.7963 9.56838 29.6975 11.6435L29.7002 11.6426Z",fill:"white"})}),(0,s.jsx)("path",{d:"M6.37211 11.3638C8.35266 9.02217 10.1727 8.04217 12.9346 7.11966C11.8977 6.02417 10.8758 4.71256 9.62582 3.68256C7.93602 2.2869 6.27681 2.96749 6.12995 5.17107C5.99395 7.21612 6.276 9.28957 6.37477 11.3646L6.37211 11.3638Z",fill:"white"}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"clip0_369_42",children:(0,s.jsx)("rect",{width:"7.196",height:"8.5652",fill:"white",transform:"translate(22.3623 5.04004) rotate(-18.2015)"})})})]})})}},755:function(e,l,t){"use strict";var s=t(7437);t(2265),l.Z=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("svg",{fill:"#1191D9",height:"24px",width:"24px",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26.676 26.676",children:[(0,s.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:0}),(0,s.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815 C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029 c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562 C26.18,21.891,26.141,21.891,26.105,21.891z"})})})]})})},9513:function(e,l,t){"use strict";var s=t(7437);t(2265),l.Z=e=>{let{color:l="#9ca3af",size:t=16}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,fill:"none",viewBox:"0 0 16 16",cursor:"unset",children:[(0,s.jsx)("g",{clipPath:"url(#510__a)",children:(0,s.jsx)("path",{fill:l,d:"M8.234 1.665a.25.25 0 0 0-.468 0l-1.34 3.513a1.75 1.75 0 0 1-1.496 1.12l-3.194.256a.25.25 0 0 0-.141.44L4.013 9.03a1.75 1.75 0 0 1 .576 1.741l-.809 3.423a.25.25 0 0 0 .373.27l2.937-1.788a1.75 1.75 0 0 1 1.82 0l2.937 1.789a.25.25 0 0 0 .373-.271l-.809-3.423a1.75 1.75 0 0 1 .576-1.74l2.418-2.037a.25.25 0 0 0-.14-.44l-3.195-.256a1.75 1.75 0 0 1-1.496-1.12zM6.365 1.13c.573-1.5 2.697-1.5 3.27 0l1.34 3.513a.25.25 0 0 0 .214.16l3.195.255c1.559.125 2.184 2.076.988 3.083l-2.418 2.037a.25.25 0 0 0-.083.248l.809 3.423c.357 1.512-1.287 2.705-2.614 1.897L8.13 13.957a.25.25 0 0 0-.26 0l-2.936 1.789c-1.327.808-2.971-.385-2.614-1.897l.809-3.423a.25.25 0 0 0-.083-.248L.63 8.14c-1.197-1.007-.572-2.958.987-3.083l3.195-.255a.25.25 0 0 0 .213-.16z",fillRule:"evenodd",clipRule:"evenodd"})}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"510__a",children:(0,s.jsx)("path",{fill:l,d:"M0 0h16v16H0z"})})})]})})}},8137:function(e,l,t){"use strict";let s=t(8472).Z.create({baseURL:"".concat("https://keephy-bk.vercel.app/api/v1/"),withCredentials:!0});l.Z=s},9904:function(e,l,t){"use strict";var s=t(7437);t(2265);var a=t(9513);l.Z=e=>{let{label:l="",name:t="",value:i,onChange:n=()=>{},maxRating:r=5,iconSize:d=16,review:o}=e,c=e=>{n(t,e)};return(0,s.jsxs)("div",{children:[l&&(0,s.jsx)("label",{className:"block text-gray-700",children:l}),(0,s.jsx)("div",{className:o?"bg-white border border-[#EDEDED] px-3 py-2 rounded-xl":"",children:[...Array(r)].map((e,l)=>(0,s.jsx)("button",{type:"button",className:"p-1",onClick:()=>c(l+1),children:(0,s.jsx)(a.Z,{size:d,color:i&&l+1<=i?"#eab308":"#9ca3af"})},l))})]})}},6522:function(e,l,t){"use strict";var s=t(7437),a=t(6463),i=t(2265),n=t(1444);l.Z=e=>{let l=l=>{let t=(0,a.usePathname)(),r=(0,n.v9)(e=>{var l;return null==e?void 0:null===(l=e.user)||void 0===l?void 0:l.isLoggedIn});return(0,i.useEffect)(()=>{r?r&&("/login"===t||"/"===t||t.includes("/verify-account"))&&(0,a.redirect)("/all-business"):"/login"===t||"/"===t||t.startsWith("/verify-account")||(0,a.redirect)("/login")},[r,t]),(0,s.jsx)(e,{...l})};return e.getInitialProps&&(l.getInitialProps=e.getInitialProps),l}},1001:function(e,l,t){"use strict";var s=t(7437);t(2265),l.Z=e=>{let{heading:l,description:t,red:a,business:i}=e;return(0,s.jsx)("div",{className:i?"":"container mb-11",children:(0,s.jsxs)("div",{className:"flex flex-col ".concat(i?"items-start":"items-center text-center"),children:[(0,s.jsx)("h2",{className:"sm:text-3xl text-2xl font-medium text-black capitalize",children:l}),(0,s.jsx)("p",{className:"text-sm font-normal max-w-lg ".concat(a?"text-[#FB2525]":"text-[#8D8D8D]"),children:t})]})})}},978:function(e,l,t){"use strict";t.d(l,{E:function(){return n}});var s=t(7437);t(2265);var a=t(9513);let i={rating:(0,s.jsx)(a.Z,{color:"#ffffff"}),yesno:(0,s.jsx)(()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("svg",{width:13,height:14,viewBox:"0 0 13 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 7.32447C0 5.56864 0.684819 3.88472 1.90381 2.64316C3.12279 1.4016 4.77609 0.704102 6.5 0.704102C8.22391 0.704102 9.87721 1.4016 11.0962 2.64316C12.3152 3.88472 13 5.56864 13 7.32447C13 9.0803 12.3152 10.7642 11.0962 12.0058C9.87721 13.2473 8.22391 13.9448 6.5 13.9448C4.77609 13.9448 3.12279 13.2473 1.90381 12.0058C0.684819 10.7642 0 9.0803 0 7.32447H0ZM6.12907 10.158L9.87133 5.39309L9.19533 4.84227L6.00427 8.90365L3.744 6.98551L3.18933 7.66343L6.12907 10.1589V10.158Z",fill:"white"})})}),{}),dropdown:(0,s.jsx)(()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M1 1L7 7L13 1",stroke:"#ffffff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),{}),multipleChoice:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"red",viewBox:"0 0 16 16",cursor:"unset",children:[(0,s.jsx)("path",{fill:"#ffffff",d:"M3.5 3.329 3.022 4.5h.956zM4.589 6l.216.532a.75.75 0 0 0 1.39-.566l-1.77-4.346a.998.998 0 0 0-1.85 0L.806 5.967a.75.75 0 1 0 1.39.566l.216-.532zM1.47 9.22A.75.75 0 0 1 2 9h2.303C5.38 9 6 9.896 6 10.79c0 .328-.084.657-.244.941.309.349.494.81.494 1.309 0 1.071-.852 1.96-1.946 1.96L2 15a.75.75 0 0 1-.75-.75v-4.5c0-.199.079-.39.22-.53m2.833 1.857c.04 0 .065-.008.08-.014a.13.13 0 0 0 .045-.035.36.36 0 0 0 .072-.24.36.36 0 0 0-.072-.239.13.13 0 0 0-.045-.034.2.2 0 0 0-.08-.014H2.75v.576zm-1.553 1.5h1.553a.45.45 0 0 1 .447.462c0 .266-.203.46-.447.46H2.75z",fillRule:"evenodd",clipRule:"evenodd"}),(0,s.jsx)("path",{fill:"#ffffff",d:"M8.75 3.498a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM8.75 11.503a.75.75 0 1 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"})]})},{}),shortText:(0,s.jsx)(()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",cursor:"unset",children:(0,s.jsx)("path",{fill:"#ffffff",d:"M1 6.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 6.25m0 4a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75",fillRule:"evenodd",clipRule:"evenodd"})})}),{}),longText:(0,s.jsx)(()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",cursor:"unset",children:(0,s.jsx)("path",{fill:"#ffffff",d:"M1 4.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 4.25m0 4a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 8.25m0 4a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75",fillRule:"evenodd",clipRule:"evenodd"})})}),{})},n=e=>{let{inputType:l}=e;return i[l]||null}}},function(e){e.O(0,[2427,4506,2971,7023,1744],function(){return e(e.s=5216)}),_N_E=e.O()}]);