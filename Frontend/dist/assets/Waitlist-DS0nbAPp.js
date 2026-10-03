import{r as i,j as t,y as l}from"./index-ThChQxLA.js";import{a as b}from"./axiosInstance-CnZfENRo.js";const y="/assets/Monochrome%20Construction-Phase%20Villa%20with%20Reflecting%20Pool-CMYIhqmY.png",j=()=>t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"#ff5500",children:t.jsx("path",{d:"M12 1a5 5 0 0 0-5 5v3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v3H9V6a3 3 0 0 1 3-3z"})});function k(){const[e,c]=i.useState({companyName:"",ownerName:"",email:"",phone:""}),[d,p]=i.useState(!1),[m,h]=i.useState(!1),[r,g]=i.useState(null),[x,f]=i.useState(4),a=s=>c({...e,[s.target.name]:s.target.value}),u=async s=>{if(s.preventDefault(),!e.companyName.trim()||!e.ownerName.trim()||!e.email.trim()||!e.phone.trim()){l.error("Please fill in all fields.");return}p(!0);try{const o=await b.post("/waitlist",e);l.success(o?.data?.message||"Application submitted successfully!"),g({...e}),h(!0),f(w=>Math.max(1,w-1)),c({companyName:"",ownerName:"",email:"",phone:""})}catch(o){l.error(o?.response?.data?.message||"Something went wrong. Please try again.")}finally{p(!1)}};return t.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#ffffff"},children:[t.jsx("style",{children:`
        * { box-sizing: border-box; }

        .waitlist-shell {
          max-width: 1500px;
          margin: 0 auto;
          padding: 26px 36px 26px;
        }

        .waitlist-brand {
          font-family: 'Sora', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.08em;
          line-height: 1;
          margin-left: 14px;
          margin-bottom: 18px;
          color: #0f172a;
        }

        .waitlist-brand span {
          color: #f15a24;
        }

        .waitlist-layout {
          display: grid;
          grid-template-columns: 1.02fr 1.15fr;
          align-items: center;
          gap: 10px;
        }

        .waitlist-copy {
          padding-left: 14px;
        }

        .waitlist-accent-line {
          width: 62px;
          height: 5px;
          background: #f15a24;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .waitlist-kicker {
          margin: 0 0 8px;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #4b5563;
          font-weight: 700;
        }

        .waitlist-headline {
          margin: 0;
          font-family: 'Sora', sans-serif;
          font-size: clamp(3rem, 4.2vw, 6.6rem);
          line-height: 0.82;
          letter-spacing: -0.09em;
          font-weight: 900;
          color: #101820;
          text-transform: uppercase;
        }

        .waitlist-headline span {
          color: #f15a24;
        }

        .waitlist-description {
          max-width: 620px;
          margin: 20px 0 0;
          color: #3f4a59;
          font-size: 0.95rem;
          line-height: 1.5;
          font-weight: 500;
        }

        .waitlist-card {
          max-width: 540px;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 18px;
          padding: 24px 22px 18px;
          box-shadow: none;
          margin-top: 26px;
        }

        .waitlist-card h2 {
          margin: 0 0 12px;
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.5rem, 1.8vw, 2rem);
          font-weight: 800;
          color: #0f172a;
        }

        .waitlist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 12px;
          margin-top: 14px;
        }

        .waitlist-submit {
          width: 100%;
          height: 54px;
          margin-top: 14px;
          border: none;
          border-radius: 12px;
          background: #f15a24;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 10px 22px rgba(241, 90, 36, 0.28);
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .waitlist-submit:hover {
          transform: translateY(-1px);
        }

        .waitlist-submit:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .waitlist-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          min-height: 42px;
          margin-top: 12px;
          border-radius: 10px;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          color: #c2410c;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .waitlist-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f15a24;
          box-shadow: 0 0 0 4px rgba(241, 90, 36, 0.18);
        }

        .waitlist-privacy {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
          color: #64748b;
          font-size: 0.85rem;
          font-weight: 500;
          font-style: italic;
        }

        .waitlist-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 760px;
          padding-right: 0;
        }

        .waitlist-visual img {
          display: block;
          width: min(100%, 880px);
          height: auto;
          filter: grayscale(1) contrast(1.02) brightness(1.02);
          user-select: none;
          pointer-events: none;
          background: transparent;
        }

        @media (max-width: 1080px) {
          .waitlist-layout {
            grid-template-columns: 1fr;
          }

          .waitlist-copy {
            padding-left: 0;
          }

          .waitlist-visual {
            min-height: auto;
            padding-right: 0;
          }
        }

        @media (max-width: 620px) {
          .waitlist-shell {
            padding: 18px 18px 24px;
          }

          .waitlist-brand {
            margin-left: 0;
            font-size: 1.35rem;
          }

          .waitlist-kicker {
            letter-spacing: 0.18em;
          }

          .waitlist-card {
            padding: 18px 14px 16px;
          }

          .waitlist-grid {
            grid-template-columns: 1fr;
          }

          .waitlist-description {
            font-size: 0.9rem;
          }
        }
      `}),t.jsxs("div",{className:"waitlist-shell",children:[t.jsxs("div",{className:"waitlist-brand",children:["ODRA",t.jsx("span",{children:"OPS"})]}),t.jsxs("div",{className:"waitlist-layout",children:[t.jsxs("div",{className:"waitlist-copy",children:[t.jsx("div",{className:"waitlist-accent-line"}),t.jsx("p",{className:"waitlist-kicker",children:"Construction ERP"}),t.jsxs("h1",{className:"waitlist-headline",children:["Build",t.jsx("br",{}),t.jsx("span",{children:"Smarter"}),t.jsx("br",{}),"Manage Better"]}),t.jsx("p",{className:"waitlist-description",children:"ODRAOPS is an all-in-one platform to simplify your construction operations — from project management and workforce tracking to inventory control and site operations."}),t.jsxs("div",{className:"waitlist-card",children:[t.jsx("h2",{children:"Join the Pre-Launch List"}),m?t.jsxs("div",{children:[t.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"#fff4ed",border:"2px solid #F15A24",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px auto"},children:t.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"#F15A24",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"20 6 9 17 4 12"})})}),t.jsxs("p",{style:{margin:0,textAlign:"center",color:"#475569",lineHeight:1.6,fontSize:"0.96rem"},children:["Thank you, ",t.jsx("strong",{style:{color:"#0f172a"},children:r?.ownerName}),"! We have received your application for ",t.jsx("strong",{style:{color:"#0f172a"},children:r?.companyName}),". Our team will contact you at ",t.jsx("strong",{style:{color:"#f15a24"},children:r?.email}),"."]})]}):t.jsxs("form",{onSubmit:u,noValidate:!0,children:[t.jsxs("div",{className:"waitlist-grid",children:[t.jsx("input",{name:"companyName",type:"text",placeholder:"Company Name",value:e.companyName,onChange:a,style:n}),t.jsx("input",{name:"phone",type:"tel",placeholder:"Phone Number",value:e.phone,onChange:a,style:n}),t.jsx("input",{name:"ownerName",type:"text",placeholder:"Owner Name",value:e.ownerName,onChange:a,style:n}),t.jsx("input",{name:"email",type:"email",placeholder:"Email ID",value:e.email,onChange:a,style:n})]}),t.jsx("button",{type:"submit",className:"waitlist-submit",disabled:d,children:d?"Submitting...":"Sign Up →"}),t.jsxs("div",{className:"waitlist-status",children:[t.jsx("span",{className:"waitlist-status-dot"}),t.jsxs("span",{children:[x," of 11 accounts remaining"]})]}),t.jsxs("div",{className:"waitlist-privacy",children:[t.jsx(j,{}),t.jsx("span",{children:"We respect your privacy."})]})]})]})]}),t.jsx("div",{className:"waitlist-visual",children:t.jsx("img",{src:y,alt:"Monochrome construction phase villa with reflecting pool"})})]})]})]})}const n={width:"100%",height:52,padding:"0 14px",borderRadius:12,border:"1.5px solid #d7dfe8",background:"rgba(255,255,255,0.78)",color:"#0f172a",fontSize:"0.98rem",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s ease"};export{k as default};
