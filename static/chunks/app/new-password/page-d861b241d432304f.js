(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1882],{4657:function(e,s,a){Promise.resolve().then(a.bind(a,8231))},378:function(e,s,a){"use strict";a.d(s,{Mu:function(){return c},SA:function(){return d},e9:function(){return m},gF:function(){return u},ni:function(){return p},s8:function(){return o},u9:function(){return g},x4:function(){return l}});var r=a(8137),i=a(1116),t=a(2314),n=a(3580);let d=(0,i.hg)("user/signUp",async e=>{var s,a,i;let{name:t,email:d,password:o,cPassword:l,router:u}=e;try{let e=await r.Z.post("user/signUp",{name:t,email:d,password:o,cPassword:l});return n.Am.success(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message),u.push("/verify-account?email=".concat(encodeURIComponent(d))),e.data}catch(e){throw n.Am.error(null===(i=e.response)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.message),e}}),o=(0,i.hg)("verifyOTP",async e=>{var s,a,i;let{email:t,otp:d,router:o}=e;try{let e=await r.Z.post("user/verifyOTP",{otp:d,email:t});return n.Am.success(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message),o.push("/all-business"),e.data}catch(e){throw n.Am.error(null===(i=e.response)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.message),e}}),l=(0,i.hg)("user/login",async e=>{var s,a,i;let{email:t,password:d,rememberMe:o,router:l}=e;try{let e=await r.Z.post("user/login",{email:t,password:d});return o?localStorage.setItem("authRemember",t):localStorage.removeItem("authRemember"),n.Am.success(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message),l.push("/all-business"),e.data}catch(e){throw n.Am.error(null===(i=e.response)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.message),e}}),u=(0,i.hg)("user/forgotPassword",async e=>{var s,a,i;let{email:t,router:d}=e;try{let e=await r.Z.post("user/forgot-password",{email:t});return d.push("/verify-otp?email=".concat(encodeURIComponent(t))),n.Am.success(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message),e.data}catch(e){throw n.Am.error(null===(i=e.response)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.message),e}}),c=(0,i.hg)("user/verifyOTP",async e=>{var s,a,i;let{email:t,otp:d,router:o}=e;try{let e=await r.Z.post("user/verifyOTP",{otp:d,email:t});return n.Am.success(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message),o.push("/new-password?email=".concat(encodeURIComponent(t))),e.data}catch(e){throw n.Am.error(null===(i=e.response)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.message),e}}),m=(0,i.hg)("user/resetPassword",async e=>{var s,a,i;let{email:t,password:d,passwordConfirm:o,router:l}=e;try{let e=await r.Z.post("user/resetPassword",{password:d,passwordConfirm:o,email:t});return n.Am.success(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message),l.push("/login"),e.data}catch(e){throw n.Am.error(null===(i=e.response)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.message),e}}),g=(0,i.hg)("user/googleLogin",async e=>{var s,a,i;let{code:t}=e;try{let e=await r.Z.post("user/google-login",{code:t});return n.Am.success(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.message),e.data}catch(e){throw n.Am.error(null===(i=e.response)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.message),e}}),p=(0,i.hg)("user/logOut",async e=>{let{router:s}=e;try{localStorage.clear(),t.NextResponse.next().cookies.delete("access_token"),n.Am.success("Logged out successfully"),s.push("/")}catch(e){throw n.Am.error("Failed to log out"),e}}),h=(0,i.oM)({name:"user",initialState:{user:null,isLoggedIn:!1,isLoading:!1},reducers:{},extraReducers:e=>{e.addCase(d.pending,e=>{e.isLoading=!0}).addCase(d.fulfilled,(e,s)=>{e.isLoading=!1,e.user=s.payload,e.isLoggedIn=!1}).addCase(d.rejected,e=>{e.isLoading=!1}).addCase(o.pending,e=>{e.isLoading=!0}).addCase(o.fulfilled,(e,s)=>{e.isLoading=!1,e.user=s.payload,e.isLoggedIn=!0}).addCase(o.rejected,e=>{e.isLoading=!1}).addCase(l.pending,e=>{e.isLoading=!0}).addCase(l.fulfilled,(e,s)=>{e.isLoading=!1,e.user=s.payload,e.isLoggedIn=!0}).addCase(l.rejected,e=>{e.isLoading=!1}).addCase(u.pending,e=>{e.isLoading=!0}).addCase(u.fulfilled,e=>{e.isLoading=!1}).addCase(u.rejected,e=>{e.isLoading=!1}).addCase(c.pending,e=>{e.isLoading=!0}).addCase(c.fulfilled,e=>{e.isLoading=!1}).addCase(c.rejected,e=>{e.isLoading=!1}).addCase(m.pending,e=>{e.isLoading=!0}).addCase(m.fulfilled,e=>{e.isLoading=!1}).addCase(m.rejected,e=>{e.isLoading=!1}).addCase(g.pending,e=>{e.isLoading=!0}).addCase(g.fulfilled,(e,s)=>{e.isLoading=!1,e.user=s.payload,e.isLoggedIn=!0}).addCase(g.rejected,e=>{e.isLoading=!1}).addCase(p.pending,e=>{e.isLoading=!0}).addCase(p.fulfilled,e=>{e.isLoading=!1,e.user=null,e.isLoggedIn=!1}).addCase(p.rejected,e=>{e.isLoading=!1})}});s.ZP=h.reducer},8137:function(e,s,a){"use strict";let r=a(8472).Z.create({baseURL:"".concat("https://keephy-bk.vercel.app/api/v1/"),withCredentials:!0});s.Z=r},8231:function(e,s,a){"use strict";var r=a(7437),i=a(2265),t=a(6463),n=a(6648),d=a(9381),o=a(1990),l=a(777),u=a(443),c=a(1710),m=a(1444),g=a(378);let p={password:"",cPassword:""};s.default=()=>{let e=(0,t.useRouter)(),[s,a]=(0,i.useState)(!1),[h,f]=(0,i.useState)(!1),[v,w]=(0,i.useState)(!1),y=(0,t.useSearchParams)(),x=(0,m.I0)();return(0,r.jsx)("div",{className:"container gradient-bg",children:(0,r.jsx)("div",{className:"mx-auto flex flex-col items-center gap-11 max-w-96 w-full",children:(0,r.jsx)(d.J9,{initialValues:p,validationSchema:o.O7,onSubmit:s=>{var{password:a,cPassword:r}=s;let i=null==y?void 0:y.get("email");x((0,g.e9)({email:i,password:a,passwordConfirm:r,router:e}))},children:()=>(0,r.jsxs)(d.l0,{className:"w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-4 mb-2.5",children:[(0,r.jsx)(l.Z,{righticon:(0,r.jsx)(n.default,{className:"field-righticon",src:s?c.Z:u.Z,loading:"lazy",width:20,height:20,onClick:()=>{a(!s)},alt:"passwordIcon"}),placeholder:"New Password",name:"password",type:s?"text":"password"}),(0,r.jsx)(l.Z,{righticon:(0,r.jsx)(n.default,{className:"field-righticon",src:h?c.Z:u.Z,loading:"lazy",width:20,height:20,onClick:()=>{f(!h)},alt:"passwordIcon"}),placeholder:"Confirm Password",name:"cPassword",type:h?"text":"password"})]}),(0,r.jsxs)("label",{className:"form-checkbox block relative pl-6 cursor-pointer select-none text-black font-normal w-max",children:[(0,r.jsx)("input",{onChange:e=>w(e.target.checked),type:"checkbox",id:"generalInquir43",name:"generalInquiry",className:"absolute opacity-0 cursor-pointer"}),(0,r.jsx)("span",{className:"text-sm text-[#8D8D8D] font-normal",children:"Remember me"}),(0,r.jsx)("span",{className:"checkmark absolute top-1/2 left-0 h-4 w-4 rounded-[4px] border border-[#8D8D8D] -translate-y-1/2"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 mt-7",children:[(0,r.jsx)("button",{type:"submit",className:" bg-black text-white h-14 w-full rounded-full",children:"Continue"}),(0,r.jsxs)("p",{className:"text-base font-normal text-[#8D8D8D]",children:["Already have an account? ",(0,r.jsx)("span",{onClick:()=>e.push("/login"),className:"text-[#1191D9] font-medium cursor-pointer",children:"Login Here"})]})]})]})})})})}},777:function(e,s,a){"use strict";var r=a(7437),i=a(2265),t=a(9381);s.Z=e=>{let{righticon:s,icon:a,business:n,...d}=e,[o,l]=(0,t.U$)(d);return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,r.jsxs)("div",{className:"flex items-center bg-white justify-between gap-2 border border-[#EDEDED] h-14 p-4 rounded-xl ".concat(n?"":"md:min-w-72"),children:[a,(0,r.jsx)("input",{className:"autofill:!bg-transparent border-none outline-none w-full text-base bg-transparent text-[#828282] focus:text-black   ".concat(l.touched&&l.error&&"text-[#FB2525]"),...o,...d,autoComplete:"off"}),s]}),(0,r.jsx)(t.Bc,{component:"small",name:o.name,className:"text-[#FB2525] font-medium"})]})})}},1990:function(e,s,a){"use strict";a.d(s,{Eg:function(){return d},FI:function(){return i},NA:function(){return m},O7:function(){return o},TU:function(){return t},bB:function(){return c},c_:function(){return n},qv:function(){return l}});var r=a(4245);let i=r.Ry().shape({email:r.Z_().email("Please enter a valid email address").required("Email is required"),name:r.Z_().required("Name is required"),password:r.Z_().min(8,"Password must be at least 8 characters long").required("Password is required"),cPassword:r.Z_().oneOf([r.iH("password")],"Passwords must match").required("Please confirm your password")}),t=r.Ry().shape({nameOrEmail:r.Z_().required("Email or name is required"),password:r.Z_().required("Password is required")}),n=r.Ry().shape({email:r.Z_().email("Please enter a valid email address").required("Email is required")}),d=r.Ry().shape({otp:r.Z_().required("Otp is required").length(4,"Otp must be exactly 4 digits").matches(/^\d{4}$/,"Otp must be a number")}),o=r.Ry().shape({password:r.Z_().min(8,"Password must be at least 8 characters long").required("Password is required"),cPassword:r.Z_().oneOf([r.iH("password")],"Passwords must match").required("Please confirm your password")}),l=r.Ry().shape({businessName:r.Z_().required("Business name is required"),industryType:r.Z_().required("Industry type is required"),industryCategoryType:r.Z_().required("Industry Category type is required"),primaryEmail:r.Z_().email("Please enter a valid email address").required("Business email is required"),reportingEmail:r.IX().min(1,"At least one email is required")});function u(e){if(e.includes("T"))return new Date(e);let[s,a]=e.split(":"),r=new Date;return r.setHours(s,a,0,0),r}let c=r.Ry().shape({primaryEmail:r.Z_().email("Please enter a valid email address").required("Primary email is required"),businessLocation:r.Z_().required("Business location is required"),reportingEmail:r.IX().min(1,"At least one email is required"),openingHour:r.Z_().required("Opening Time is required"),closingHour:r.Z_().required("Closing Time is required").test("is-greater","Closing Time must be after Opening Time",function(e){let{openingHour:s}=this.parent;if(s&&e){let a=u(s);return u(e)>a}return!0})}),m=r.Ry().shape({email:r.Z_().email("Please enter a valid email address").required("Email is required"),phone:r.Z_().matches(/^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?)[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be a valid number").required("Phone number is required")})},1710:function(e,s){"use strict";s.Z={src:"/_next/static/media/closeEye.72d50d31.svg",height:20,width:20,blurWidth:0,blurHeight:0}},443:function(e,s){"use strict";s.Z={src:"/_next/static/media/openEye.03bb4ccb.svg",height:20,width:20,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[2427,4506,6648,4349,2314,2971,7023,1744],function(){return e(e.s=4657)}),_N_E=e.O()}]);