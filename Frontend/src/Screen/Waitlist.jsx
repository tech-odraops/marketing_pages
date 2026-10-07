import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import heroVideo from "../assets/Hero Video.mp4";

const fieldIcons = {
  company: <svg viewBox="0 0 24 24"><path d="M4 21V5a2 2 0 0 1 2-2h9v18M4 21h16M8 7h3m-3 4h3m-3 4h3m7-3v9m-3-6h3" /></svg>,
  phone: <svg viewBox="0 0 24 24" className="filled"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.55 3.6.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.46.55 3.58a1 1 0 0 1-.25 1.02z" /></svg>,
  owner: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0z" /></svg>,
  email: <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>,
};

const fields = [
  ["companyName", "text", "Company Name", "company"],
  ["phone", "tel", "Phone Number", "phone"],
  ["ownerName", "text", "Owner Name", "owner"],
  ["email", "email", "Email ID", "email"],
];

export default function Waitlist() {
  const [formData, setFormData] = useState({ companyName: "", ownerName: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => !value.trim())) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await axiosInstance.post("/waitlist", formData);
      toast.success(res?.data?.message || "Application submitted successfully!");
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      setFormData({ companyName: "", ownerName: "", email: "", phone: "" });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="waitlist-page">
      <div className="waitlist-shell">
        <div className="waitlist-brand">ODRA<span>OPS</span></div>
        <div className="waitlist-layout">
          <section className="waitlist-copy">
            <div className="waitlist-label"><div className="waitlist-accent-line" /><p className="waitlist-kicker">Construction ERP</p></div>
            <h1 className="waitlist-headline">Build<br /><span>Smarter</span><span className="waitlist-headline-third">Manage Better</span></h1>
            <p className="waitlist-description">ODRAOPS is an all-in-one platform to simplify your construction operations — from project management and workforce tracking to inventory control and site operations.</p>
            <div className="waitlist-card">
              <h2>Join the Pre-Launch List</h2>
              {isSubmitted ? (
                <div>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#fff4ed", border: "2px solid #F15A24", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px auto" }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F15A24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <p style={{ margin: 0, textAlign: "center", color: "#475569", lineHeight: 1.6, fontSize: "0.96rem" }}>
                    Thank you, <strong style={{ color: "#0f172a" }}>{submittedData?.ownerName}</strong>! We have received your application for <strong style={{ color: "#0f172a" }}>{submittedData?.companyName}</strong>. Our team will contact you at <strong style={{ color: "#f15a24" }}>{submittedData?.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="waitlist-grid">
                    {fields.map(([name, type, placeholder, icon]) => <label className="waitlist-field" key={name}>{fieldIcons[icon]}<input aria-label={placeholder} name={name} type={type} placeholder={placeholder} value={formData[name]} onChange={handleChange} /></label>)}
                  </div>
                  <button type="submit" className="waitlist-submit" disabled={loading}>{loading ? "Submitting..." : "Sign Up →"}</button>
                  <div className="waitlist-privacy"><svg viewBox="0 0 24 24"><path d="M18 8h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM9 6a3 3 0 0 1 6 0v2H9Z"/><circle cx="12" cy="15" r="1.5" fill="#fff"/></svg><span>We respect your privacy.</span></div>
                </form>
              )}
            </div>
          </section>
          <div className="waitlist-visual"><video src={heroVideo} autoPlay muted loop playsInline aria-label="ODRAOPS construction hero video" /></div>
        </div>
      </div>
    </main>
  );
}
