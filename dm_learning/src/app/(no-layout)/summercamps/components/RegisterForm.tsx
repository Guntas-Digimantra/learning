"use client";
import { useState } from "react";
import { Icons } from "./Icons";

export default function RegisterForm() {
  const [kids, setKids] = useState([{ id: 1, name: "" }]);

  const addKid = () => {
    setKids((prev) => [...prev, { id: prev.length + 1, name: "" }]);
  };

  const removeKid = (id: number) => {
    setKids((prev) => prev.filter((k) => k.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We will contact you soon.");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: ".5rem",
    border: "1px solid #cbd5e1",
    padding: ".625rem .75rem",
    background: "#fff",
    color: "#0f172a",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: ".875rem",
    fontWeight: 600,
    marginBottom: ".25rem",
    color: "#0f172a",
  };

  return (
    <div
      id="register"
      className="sc-register-card"
      style={{
        background: "#fff",
        color: "#0f172a",
        borderRadius: "1.5rem",
        padding: "2rem",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,.25)",
      }}
    >
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <fieldset disabled style={{ border: "none", padding: 0, margin: 0 }}>
        <div>
          <label style={labelStyle}>Parent Name *</label>
          <input required placeholder="Parent Name" style={inputStyle} />
        </div>
        <div>
          <label style={{ ...labelStyle, marginBottom: ".5rem" }}>Kid Name(s) *</label>
          {kids.map((kid, i) => (
            <div key={kid.id} style={{ display: "flex", gap: ".5rem", marginBottom: ".5rem" }}>
              <input required placeholder={`Kid ${i + 1} Name`} style={{ ...inputStyle, flex: 1 }} />
              {kids.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeKid(kid.id)}
                  style={{ padding: ".5rem", borderRadius: ".5rem", background: "#f1f5f9", cursor: "pointer" }}
                >
                  <Icons.X />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addKid}
            style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", fontSize: ".875rem", fontWeight: 600, color: "var(--brand)", background: "none", border: "none", padding: 0, cursor: "pointer", appearance: "none", textDecoration: "none" }}
            onMouseOver={e => {
              (e.currentTarget as HTMLButtonElement).style.textDecoration = "underline";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLButtonElement).style.textDecoration = "none";
            }}
          >
            <Icons.Plus /> Add another kid
          </button>
        </div>
        <div>
          <label style={labelStyle}>Parent Email ID *</label>
          <input type="email" required placeholder="parent@email.com" style={inputStyle} />
        </div>
        <div className="sc-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Age *</label>
            <select required style={inputStyle}>
              <option value="">--Select Age--</option>
              {[10,11,12,13,14,15,16,17].map(a => <option key={a}>{a}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Grade *</label>
            <select required style={inputStyle}>
              <option value="">--Select Grade--</option>
              {[3,4,5,6,7,8,9,10,11,12].map(g => <option key={g}>{g}</option>)}
            </select>
          </div>
        </div>
        <div className="sc-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>City *</label>
            <select required style={inputStyle}>
              <option value="">--Select City--</option>
              {[
                "Mumbai",
                "Delhi",
                "Bangalore",
                "Pune",
                "Chennai",
                "Hyderabad",
                "Kolkata",
                "Ahmedabad",
                "Chandigarh",
                "Mohali",
                "Other",
              ].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Phone *</label>
            <input type="tel" required placeholder="Phone" style={inputStyle} />
          </div>
        </div>
        <div className="sc-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Select Date *</label>
            <input type="date" required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Select Slot *</label>
            <select required style={inputStyle}>
              <option value="">Select Slot</option>
              <option>10:00 AM – 12:00 PM</option>
              <option>11:30 AM – 1:30 PM</option>
              <option>2:00 PM – 4:00 PM</option>
              <option>3:30 PM – 5:30 PM</option>
              <option>5:00 PM – 7:00 PM</option>
            </select>
          </div>
        </div>
        {/* <label style={{ display: "flex", alignItems: "center", gap: ".5rem", fontSize: ".875rem", cursor: "pointer" }}>
          <input type="checkbox" defaultChecked />
          I agree to be contacted about 8ucate courses.
        </label> */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: ".75rem",
            borderRadius: 9999,
            border: "2px solid var(--accent-pink)",
            color: "var(--accent-pink)",
            fontWeight: 700,
            background: "transparent",
            cursor: "pointer",
            transition: ".2s",
            fontSize: "1rem",
            marginTop: "1rem",
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--accent-pink)";
            (e.currentTarget as HTMLButtonElement).style.color = "#fff";
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-pink)";
          }}
        >
          Enroll Now – ₹699
        </button>

        {/* Email us link */}
        <p style={{ textAlign: "center", fontSize: ".8125rem", color: "#64748b", marginTop: ".75rem" }}>
          Have questions?{" "}
          <a
            href="mailto:learning@digimantra.com"
            style={{ color: "var(--brand)", fontWeight: 600, textDecoration: "underline" }}
          >
            Email us at learning@digimantra.com
          </a>
        </p>
        </fieldset>
      </form>
    </div>
  );
}
