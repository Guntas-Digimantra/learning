"use client";
import Image from 'next/image';
import { useState, useEffect, useCallback, ReactNode } from "react";
import { useRouter } from "next/navigation";

const container = "mx-auto max-w-[1440px]";
const reveal = "reveal opacity-0 translate-y-5 transition-all duration-[650ms] ease-out [&.on]:opacity-100 [&.on]:translate-y-0";
const subBtn =
  "mt-1.5 w-full cursor-pointer rounded-[10px] border-none bg-gradient-to-r from-[#fc8b20] to-[#e05f00] py-[15px] text-base font-bold text-white transition-all hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(252,139,32,0.35)] disabled:cursor-not-allowed disabled:opacity-60";
const fgLabel = "mb-1.5 block text-left text-[13px] font-semibold text-[#333]";
const fgInput =
  "box-border w-full rounded-lg border-[1.5px] border-[#ddd] px-3.5 py-3 font-[DM_Sans,sans-serif] text-sm outline-none transition-[border] focus:border-[#fc8b20]";
const checklist = "m-0 list-none p-0";
const checklistItem = "mb-[18px] flex gap-3 text-[14.5px] leading-[1.65] text-[#333]";
const checkIconWrap = "mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center";

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
        <div className="overflow-x-hidden font-[Sora,sans-serif] text-[#1a1a2e]">
            {/* ── HERO ── */}

            {props.isBannerNew ?
                <div className="relative bg-gradient-to-br from-[#1e1b4b] via-[#282568] to-[#312e6b]">
                    <div className="absolute inset-0 bg-[url('/ai-masterclass/mainBackground.png')] opacity-100" style={props.heroBgGridImg ? { backgroundImage: `url(${props.heroBgGridImg})` } : undefined}></div>
                    <div className={`${container} relative grid min-h-[80vh] grid-cols-2 max-[1080px]:grid-cols-1 max-[600px]:block`} id="top">
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="absolute bottom-0 right-[200px] h-[600px] w-[400px] bg-contain bg-bottom bg-no-repeat opacity-30 max-[1080px]:right-0"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(252,139,32,0.1),transparent_60%)]"></div>
                        </div>
                        <div className="relative z-[2] flex flex-col justify-center py-16 pl-11 text-white max-[1080px]:px-6 max-[680px]:px-5 max-[680px]:pb-0 max-[680px]:pt-12">
                            <div className="mb-4 flex h-8 w-fit items-center gap-2 rounded-3xl border border-[#f27d26]/30 bg-[#f27d26]/20 px-2 text-xs font-bold leading-4 text-[#F27D26] max-[786px]:h-auto"><span className="size-2 animate-pulse rounded-full bg-[#fc8b20] max-[480px]:w-3"></span>{props.heroEyebrow}</div>
                            <h1 className="mb-2 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.15]">{props.heroHeadline}</h1>
                            {props.heroSecondaryHeadline && props.heroSecondaryHeadline}
                            <div className="max-w-[560px] text-base leading-[1.65] text-[#fc8b20] opacity-[0.92]">{props.heroSubheadline}</div>


                            <div className='flex gap-10 max-[786px]:flex-col'>
                                <div className="w-[322px] max-[786px]:!w-full">
                                    <Image
                                        src="/dr-ati-priye.svg"
                                        alt="doctor"
                                        className="object-cover"
                                        width={455}
                                        height={430}
                                    />
                                </div>
                                <div>
                                    <div className="mt-0 grid grid-cols-2 gap-4 bg-transparent p-0">
                                        <div className="flex flex-1 flex-col items-start rounded-2xl border border-white/10 bg-white/10 p-3"><span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[1.1px] text-white/55"><DateIcon /> DATE</span><span className="text-sm font-semibold text-white">{props.eventDisplayDate}</span></div>
                                        <div className="flex flex-1 flex-col items-start rounded-2xl border border-white/10 bg-white/10 p-3"><span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[1.1px] text-white/55"><TimeIcon /> TIME</span><span className="text-sm font-semibold text-white">{props.eventTime}</span></div>
                                        <div className="flex flex-1 flex-col items-start rounded-2xl border border-white/10 bg-white/10 p-3"><span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[1.1px] text-white/55"><TimeIcon /> DURATION</span><span className="text-sm font-semibold text-white">{props.eventDuration}</span></div>
                                        <div className="flex flex-1 flex-col items-start rounded-2xl border border-white/10 bg-white/10 p-3"><span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[1.1px] text-white/55"><ModeIcon /> MODE</span><span className="text-sm font-semibold text-white">{props.eventMode}</span></div>
                                    </div>
                                    <div className="mt-6 flex w-fit items-center gap-[6.85px] rounded-[13.699px] border border-[#f27d26]/20 bg-[#f27d26]/10 p-3 max-[786px]:w-full">
                                        <span className="flex size-[34.248px] shrink-0 items-center justify-center rounded-[6.85px] bg-[#F27D26] p-[6.848px] text-lg"><SeatsIcon /></span>
                                        <div>
                                            <p className="m-0 text-base font-bold leading-[20.549px] text-white"><strong>Seats Filling Fast</strong></p>
                                            <p className="m-0 text-sm font-normal leading-[17.124px] text-[#90A1B9]">Limited spots available. Secure yours before registrations close.</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center gap-5 max-[600px]:flex-col" id="registration-form-mobile">
                                        <span className="text-xs uppercase tracking-wide opacity-60">Closes in</span>
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-[52px] text-center"><span className="block min-w-[50px] rounded-lg bg-transparent px-3.5 py-1.5 text-2xl font-extrabold text-white">{days}</span><span className="mt-0 block text-[10px] uppercase tracking-wide opacity-55">Days</span></div>
                                            <span className="text-[22px] font-bold text-[#fc8b20] opacity-50 animate-pulse">:</span>
                                            <div className="w-[52px] text-center"><span className="block min-w-[50px] rounded-lg bg-transparent px-3.5 py-1.5 text-2xl font-extrabold text-white">{hours}</span><span className="mt-0 block text-[10px] uppercase tracking-wide opacity-55">Hrs</span></div>
                                            <span className="text-[22px] font-bold text-[#fc8b20] opacity-50 animate-pulse">:</span>
                                            <div className="w-[52px] text-center"><span className="block min-w-[50px] rounded-lg bg-transparent px-3.5 py-1.5 text-2xl font-extrabold text-white">{mins}</span><span className="mt-0 block text-[10px] uppercase tracking-wide opacity-55">Min</span></div>
                                            <span className="text-[22px] font-bold text-[#fc8b20] opacity-50 animate-pulse">:</span>
                                            <div className="w-[52px] text-center"><span className="block min-w-[50px] rounded-lg bg-transparent px-3.5 py-1.5 text-2xl font-extrabold text-white">{secs}</span><span className="mt-0 block text-[10px] uppercase tracking-wide opacity-55">Sec</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* ── FORM CARD ── */}
                        <div className="relative z-[2] flex items-center justify-center py-12 pl-0 pr-6 max-[1080px]:px-6 max-[1080px]:pb-[52px]" id="registration-form">
                            <div className="w-full max-w-[420px] rounded-2xl bg-white px-8 py-9 text-[#1a1a2e] shadow-[0_12px_48px_rgba(0,0,0,0.22)] max-[1080px]:mx-auto max-[1080px]:max-w-[500px]">
                                <div className="mb-5 text-center">
                                    <div className="text-xl font-bold text-[#282568]">{props.formTitle}</div>
                                    {props.formNote && <div className="mt-1 text-center text-xs text-[#888]">{props.formNote}</div>}
                                    {props.formPriceRow}
                                </div>

                                {props.formClosed ? (
                                    <div style={{ padding: "40px 20px", background: "rgba(252, 139, 32, 0.08)", borderRadius: "12px", margin: "20px 0", textAlign: "center", border: "1px solid rgba(252, 139, 32, 0.3)" }}>
                                        <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "20px", color: "#fc8b20" }}>Registration Closed</h3>
                                        <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.6" }}>Thank you for your interest.<br />The registrations for this webinar are now closed.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-4"><label className={fgLabel}>Full Name</label><input className={fgInput} value={formName} onChange={(e) => setFormName(e.target.value)} type="text" placeholder="Your full name" /></div>
                                        <div className="mb-4"><label className={fgLabel}>Email Address</label><input className={fgInput} value={formEmail} onChange={(e) => setFormEmail(e.target.value)} type="email" placeholder="you@example.com" /></div>
                                        <div className="mb-4"><label className={fgLabel}>Phone Number</label><input className={fgInput} value={formPhone} onChange={(e) => {
                                            const value = e.target.value.replace(/[^0-9]/g, "");
                                            setFormPhone(value);
                                        }} type="tel" inputMode="numeric"
                                            pattern="[0-9]*" minLength={10} placeholder="Please enter your phone number" maxLength={10} /></div>
                                        <div className="mb-4"><label className={fgLabel}>College/Organization</label><input className={fgInput} value={formCollege} onChange={(e) => setFormCollege(e.target.value)} type="text" placeholder="Your college/organization name" /></div>
                                        <button className={subBtn} id="reg-btn" disabled={submitting} onClick={submitRegistration}>
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
                <div className="relative bg-gradient-to-br from-[#1e1b4b] via-[#282568] to-[#312e6b]">
                    <div className="absolute inset-0 bg-[url('/ai-masterclass/mainBackground.png')] opacity-10" style={props.heroBgGridImg ? { backgroundImage: `url(${props.heroBgGridImg})` } : undefined}></div>
                    <div className={`${container} relative grid min-h-[80vh] grid-cols-2 max-[1080px]:grid-cols-1 max-[600px]:block`} id="top">
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="absolute bottom-0 right-[200px] h-[600px] w-[400px] bg-contain bg-bottom bg-no-repeat opacity-30 max-[1080px]:right-0"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(252,139,32,0.1),transparent_60%)]"></div>
                        </div>
                        <div className="relative z-[2] flex flex-col justify-center py-16 pl-11 text-white max-[1080px]:px-6 max-[680px]:px-5 max-[680px]:pb-0 max-[680px]:pt-12">
                            <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#fc8b20] max-[480px]:w-[310px]"><span className="size-2 animate-pulse rounded-full bg-[#fc8b20] max-[600px]:w-3"></span>{props.heroEyebrow}</div>
                            <h1 className="mb-2 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.15]">{props.heroHeadline}</h1>
                            {props.heroSecondaryHeadline && props.heroSecondaryHeadline}
                            <div className="max-w-[560px] text-base leading-[1.65] text-[#fc8b20] opacity-[0.92]">{props.heroSubheadline}</div>



                            <div className="mt-7 flex flex-wrap gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-[18px] max-[680px]:w-full">
                                <div className="min-w-[120px] flex-1 border-r border-white/10 px-5 py-2.5 last:border-r-0 max-[680px]:px-3.5"><span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[1.1px] text-white/55"><DateIcon /> DATE</span><span className="text-sm font-semibold text-white">{props.eventDisplayDate}</span></div>
                                <div className="min-w-[120px] flex-1 border-r border-white/10 px-5 py-2.5 last:border-r-0 max-[680px]:px-3.5"><span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[1.1px] text-white/55"><TimeIcon /> TIME</span><span className="text-sm font-semibold text-white">{props.eventTime}</span></div>
                                <div className="min-w-[120px] flex-1 border-r border-white/10 px-5 py-2.5 last:border-r-0 max-[680px]:px-3.5"><span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[1.1px] text-white/55"><TimeIcon /> DURATION</span><span className="text-sm font-semibold text-white">{props.eventDuration}</span></div>
                                <div className="min-w-[120px] flex-1 border-r border-white/10 px-5 py-2.5 last:border-r-0 max-[680px]:px-3.5"><span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[1.1px] text-white/55"><ModeIcon /> MODE</span><span className="text-sm font-semibold text-white">{props.eventMode}</span></div>
                            </div>
                            <div className="mt-6 flex items-start gap-3.5 rounded-xl border border-[#fc8b20]/30 bg-[#fc8b20]/10 px-[22px] py-[18px]">
                                <span className="mt-px shrink-0 text-lg"><SeatsIcon /></span>
                                <div>
                                    <p className="m-0 text-[13.5px] leading-normal opacity-90"><strong className="text-[#fc8b20]">Seats Filling Fast</strong></p>
                                    <p className="m-0 text-[13.5px] leading-normal opacity-90">Limited spots available. Secure yours before registrations close.</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center gap-5 max-[600px]:flex-col" id="registration-form-mobile">
                                <span className="text-xs uppercase tracking-wide opacity-60">Closes in</span>
                                <div className="flex items-center gap-2.5">
                                    <div className="text-center"><span className="block min-w-[50px] rounded-lg bg-white/10 px-3.5 py-1.5 text-[28px] font-extrabold text-[#fc8b20]">{days}</span><span className="mt-1 block text-[10px] uppercase tracking-wide opacity-55">Days</span></div>
                                    <span className="animate-pulse text-[22px] font-bold text-[#fc8b20] opacity-50">:</span>
                                    <div className="text-center"><span className="block min-w-[50px] rounded-lg bg-white/10 px-3.5 py-1.5 text-[28px] font-extrabold text-[#fc8b20]">{hours}</span><span className="mt-1 block text-[10px] uppercase tracking-wide opacity-55">Hrs</span></div>
                                    <span className="animate-pulse text-[22px] font-bold text-[#fc8b20] opacity-50">:</span>
                                    <div className="text-center"><span className="block min-w-[50px] rounded-lg bg-white/10 px-3.5 py-1.5 text-[28px] font-extrabold text-[#fc8b20]">{mins}</span><span className="mt-1 block text-[10px] uppercase tracking-wide opacity-55">Min</span></div>
                                    <span className="animate-pulse text-[22px] font-bold text-[#fc8b20] opacity-50">:</span>
                                    <div className="text-center"><span className="block min-w-[50px] rounded-lg bg-white/10 px-3.5 py-1.5 text-[28px] font-extrabold text-[#fc8b20]">{secs}</span><span className="mt-1 block text-[10px] uppercase tracking-wide opacity-55">Sec</span></div>
                                </div>
                            </div>
                        </div>

                        {/* ── FORM CARD ── */}
                        <div className="relative z-[2] flex items-center justify-center py-12 pl-0 pr-6 max-[1080px]:px-6 max-[1080px]:pb-[52px]" id="registration-form">
                            <div className="w-full max-w-[420px] rounded-2xl bg-white px-8 py-9 text-[#1a1a2e] shadow-[0_12px_48px_rgba(0,0,0,0.22)] max-[1080px]:mx-auto max-[1080px]:max-w-[500px]">
                                <div className="mb-5 text-center">
                                    <div className="text-xl font-bold text-[#282568]">{props.formTitle}</div>
                                    {props.formNote && <div className="mt-1 text-center text-xs text-[#888]">{props.formNote}</div>}
                                    {props.formPriceRow}
                                </div>

                                {props.formClosed ? (
                                    <div style={{ padding: "40px 20px", background: "rgba(252, 139, 32, 0.08)", borderRadius: "12px", margin: "20px 0", textAlign: "center", border: "1px solid rgba(252, 139, 32, 0.3)" }}>
                                        <h3 style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "20px", color: "#fc8b20" }}>Registration Closed</h3>
                                        <p style={{ fontSize: "15px", color: "#444", lineHeight: "1.6" }}>Thank you for your interest.<br />The registrations for this webinar are now closed.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-4"><label className={fgLabel}>Full Name</label><input className={fgInput} value={formName} onChange={(e) => setFormName(e.target.value)} type="text" placeholder="Your full name" /></div>
                                        <div className="mb-4"><label className={fgLabel}>Email Address</label><input className={fgInput} value={formEmail} onChange={(e) => setFormEmail(e.target.value)} type="email" placeholder="you@example.com" /></div>
                                        <div className="mb-4"><label className={fgLabel}>Phone Number</label><input className={fgInput} value={formPhone} onChange={(e) => {
                                            const value = e.target.value.replace(/[^0-9]/g, "");
                                            setFormPhone(value);
                                        }} type="tel" inputMode="numeric"
                                            pattern="[0-9]*" minLength={10} placeholder="Please enter your phone number" maxLength={10} /></div>
                                        <div className="mb-4"><label className={fgLabel}>College/Organization</label><input className={fgInput} value={formCollege} onChange={(e) => setFormCollege(e.target.value)} type="text" placeholder="Your college/organization name" /></div>
                                        <button className={subBtn} id="reg-btn" disabled={submitting} onClick={submitRegistration}>
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
            <div className={`${reveal} px-10 py-[50px] max-[680px]:px-5 ${container}`}>
                <div className="text-center">
                    <span className="text-xs font-medium uppercase tracking-[2.5px] text-[#999]">Clients &amp; Partners</span>
                    <div className="mt-7 flex flex-wrap items-center justify-between">
                        {props.partnersData.map((p, i) => (
                            <div key={i} className="h-[60px] opacity-85 transition-opacity hover:opacity-100 max-[600px]:h-[45px] [&_img]:h-full">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={p.img} alt={p.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`${reveal} bg-white px-10 py-10 max-[680px]:px-5 ${container}`}>
                <div className="grid grid-cols-2 gap-14 max-[1080px]:grid-cols-1 max-[1080px]:gap-9">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#fc8b20]">{props.learnSectionTitle1}</span>
                        <h2 className="my-3 text-[clamp(1.4rem,2.5vw,1.8rem)] leading-[1.3] text-[#282568]">{props.learnSectionTitle2}</h2>
                        <p className="mb-6 text-[15px] leading-[1.7] text-[#666]">{props.learnSectionSub}</p>
                        <ul className={checklist}>
                            {props.learnItems.map((item, i) => (
                                <li key={i} className={checklistItem}><span className={checkIconWrap}><CheckIcon /></span><span><strong>{item.bold}</strong> {item.rest}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#fc8b20]">{props.bonusSectionTitle1}</span>
                        <h2 className="my-3 text-[clamp(1.4rem,2.5vw,1.8rem)] leading-[1.3] text-[#282568]">{props.bonusSectionTitle2}</h2>
                        <p className="mb-6 text-[15px] leading-[1.7] text-[#666]">{props.bonusSectionSub}</p>
                        <div className="grid grid-cols-2 gap-5 max-[680px]:grid-cols-1">
                            {props.bonusData.map((b, i) => (
                                <div key={i} className="rounded-xl border-[1.5px] border-[#e2e2ee] bg-[#f6f6fb] p-6 transition-[border-color,box-shadow] hover:border-[#fc8b20] hover:shadow-[0_4px_16px_rgba(252,139,32,0.12)]">
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] shadow-sm">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={b.icon} alt={b.title} style={{ width: 24, height: 24 }} /></div>
                                    <div className="mb-1.5 font-[DM_Sans,sans-serif] text-[15px] font-bold text-[#282568]">{b.title}</div>
                                    <div className="text-[13px] leading-[1.6] text-[#666]">{b.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${reveal} bg-[#f6f6fb] px-10 py-16 max-[680px]:px-5`}>
                <div className={`${container} flex flex-wrap items-center gap-11 max-[1080px]:block`}>
                    <div className="max-[1080px]:mb-8 max-[1080px]:flex max-[1080px]:w-full max-[1080px]:justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={props.speakerPortrait} alt="Speaker" className="max-h-[380px] w-[350px] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-[1080px]:mx-auto max-[1080px]:block max-[1080px]:h-auto max-[1080px]:max-h-none max-[1080px]:w-full max-[1080px]:max-w-[480px]" />
                    </div>
                    <div className="flex-1">
                        <h2 className="mt-3.5 text-[clamp(1.4rem,2.5vw,1.8rem)] leading-[1.3] text-[#282568]">{props.speakerNameAndRoleTitle}</h2>
                        <div className="mb-3 text-[15px] font-semibold text-[#fc8b20]">{props.speakerRoleDescription}</div>
                        <div className="text-[14.5px] leading-[1.7] text-[#666] [&_p]:text-[14.5px] [&_p]:leading-[1.7] [&_p]:text-[#666]">{props.speakerBio}</div>
                    </div>
                </div>
            </div>

            <div className={`${reveal} bg-white px-10 py-10 max-[680px]:px-5`}>
                <div className={`${container} grid grid-cols-2 items-center gap-14 max-[1080px]:grid-cols-1 max-[1080px]:gap-9`}>
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[2px] text-[#fc8b20]">{props.whoIsItForTitle1}</span>
                        <h2 className="my-3 text-[clamp(1.4rem,2.5vw,1.8rem)] leading-[1.3] text-[#282568]">{props.whoIsItForTitle2}</h2>

                        {props.audiencePerfectForTitle && <p className="mb-3 font-bold">{props.audiencePerfectForTitle}</p>}
                        <ul className={`${checklist} mb-6`}>
                            {props.audienceData.map((a, i) => (
                                <li key={i} className={checklistItem}><span className={checkIconWrap}><CheckIcon /></span><span>{a.title} {a.desc && <span>- {a.desc}</span>}</span></li>
                            ))}
                        </ul>

                        {props.audienceAlsoValuableTitle && <p className="mb-3 font-bold">{props.audienceAlsoValuableTitle}</p>}
                        <ul className={checklist}>
                            {props.alsoValuableData.map((a, i) => (
                                <li key={i} className={checklistItem}><span className={`${checkIconWrap} grayscale`}><CheckIcon /></span><span>{a.title} {a.desc && <span>- {a.desc}</span>}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={props.bottomBannerImg} alt="Banner" />
                    </div>
                </div>
            </div>

            <div className={`${container} bg-white px-5 py-10 text-center`}>
                <button
                    className={`${subBtn} mx-auto block max-w-[320px]`}
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
