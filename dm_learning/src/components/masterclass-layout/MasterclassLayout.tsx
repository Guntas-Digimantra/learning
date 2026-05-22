"use client";
import Image from 'next/image';
import { useState, useEffect, useCallback, ReactNode } from "react";
import { useRouter } from "next/navigation";
import "../../app/(main)/ai-masterclass/ai-masterclass.css";

/* ── Inline SVG Icons ── */
const DateIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);
const TimeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const ModeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
);
const SeatsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path d="M13.6998 17.981V16.2686C13.6998 15.3603 13.339 14.4891 12.6967 13.8469C12.0544 13.2046 11.1833 12.8438 10.275 12.8438H5.13773C4.2294 12.8438 3.35828 13.2046 2.716 13.8469C2.07372 14.4891 1.71289 15.3603 1.71289 16.2686V17.981" stroke="white" stroke-width="1.71242" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.6997 2.68359C14.4341 2.87399 15.0845 3.30286 15.5488 3.90289C16.0132 4.50292 16.2651 5.24014 16.2651 5.99884C16.2651 6.75753 16.0132 7.49475 15.5488 8.09478C15.0845 8.69481 14.4341 9.12368 13.6997 9.31408" stroke="white" stroke-width="1.71242" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.8367 17.983V16.2706C18.8361 15.5117 18.5836 14.7746 18.1186 14.1748C17.6537 13.5751 17.0028 13.1467 16.2681 12.957" stroke="white" stroke-width="1.71242" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.70609 9.41999C9.59757 9.41999 11.1309 7.88663 11.1309 5.99515C11.1309 4.10366 9.59757 2.57031 7.70609 2.57031C5.8146 2.57031 4.28125 4.10366 4.28125 5.99515C4.28125 7.88663 5.8146 9.41999 7.70609 9.41999Z" stroke="white" stroke-width="1.71242" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
);
export const CheckIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#fc8b20" /><path d="M7 12l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export interface MasterclassLayoutProps {
    webinarType: string;
    heroEyebrow: ReactNode;
    heroHeadline: ReactNode;
    heroSecondaryHeadline?: ReactNode;
    heroSubheadline: ReactNode;
    eventDateRaw: string;
    eventStartDateRaw: string;
    eventDisplayDate: string;
    eventTime: string;
    eventDuration: string;
    eventMode: string;
    formTitle: ReactNode;
    formNote?: ReactNode;
    formPriceRow?: ReactNode;
    formClosed?: boolean;
    formCtaText: string;
    paymentAmount: number;
    paymentOrderName: string;
    paymentOrderDescription: string;
    formBottomText?: ReactNode;
    partnersData: { img: string; name: string }[];
    learnSectionTitle1: ReactNode;
    learnSectionTitle2: ReactNode;
    learnSectionSub: ReactNode;
    learnItems: { bold: ReactNode; rest: ReactNode }[];
    bonusSectionTitle1: ReactNode;
    bonusSectionTitle2: ReactNode;
    bonusSectionSub: ReactNode;
    bonusData: { icon: string; title: string; desc: string }[];
    speakerPortrait: string;
    speakerNameAndRoleTitle: ReactNode;
    speakerRoleDescription: ReactNode;
    speakerBio: ReactNode;
    whoIsItForTitle1: ReactNode;
    whoIsItForTitle2: ReactNode;
    audiencePerfectForTitle?: ReactNode;
    audienceData: { title: ReactNode; desc?: string }[];
    audienceAlsoValuableTitle?: ReactNode;
    alsoValuableData: { title: ReactNode; desc?: string }[];
    bottomBannerImg: string;
    heroBgGridImg?: string;
    isBannerNew?: boolean
}

declare global {
    interface Window { Razorpay: any; }
}

export default function MasterclassLayout(props: MasterclassLayoutProps) {
    const router = useRouter();
    /* ── State ── */
    const [days, setDays] = useState("03");
    const [hours, setHours] = useState("14");
    const [mins, setMins] = useState("22");
    const [secs, setSecs] = useState("09");
    const [percentage, setPercentage] = useState(78);
    const [seatsLeft, setSeatsLeft] = useState(23);
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formPhone, setFormPhone] = useState("");
    const [formCollege, setFormCollege] = useState("");
    const [formRole, setFormRole] = useState("other");
    const [regMsg, setRegMsg] = useState<{ text: string; type: "error" | "info" | "success" } | null>(null);
    const [submitting, setSubmitting] = useState(false);

    const resetForm = () => {
        setFormName("");
        setFormEmail("");
        setFormPhone("");
        setFormCollege("");
        setFormRole("other");
        setSubmitting(false);
    };

    /* ── Countdown + seats ── */
    const tick = useCallback(() => {
        const targetDate = new Date(props.eventDateRaw).getTime();
        const startDate = new Date(props.eventStartDateRaw).getTime();
        const now = Date.now();
        const totalDist = targetDate - startDate;
        const currentDist = now - startDate;
        const progress = Math.min(1, Math.max(0, currentDist / totalDist));
        const pct = Math.floor(40 + 58 * progress);
        const seats = Math.max(2, Math.floor(60 - 58 * progress));
        setPercentage(pct);
        setSeatsLeft(seats);
        const diff = Math.max(0, targetDate - now);
        setDays(String(Math.floor(diff / 86400000)).padStart(2, "0"));
        setHours(String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"));
        setMins(String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"));
        setSecs(String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"));
    }, [props.eventDateRaw, props.eventStartDateRaw]);

    useEffect(() => {
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [tick]);

    /* ── Scroll Reveal ── */
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }),
            { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    /* ── Razorpay Script ── */
    useEffect(() => {
        const s = document.createElement("script");
        s.src = "https://checkout.razorpay.com/v1/checkout.js";
        s.async = true;
        document.body.appendChild(s);
        return () => { document.body.removeChild(s); };
    }, []);

    /* ── Submit Registration ── */
    const submitRegistration = async () => {
        if (!formName || !formEmail || !formPhone || !formCollege || formPhone.length < 10) {
            setRegMsg({ text: !formName || !formEmail || !formPhone || !formCollege ? "Please fill in all required fields." : "Phone number must be 10 digits.", type: "error" });
            return;
        }
        setSubmitting(true);
        setRegMsg(null);

        if (props.paymentAmount === 0) {
            try {
                setRegMsg({ text: "Registering...", type: "info" });

                // Create order with amount 0
                const orderRes = await fetch("https://dm-learning-be.dmlabs.in/api/payment/create-order", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ amount: 0, fullName: formName, email: formEmail, phoneNumber: formPhone, collegeOrCompany: formCollege, role: formRole, isFree: 1 }),
                });
                const orderData = await orderRes.json();
                if (!orderData.success) throw new Error(orderData.message || "Failed to create order.");

                sessionStorage.setItem("webinarType", props.webinarType);

                // Verify without Razorpay
                const verifyRes = await fetch("https://dm-learning-be.dmlabs.in/api/payment/verify", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ razorpay_order_id: orderData.order.id, razorpay_payment_id: orderData.order.id, razorpay_signature: orderData.order.id, webinarType: props.webinarType }),
                });
                const verifyData = await verifyRes.json();
                if (!verifyData.success) throw new Error("Verification failed.");

                router.push(props.webinarType === "solopreneurship" ? "/thankyou?ref=sp" : "/thankyou");
            } catch (err: any) {
                setRegMsg({ text: err.message || "Process failed. Please try again.", type: "error" });
                setSubmitting(false);
            }
            return;
        }

        try {
            const keyRes = await fetch("https://dm-learning-be.dmlabs.in/api/payment/get-key");
            const keyData = await keyRes.json();
            if (!keyData.success) throw new Error("Unable to fetch payment key.");
            const res = await fetch("https://dm-learning-be.dmlabs.in/api/payment/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: props.paymentAmount, fullName: formName, email: formEmail, phoneNumber: formPhone, collegeOrCompany: formCollege, role: formRole, isFree: 0 }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.message || "Failed to create order.");
            const options = {
                key: keyData.key, amount: data.order.amount, currency: "INR",
                name: props.paymentOrderName, description: props.paymentOrderDescription, order_id: data.order.id,
                handler: async (response: any) => {
                    setRegMsg({ text: "Verifying & sending email...", type: "info" });
                    try {
                        const vRes = await fetch("https://dm-learning-be.dmlabs.in/api/payment/verify", {
                            method: "POST", headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ razorpay_order_id: response.razorpay_order_id, razorpay_payment_id: response.razorpay_payment_id, razorpay_signature: response.razorpay_signature, webinarType: props.webinarType }),
                        });
                        const vData = await vRes.json();
                        if (vData.success) {
                            router.push("/thank-you-page");
                        }
                        else throw new Error("Verification failed.");
                    } catch (err: any) { setRegMsg({ text: err.message, type: "error" }); setSubmitting(false); }
                },
                prefill: { name: formName, email: formEmail, contact: formPhone },
                theme: { color: "#FC8B20" },
                modal: {
                    ondismiss: () => {
                        resetForm();
                    }
                }
            };
            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", () => { setRegMsg({ text: "Process failed. Please try again.", type: "error" }); setSubmitting(false); });
            rzp.open();
        } catch (err: any) { setRegMsg({ text: err.message, type: "error" }); setSubmitting(false); }
    };

    const msgStyle = regMsg ? {
        display: "block", marginTop: 12, padding: "12px 16px", borderRadius: 8, fontSize: 14, fontWeight: 600, textAlign: "center" as const,
        background: regMsg.type === "error" ? "#fff0f0" : "#f0f8ff",
        color: regMsg.type === "error" ? "#c0392b" : "#0056b3",
        border: regMsg.type === "error" ? "1.5px solid #f5c6c6" : "1.5px solid #b8daff",
    } : { display: "none" };

    return (
        <div className="ai-masterclass-page">
            {/* ── HERO ── */}

            {props.isBannerNew ?
                <div className="bg-hero new-banner">
                    <div className="hero-bg-grid" style={props.heroBgGridImg ? { backgroundImage: `url(${props.heroBgGridImg})` } : undefined}></div>
                    <div className="hero container" id="top">
                        <div className="hero-bg">
                            <div className="hero-bg-img"></div>
                            <div className="hero-bg-overlay"></div>
                        </div>
                        <div className="hero-left">
                            <div className="eyebrow"><span className="ldot"></span>{props.heroEyebrow}</div>
                            <h1 style={{ marginBottom: '0.5rem' }}>{props.heroHeadline}</h1>
                            {props.heroSecondaryHeadline && props.heroSecondaryHeadline}
                            <div className="hero-sub orange">{props.heroSubheadline}</div>


                            <div className='flex-wrapper'>
                                <div className="dr-ati-priye">
                                    <Image
                                        src="/dr-ati-priye.svg"
                                        alt="doctor"
                                        className="object-cover"
                                        width={455}
                                        height={430}
                                    />
                                </div>
                                <div>
                                    <div className="meta-row">
                                        <div className="mc"><span className="ml"><DateIcon /> DATE</span><span className="mv">{props.eventDisplayDate}</span></div>
                                        <div className="mc"><span className="ml"><TimeIcon /> TIME</span><span className="mv">{props.eventTime}</span></div>
                                        <div className="mc"><span className="ml"><TimeIcon /> DURATION</span><span className="mv">{props.eventDuration}</span></div>
                                        <div className="mc"><span className="ml"><ModeIcon /> MODE</span><span className="mv">{props.eventMode}</span></div>
                                    </div>
                                    <div className="urgency-strip">
                                        <span className="card-icon" style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}><SeatsIcon /></span>
                                        <div>
                                            <p><strong>Seats Filling Fast</strong></p>
                                            <p>Limited spots available. Secure yours before registrations close.</p>
                                        </div>
                                    </div>
                                    <div className="countdown" id="registration-form-mobile">
                                        <span className="cd-label">Closes in</span>
                                        <div className="cd-blocks">
                                            <div className="cd-unit"><span className="cd-num">{days}</span><span className="cd-txt">Days</span></div>
                                            <span className="cd-sep">:</span>
                                            <div className="cd-unit"><span className="cd-num">{hours}</span><span className="cd-txt">Hrs</span></div>
                                            <span className="cd-sep">:</span>
                                            <div className="cd-unit"><span className="cd-num">{mins}</span><span className="cd-txt">Min</span></div>
                                            <span className="cd-sep">:</span>
                                            <div className="cd-unit"><span className="cd-num">{secs}</span><span className="cd-txt">Sec</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* ── FORM CARD ── */}
                        <div className="hero-right" id="registration-form">
                            <div className="form-card">
                                <div className="fc-head">
                                    <div className="fc-title">{props.formTitle}</div>
                                    {props.formNote && <div className="p-note">{props.formNote}</div>}
                                    {props.formPriceRow}
                                </div>

                                {props.formClosed ? (
                                    <div style={{ padding: "40px 20px", background: "rgba(252, 139, 32, 0.08)", borderRadius: "12px", margin: "20px 0", textAlign: "center", border: "1px solid rgba(252, 139, 32, 0.3)" }}>
                                        <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "20px", color: "var(--orange)" }}>Registration Closed</h3>
                                        <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.6" }}>Thank you for your interest.<br />The registrations for this webinar are now closed.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="fg"><label>Full Name</label><input value={formName} onChange={(e) => setFormName(e.target.value)} type="text" placeholder="Your full name" /></div>
                                        <div className="fg"><label>Email Address</label><input value={formEmail} onChange={(e) => setFormEmail(e.target.value)} type="email" placeholder="you@example.com" /></div>
                                        <div className="fg"><label>Phone Number</label><input value={formPhone} onChange={(e) => {
                                            const value = e.target.value.replace(/[^0-9]/g, "");
                                            setFormPhone(value);
                                        }} type="tel" inputMode="numeric"
                                            pattern="[0-9]*" minLength={10} placeholder="Please enter your phone number" maxLength={10} /></div>
                                        <div className="fg"><label>College/Organization<span className="opt"></span></label><input value={formCollege} onChange={(e) => setFormCollege(e.target.value)} type="text" placeholder="Your college/organization name" /></div>
                                        <button className="sub-btn" id="reg-btn" disabled={submitting} onClick={submitRegistration}>
                                            {submitting ? "Processing..." : props.formCtaText}
                                        </button>
                                    </>
                                )}

                                {regMsg && <div style={msgStyle}>{regMsg.text}</div>}
                                {props.formBottomText !== null && (
                                    <p style={{ fontSize: 12, color: "#999", textAlign: "center", marginTop: 12 }}>
                                        {props.formBottomText ?? ""}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                :
                <div className="bg-hero">
                    <div className="hero-bg-grid" style={props.heroBgGridImg ? { backgroundImage: `url(${props.heroBgGridImg})` } : undefined}></div>
                    <div className="hero container" id="top">
                        <div className="hero-bg">
                            <div className="hero-bg-img"></div>
                            <div className="hero-bg-overlay"></div>
                        </div>
                        <div className="hero-left">
                            <div className="eyebrow"><span className="ldot"></span>{props.heroEyebrow}</div>
                            <h1 style={{ marginBottom: '0.5rem' }}>{props.heroHeadline}</h1>
                            {props.heroSecondaryHeadline && props.heroSecondaryHeadline}
                            <div className="hero-sub orange">{props.heroSubheadline}</div>



                            <div className="meta-row">
                                <div className="mc"><span className="ml"><DateIcon /> DATE</span><span className="mv">{props.eventDisplayDate}</span></div>
                                <div className="mc"><span className="ml"><TimeIcon /> TIME</span><span className="mv">{props.eventTime}</span></div>
                                <div className="mc"><span className="ml"><TimeIcon /> DURATION</span><span className="mv">{props.eventDuration}</span></div>
                                <div className="mc"><span className="ml"><ModeIcon /> MODE</span><span className="mv">{props.eventMode}</span></div>
                            </div>
                            <div className="urgency-strip">
                                <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}><SeatsIcon /></span>
                                <div>
                                    <p><strong>Seats Filling Fast</strong></p>
                                    <p>Limited spots available. Secure yours before registrations close.</p>
                                </div>
                            </div>
                            <div className="countdown" id="registration-form-mobile">
                                <span className="cd-label">Closes in</span>
                                <div className="cd-blocks">
                                    <div className="cd-unit"><span className="cd-num">{days}</span><span className="cd-txt">Days</span></div>
                                    <span className="cd-sep">:</span>
                                    <div className="cd-unit"><span className="cd-num">{hours}</span><span className="cd-txt">Hrs</span></div>
                                    <span className="cd-sep">:</span>
                                    <div className="cd-unit"><span className="cd-num">{mins}</span><span className="cd-txt">Min</span></div>
                                    <span className="cd-sep">:</span>
                                    <div className="cd-unit"><span className="cd-num">{secs}</span><span className="cd-txt">Sec</span></div>
                                </div>
                            </div>
                        </div>

                        {/* ── FORM CARD ── */}
                        <div className="hero-right" id="registration-form">
                            <div className="form-card">
                                <div className="fc-head">
                                    <div className="fc-title">{props.formTitle}</div>
                                    {props.formNote && <div className="p-note">{props.formNote}</div>}
                                    {props.formPriceRow}
                                </div>

                                {props.formClosed ? (
                                    <div style={{ padding: "40px 20px", background: "rgba(252, 139, 32, 0.08)", borderRadius: "12px", margin: "20px 0", textAlign: "center", border: "1px solid rgba(252, 139, 32, 0.3)" }}>
                                        <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "20px", color: "var(--orange)" }}>Registration Closed</h3>
                                        <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.6" }}>Thank you for your interest.<br />The registrations for this webinar are now closed.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="fg"><label>Full Name</label><input value={formName} onChange={(e) => setFormName(e.target.value)} type="text" placeholder="Your full name" /></div>
                                        <div className="fg"><label>Email Address</label><input value={formEmail} onChange={(e) => setFormEmail(e.target.value)} type="email" placeholder="you@example.com" /></div>
                                        <div className="fg"><label>Phone Number</label><input value={formPhone} onChange={(e) => {
                                            const value = e.target.value.replace(/[^0-9]/g, "");
                                            setFormPhone(value);
                                        }} type="tel" inputMode="numeric"
                                            pattern="[0-9]*" minLength={10} placeholder="Please enter your phone number" maxLength={10} /></div>
                                        <div className="fg"><label>College/Organization<span className="opt"></span></label><input value={formCollege} onChange={(e) => setFormCollege(e.target.value)} type="text" placeholder="Your college/organization name" /></div>
                                        <button className="sub-btn" id="reg-btn" disabled={submitting} onClick={submitRegistration}>
                                            {submitting ? "Processing..." : props.formCtaText}
                                        </button>
                                    </>
                                )}

                                {regMsg && <div style={msgStyle}>{regMsg.text}</div>}
                                {props.formBottomText !== null && (
                                    <p style={{ fontSize: 12, color: "#999", textAlign: "center", marginTop: 12 }}>
                                        {props.formBottomText ?? ""}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


            }

            {/* ── PARTNERS ── */}
            <div className="partners reveal container">
                <div className="pi">
                    <span className="plbl">Clients &amp; Partners</span>
                    <div className="logos">
                        {props.partnersData.map((p, i) => (
                            <div key={i} className="lg">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={p.img} alt={p.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── LEARN + BONUSES ── */}
            <div className="sec sec-white reveal container">
                <div className="two">
                    <div>
                        <span className="stag">{props.learnSectionTitle1}</span>
                        <h2>{props.learnSectionTitle2}</h2>
                        <p className="ssub">{props.learnSectionSub}</p>
                        <ul className="cl">
                            {props.learnItems.map((item, i) => (
                                <li key={i}><span className="ck"><CheckIcon /></span><span><strong>{item.bold}</strong> {item.rest}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span className="stag">{props.bonusSectionTitle1}</span>
                        <h2>{props.bonusSectionTitle2}</h2>
                        <p className="ssub">{props.bonusSectionSub}</p>
                        <div className="bgrid">
                            {props.bonusData.map((b, i) => (
                                <div key={i} className="skill-card">
                                    <div className="icon-box">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={b.icon} alt={b.title} style={{ width: 24, height: 24 }} /></div>
                                    <div className="skill-card-title">{b.title}</div>
                                    <div className="skill-card-desc">{b.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── SPEAKER ── */}
            <div className="speaker-strip reveal">
                <div className="speaker-inner container">
                    <div className="sp-portrait">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={props.speakerPortrait} alt="Speaker" />
                    </div>
                    <div className="sp-bio">
                        <h2>{props.speakerNameAndRoleTitle}</h2>
                        <div className="sp-role">{props.speakerRoleDescription}</div>
                        {props.speakerBio}
                    </div>
                </div>
            </div>

            {/* ── WHO IT'S FOR ── */}
            <div className="for-sec reveal" style={{ backgroundColor: "#fff" }}>
                <div className="for-grid container">
                    <div>
                        <span className="stag">{props.whoIsItForTitle1}</span>
                        <h2>{props.whoIsItForTitle2}</h2>

                        {props.audiencePerfectForTitle && <p style={{ fontWeight: 700, marginBottom: 12 }}>{props.audiencePerfectForTitle}</p>}
                        <ul className="cl" style={{ marginBottom: 24 }}>
                            {props.audienceData.map((a, i) => (
                                <li key={i}><span className="ck"><CheckIcon /></span><span>{a.title} {a.desc && <span>- {a.desc}</span>}</span></li>
                            ))}
                        </ul>

                        {props.audienceAlsoValuableTitle && <p style={{ fontWeight: 700, marginBottom: 12 }}>{props.audienceAlsoValuableTitle}</p>}
                        <ul className="cl">
                            {props.alsoValuableData.map((a, i) => (
                                <li key={i}><span className="ck" style={{ filter: 'grayscale(1)' }}><CheckIcon /></span><span>{a.title} {a.desc && <span>- {a.desc}</span>}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={props.bottomBannerImg} alt="Banner" />
                    </div>
                </div>
            </div>

            <div className="container" style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#fff' }}>
                <button
                    className="sub-btn"
                    style={{ margin: '0 auto', display: 'block', maxWidth: '320px' }}
                    onClick={() => {
                        const targetId = window.innerWidth <= 1080 ? "registration-form-mobile" : "registration-form";
                        const el = document.getElementById(targetId);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Register Now
                </button>
            </div>
        </div>
    );
}
