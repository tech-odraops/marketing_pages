import{r as s,j as e,y as c}from"./index-CifI82TI.js";import{u as j,N as b,F as w}from"./Footer-DuygfTbw.js";import{a as v}from"./axiosInstance-Bs0KnbAJ.js";import"./Toolbar-Ds7IbBuO.js";import"./Box-BbxMYDFX.js";import"./lg-1-B69GhZjW.js";const S="/assets/img-CaQH2j6E.png",k=()=>e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#ff5500",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),e.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),e.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),C=()=>e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#ff5500",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),I=()=>e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#ff5500",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),F=()=>e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#ff5500",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 17a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),W=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"#ff5500",children:e.jsx("path",{d:"M12 1a5 5 0 0 0-5 5v3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v3H9V6a3 3 0 0 1 3-3z"})});function P(){const{t:z}=j(),[i,f]=s.useState({companyName:"",ownerName:"",email:"",phone:""}),[r,p]=s.useState(!1),[m,h]=s.useState(!1),[o,x]=s.useState(null),[g,y]=s.useState(4),a=t=>f({...i,[t.target.name]:t.target.value}),u=async t=>{if(t.preventDefault(),!i.companyName.trim()||!i.ownerName.trim()||!i.email.trim()||!i.phone.trim()){c.error("Please fill in all fields.");return}p(!0);try{const n=await v.post("/waitlist",i);c.success(n?.data?.message||"Application submitted successfully!"),x({...i}),h(!0),y(d=>Math.max(1,d-1)),f({companyName:"",ownerName:"",email:"",phone:""})}catch(n){c.error(n?.response?.data?.message||"Something went wrong. Please try again.")}finally{p(!1)}};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"#fff"},children:[e.jsx(b,{}),e.jsx("style",{children:`
        .waitlist-hero {
          flex-grow: 1;
          background-image: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.92) 32%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.1) 100%), url(${S});
          background-size: contain;
          background-position: right center;
          background-repeat: no-repeat;
          min-height: calc(100vh - 64px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 40px;
          overflow-x: hidden;
        }

        .waitlist-container {
          width: 100%;
          max-width: 1260px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .waitlist-left {
          flex: 1 1 500px;
          min-width: 0;
          max-width: 680px;
        }

        .waitlist-right {
          flex: 1 1 380px;
          max-width: 420px;
          width: 100%;
        }

        .waitlist-card {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 40px 42px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          border: 1px solid #edf2f7;
        }

        .waitlist-headline {
          font-family: 'Sora', sans-serif;
          font-weight: 900;
          font-size: clamp(2.1rem, 4.5vw, 3.55rem);
          line-height: 1.08;
          letter-spacing: -1px;
          color: #0b132a;
          margin: 0 0 22px 0;
        }

        .waitlist-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 580px;
        }

        @media (max-width: 991px) {
          .waitlist-hero {
            padding: 40px 24px;
            background-position: center bottom;
            background-size: cover;
          }
          .waitlist-container {
            justify-content: center;
            gap: 36px;
          }
          .waitlist-left {
            max-width: 100%;
          }
          .waitlist-right {
            max-width: 100%;
          }
        }

        @media (max-width: 576px) {
          .waitlist-hero {
            padding: 24px 16px;
          }
          .waitlist-card {
            padding: 26px 20px;
            border-radius: 16px;
          }
          .waitlist-features {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}),e.jsx("div",{className:"waitlist-hero",children:e.jsxs("div",{className:"waitlist-container",children:[e.jsxs("div",{className:"waitlist-left",children:[e.jsxs("div",{style:{fontFamily:"'Sora', sans-serif",fontWeight:900,fontSize:"1.6rem",marginBottom:18,letterSpacing:"-0.5px"},children:[e.jsx("span",{style:{color:"#0b132a"},children:"ODRA"})," ",e.jsx("span",{style:{color:"#ff5500"},children:"OPS"})]}),e.jsx("div",{style:{width:34,height:3,backgroundColor:"#f4b400",borderRadius:2,marginBottom:16}}),e.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.82rem",fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"#5f6d7e",margin:"0 0 12px 0"},children:"LIMITED TO 11 DEVELOPERS"}),e.jsxs("h1",{className:"waitlist-headline",children:["You Can’t Run a",e.jsx("br",{}),e.jsx("span",{style:{color:"#ff5500"},children:"₹100 Crore Project"}),e.jsx("br",{}),"on WhatsApp and Spreadsheets."]}),e.jsxs("p",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.97rem",lineHeight:1.6,color:"#334155",margin:"0 0 20px 0",maxWidth:580},children:[e.jsx("strong",{style:{color:"#0b132a",fontWeight:700},children:"ODRAOPS"})," gives developers one place to manage projects, people, materials and site operations — with AI doing the monitoring in the background.",e.jsx("br",{}),e.jsx("br",{}),"Get a clear view of what’s happening across your projects without constantly chasing updates. ODRAOPS also brings one of India’s smartest AI-driven site surveillance systems, with automated monitoring and real-time alerts for supervisors when something needs attention."]}),e.jsxs("div",{style:{backgroundColor:"#fff7ed",border:"1px solid #fed7aa",borderLeft:"4px solid #ff5500",borderRadius:12,padding:"16px 20px",marginBottom:24,maxWidth:580},children:[e.jsxs("div",{style:{fontFamily:"'Sora', sans-serif",fontSize:"1.05rem",fontWeight:800,color:"#0b132a",marginBottom:6},children:["11 FIRMS. ",e.jsx("span",{style:{color:"#ff5500"},children:"THAT’S IT."})]}),e.jsxs("p",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.93rem",lineHeight:1.6,color:"#334155",margin:0,fontWeight:500},children:["We are permanently limiting ODRAOPS to 11 development firms. Every client gets a dedicated team to implement, support and continuously optimise the system. We would rather serve 11 firms properly than 500 firms poorly.",e.jsx("br",{}),e.jsx("strong",{style:{color:"#0b132a",fontWeight:700},children:"Once all 11 are onboarded, we stop."})]})]}),e.jsx("div",{style:{width:34,height:3,backgroundColor:"#f4b400",borderRadius:2,marginBottom:28}}),e.jsx("div",{className:"waitlist-features",children:[{icon:e.jsx(k,{}),text:"Know what’s happening before you have to ask."},{icon:e.jsx(C,{}),text:"Keep people and projects accountable."},{icon:e.jsx(I,{}),text:"Know where your materials are going."},{icon:e.jsx(F,{}),text:"Catch site issues before they become expensive."}].map(({icon:t,text:n},d)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("div",{style:{width:50,height:50,minWidth:50,borderRadius:12,backgroundColor:"#fff3ea",display:"flex",alignItems:"center",justifyContent:"center"},children:t}),e.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.84rem",fontWeight:700,color:"#1e293b",lineHeight:1.3},children:n})]},d))})]}),e.jsx("div",{className:"waitlist-right",children:e.jsx("div",{className:"waitlist-card",children:m?e.jsxs("div",{children:[e.jsx("div",{style:{width:68,height:68,borderRadius:"50%",backgroundColor:"#fff4ed",border:"2px solid #F97316",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px auto"},children:e.jsx("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"#F97316",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}),e.jsx("h2",{style:{fontFamily:"'Sora', sans-serif",fontWeight:800,fontSize:"1.45rem",color:"#0f172a",textAlign:"center",margin:"0 0 8px 0"},children:"Application Received! 🎉"}),e.jsxs("p",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.92rem",color:"#475569",textAlign:"center",margin:"0 0 20px 0",lineHeight:1.5},children:["Thank you, ",e.jsx("strong",{style:{color:"#0f172a"},children:o?.ownerName}),"! We have received your application for ",e.jsx("strong",{style:{color:"#0f172a"},children:o?.companyName}),". Our team will contact you at ",e.jsx("strong",{style:{color:"#ff5500"},children:o?.email}),"."]}),e.jsxs("div",{style:{backgroundColor:"#fff7ed",border:"1px solid #fed7aa",borderRadius:12,padding:"16px 18px",marginBottom:24},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:"0.86rem",fontFamily:"'Inter', sans-serif"},children:[e.jsx("span",{style:{color:"#64748b"},children:"Company:"}),e.jsx("strong",{style:{color:"#0f172a"},children:o?.companyName})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:"0.86rem",fontFamily:"'Inter', sans-serif"},children:[e.jsx("span",{style:{color:"#64748b"},children:"Owner / Director:"}),e.jsx("strong",{style:{color:"#0f172a"},children:o?.ownerName})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:"0.86rem",fontFamily:"'Inter', sans-serif"},children:[e.jsx("span",{style:{color:"#64748b"},children:"Work Email:"}),e.jsx("strong",{style:{color:"#0f172a"},children:o?.email})]}),o?.phone&&e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:"0.86rem",fontFamily:"'Inter', sans-serif"},children:[e.jsx("span",{style:{color:"#64748b"},children:"Phone Number:"}),e.jsx("strong",{style:{color:"#0f172a"},children:o?.phone})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.86rem",fontFamily:"'Inter', sans-serif"},children:[e.jsx("span",{style:{color:"#64748b"},children:"Access Program:"}),e.jsx("span",{style:{color:"#ea580c",fontWeight:700},children:"11 Developer Priority Cohort"})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{style:{fontFamily:"'Sora', sans-serif",fontWeight:800,fontSize:"1.5rem",color:"#0f172a",margin:"0 0 8px 0"},children:"APPLY FOR ODRAOPS"}),e.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.92rem",color:"#475569",margin:"0 0 22px 0",lineHeight:1.5},children:"Private rollout strictly limited to 11 development firms across India."}),e.jsxs("form",{onSubmit:u,noValidate:!0,children:[e.jsx("input",{name:"companyName",type:"text",placeholder:"Company Name",value:i.companyName,onChange:a,required:!0,style:l,onFocus:t=>t.target.style.borderColor="#ff5500",onBlur:t=>t.target.style.borderColor="#e2e8f0"}),e.jsx("input",{name:"ownerName",type:"text",placeholder:"Owner / Director",value:i.ownerName,onChange:a,required:!0,style:l,onFocus:t=>t.target.style.borderColor="#ff5500",onBlur:t=>t.target.style.borderColor="#e2e8f0"}),e.jsx("input",{name:"email",type:"email",placeholder:"Work Email",value:i.email,onChange:a,required:!0,style:l,onFocus:t=>t.target.style.borderColor="#ff5500",onBlur:t=>t.target.style.borderColor="#e2e8f0"}),e.jsx("input",{name:"phone",type:"tel",placeholder:"Phone Number",value:i.phone,onChange:a,required:!0,style:l,onFocus:t=>t.target.style.borderColor="#ff5500",onBlur:t=>t.target.style.borderColor="#e2e8f0"}),e.jsx("button",{type:"submit",disabled:r,style:{width:"100%",backgroundColor:r?"#e04b00":"#ff5500",color:"#fff",fontFamily:"'Sora', sans-serif",fontWeight:800,fontSize:"1rem",letterSpacing:"0.5px",border:"none",borderRadius:10,height:52,cursor:r?"not-allowed":"pointer",marginTop:4,marginBottom:14,boxShadow:"0 6px 20px rgba(255, 85, 0, 0.35)",transition:"background-color 0.2s"},onMouseEnter:t=>{r||(t.target.style.backgroundColor="#e04b00")},onMouseLeave:t=>{r||(t.target.style.backgroundColor="#ff5500")},children:r?"SUBMITTING...":"APPLY FOR ACCESS"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,backgroundColor:"#fff7ed",border:"1px solid #fed7aa",borderRadius:8,padding:"8px 12px",marginBottom:14},children:[e.jsx("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",backgroundColor:"#ff5500",boxShadow:"0 0 0 3px rgba(255, 85, 0, 0.25)"}}),e.jsxs("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.88rem",fontWeight:800,color:"#c2410c"},children:[g," of 11 accounts remaining"]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[e.jsx(W,{}),e.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.87rem",fontStyle:"italic",color:"#64748b",fontWeight:500},children:"Your information stays confidential."})]})]})]})})})]})}),e.jsx(w,{})]})}const l={display:"block",width:"100%",boxSizing:"border-box",height:48,padding:"0 16px",marginBottom:14,fontFamily:"'Inter', sans-serif",fontSize:"0.95rem",fontWeight:"500",color:"#0f172a",backgroundColor:"#f8fafc",border:"1.5px solid #cbd5e1",borderRadius:10,outline:"none",transition:"all 0.2s ease"};export{P as default};
