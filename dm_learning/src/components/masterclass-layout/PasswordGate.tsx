"use client";
import { useState } from "react";

interface PasswordGateProps {
    password: string;
    children: React.ReactNode;
    date?: string;
    time?: string;
}

export default function PasswordGate({ password, children, date, time }: PasswordGateProps) {
    const [input, setInput] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [error, setError] = useState(false);

    if (unlocked) return <>{children}</>;

    return (
        <div style={{
            minHeight: "500px", display: "flex", alignItems: "center", justifyContent: "center",
            background: "#0a0a1a", fontFamily: "sans-serif"
        }}>
            <div style={{
                background: "#fff", borderRadius: 12, padding: "40px 32px", width: "100%", maxWidth: 380,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)", textAlign: "center"
            }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>🔒</div>
                <h2 style={{ margin: "0 0 8px", fontSize: 20, color: "#0a0a1a" }}>This page is password protected</h2>
                
                {date && time && (
                    <div style={{ 
                        margin: '12px 0 20px', 
                        padding: '8px 16px', 
                        background: '#fef3e7', 
                        borderRadius: '30px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        border: '1px solid #fbd9b9'
                    }}>
                        <span style={{ fontSize: '14px' }}>📅 {date}</span>
                        <span style={{ width: '1px', height: '14px', background: '#fbd9b9' }}></span>
                        <span style={{ fontSize: '14px' }}>⏰ {time}</span>
                    </div>
                )}

                <p style={{ color: "#666", fontSize: 14, marginBottom: 24 }}>Enter the password to continue</p>

                <input
                    type="password"
                    value={input}
                    onChange={(e) => { setInput(e.target.value); setError(false); }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (input === password) {
                                setUnlocked(true);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            } else setError(true);
                        }
                    }}
                    placeholder="Enter password"
                    style={{
                        width: "100%", padding: "12px 14px", borderRadius: 8, fontSize: 16,
                        border: error ? "1.5px solid #e74c3c" : "1.5px solid #ddd",
                        outline: "none", boxSizing: "border-box", marginBottom: 8
                    }}
                />
                {error && <p style={{ color: "#e74c3c", fontSize: 13, margin: "0 0 12px" }}>Incorrect password. Try again.</p>}
                <button
                    onClick={() => {
                        if (input === password) {
                            setUnlocked(true);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        } else setError(true);
                    }}
                    style={{
                        width: "100%", padding: "12px", background: "#FC8B20", color: "#fff",
                        border: "none", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 4
                    }}
                >
                    Unlock
                </button>
            </div>
        </div>
    );
}
