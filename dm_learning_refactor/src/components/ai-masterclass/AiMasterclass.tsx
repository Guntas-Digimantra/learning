"use client";
import MasterclassLayout, { CheckIcon } from "../masterclass-layout/MasterclassLayout";

export default function AiMasterclass() {
    return (
        <MasterclassLayout
            webinarType="ai-masterclass"
            heroEyebrow={
                <>Live Webinar &middot; Career Breakthrough Session &middot; AI-First Strategies for Students</>
            }
            heroHeadline="What Top 1% Students Do Differently"
            heroSecondaryHeadline={
                <h2 style={{ fontSize: '1.5rem', fontWeight: '500', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', display: 'block' }}>They’re not more talented. They’re just better prepared.</h2>
            }
            heroSubheadline="Discover how top 1% students leverage AI and modern tech to get shortlisted, stand out, and get hired faster, while others keep applying without results."
            eventDateRaw="2026-04-06T18:00:00+05:30"
            eventStartDateRaw="2026-03-30T00:00:00+05:30"
            eventDisplayDate="April 06, 2026 (Monday)"
            eventTime="06:00 PM IST"
            eventDuration="60 Minutes"
            eventMode="Live &middot; Online"
            formTitle=""
            formNote=""
            formPriceRow={null}
            formClosed={true}
            formCtaText="Register & Pay ₹49 →"
            paymentAmount={49}
            paymentOrderName="Top-1-percent-students-webinar"
            paymentOrderDescription="Webinar Registration"
            partnersData={[
                { img: "/ai-masterclass/salesforce.png", name: "Salesforce" },
                { img: "/ai-masterclass/adobe.png", name: "Adobe" },
                { img: "/ai-masterclass/microsoft.png", name: "Microsoft" },
                { img: "/ai-masterclass/aws.png", name: "AWS" },
            ]}
            learnSectionTitle1="WHAT YOU'LL LEARN"
            learnSectionTitle2="One Session. Right Direction"
            learnSectionSub="Cut through the noise and learn exactly what actually works in today’s AI-enhanced hiring world."
            learnItems={[
                { bold: "What top 1% students do differently that", rest: " gets them hired first" },
                { bold: "Why even high-scoring students ", rest: "often miss out on interview opportunities" },
                { bold: "The exact skills", rest: "companies expect from freshers today" },
                { bold: "How recruiters", rest: "actually shortlist candidates" },
                { bold: "Build a job-ready, AI-optimized profile", rest: " that stands out instantly" },
                { bold: "How to convert ", rest: "learning into career success" },
                { bold: "Your personal", rest: "career roadmap" }
            ]}
            bonusSectionTitle1="FREE BONUSES FOR EVERY ATTENDEE"
            bonusSectionTitle2={
                <>More Than a Webinar.<br /><span style={{ color: "var(--orange)" }}>A Career Advantage. AI-First Resources </span></>
            }
            bonusSectionSub="Walk away with resources designed to give you a real head start."
            bonusData={[
                { icon: "/ai-masterclass/Resume.svg", title: "Resume Blueprint", desc: "Turn your resume into a shortlist magnet" },
                { icon: "/ai-masterclass/Carrer-visibility.svg", title: "Career Visibility Guide", desc: "Build a portfolio that attracts opportunities, even while you sleep." },
                { icon: "/ai-masterclass/handbook.svg", title: "Interview Success Handbook", desc: "What top candidates do differently to get shortlisted and selected. " }
            ]}
            speakerPortrait="/ai-masterclass/speaker_Rahat.jpeg"
            speakerNameAndRoleTitle="Rahat | HR Professional"
            speakerRoleDescription="People & Culture Leader | Workforce Strategist | Talent Acquisition Manager"
            speakerBio={
                <>
                    <p>With 10+ years of experience in hiring and evaluating talent across industries, Rahat brings deep insights into what truly makes candidates stand out, including AI-first evaluation trends.</p>
                    <p style={{ marginTop: '1rem', fontWeight: '600' }}>Core Competencies:</p>
                    <ul className="cl" style={{ gridTemplateColumns: '1fr', marginTop: '0.5rem' }}>
                        <li><span className="ck"><CheckIcon /></span><span>Hands-on hiring expertise across diverse industries, roles, and hiring scales.</span></li>
                        <li><span className="ck"><CheckIcon /></span><span>Building cultures where people feel valued, engaged, and motivated to grow.</span></li>
                        <li><span className="ck"><CheckIcon /></span><span>Crafting workforce strategies that match business needs with the right talent</span></li>
                    </ul>
                    <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>Known for a practical, no-fluff approach, the focus is on what actually works in real hiring scenarios, not just what sounds good in theory.</p>
                </>
            }
            whoIsItForTitle1="Who This Is For"
            whoIsItForTitle2="Is This Webinar Meant for You?"
            audiencePerfectForTitle="Perfect For People Who Are:"
            audienceData={[
                { title: "Are serious about becoming part of the Top 1% students" },
                { title: "Are not getting internships or interview calls" },
                { title: "Feel confused about what skills to learn or where to start" },
                { title: "Are a working professional or a career switcher getting into a tech role" },
                { title: "Have a resume but aren’t getting shortlisted" },
                { title: "Keep applying but rarely hear back" },
                { title: "Want to improve their chances in campus placements" },
                { title: "Want to build a strong, AI-first job-ready profile" },
                { title: "Are in final year and feeling the pressure" },
                { title: "Want to understand what companies actually look for" },
                { title: "Are pursuing B.Tech / B.E / BCA / MCA / Diploma / Polytechnic" }
            ]}
            audienceAlsoValuableTitle="Also Valuable For:"
            alsoValuableData={[
                { title: "Students interested in AI, technology, or high-growth careers" },
                { title: "Those who want to get ahead early (1st/2nd year students)" },
                { title: "Anyone tired of random learning and wants clear direction" }
            ]}
            bottomBannerImg="/ai-masterclass/Banner.png"
        />
    )
}
