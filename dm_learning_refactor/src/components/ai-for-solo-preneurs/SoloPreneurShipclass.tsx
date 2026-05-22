"use client";
import MasterclassLayout from "../masterclass-layout/MasterclassLayout";

export default function SoloPreneurShipclass() {
    return (
        <MasterclassLayout
            isBannerNew={true}
            webinarType="solopreneurship"
            heroEyebrow={<>Live Webinar · Startup Strategy Session <span className="dotonmobile">·</span> AI-Driven Solo Entrepreneurship</>}

            heroHeadline={<>Leveraging AI with<br />Solo-Preneurship</>}

            heroSecondaryHeadline={
                <h2 style={{ fontSize: '1.5rem', fontWeight: '500', color: '#fff', marginBottom: '1.5rem', display: 'block' }}>Build and Scale AI-Powered Business Without a Team</h2>
            }
            heroSubheadline=""
            formClosed={true}
            eventDateRaw="2026-04-17T15:30:00+05:30"
            eventStartDateRaw="2026-03-30T00:00:00+05:30"
            eventDisplayDate="April 17, 2026"
            eventTime="03:30 PM IST"
            eventDuration="60 Minutes"
            eventMode="Live · Online"
            formTitle=""
            formNote=""
            formPriceRow=""
            formCtaText="Reserve Your Seat"
            paymentAmount={0}
            heroBgGridImg="/ai-masterclass/session-background-image.png"
            paymentOrderName="Prompt-masterclass-webinar"
            paymentOrderDescription="Webinar Registration"
            formBottomText=""
            partnersData={[
                { img: "/ai-masterclass/salesforce.png", name: "Salesforce" },
                { img: "/ai-masterclass/adobe.png", name: "Adobe" },
                { img: "/ai-masterclass/microsoft.png", name: "Microsoft" },
                { img: "/ai-masterclass/aws-logo.png", name: "AWS" },
            ]}
            learnSectionTitle1="WHAT YOU'LL LEARN"
            learnSectionTitle2="One Session. Right Direction"
            learnSectionSub="Cut through the noise and learn what actually works to become a successful solopreneur."
            learnItems={[
                { bold: "What founders do differently", rest: " to build and grow faster" },
                { bold: "Why most ideas fail early,", rest: " and how to validate yours the right way" },
                { bold: "The exact role AI plays", rest: " in turning ideas into real businesses" },
                { bold: "How to research, test, and execute ideas", rest: " faster using AI" },
                { bold: "What makes a startup investable,", rest: " and how founders stand out" },
                { bold: "Start a scalable startup", rest: " with minimal resources" },
                { bold: "How to go from learning AI", rest: " to actually building with it" },
                { bold: "Your roadmap", rest: " to starting and growing as an AI-powered solopreneur" }
            ]}
            bonusSectionTitle1="FREE BONUSES FOR EVERY ATTENDEE"
            bonusSectionTitle2={<>More Than a Webinar.<br /><span style={{ color: "var(--orange)" }}>A Career Advantage. AI-First Resources</span></>}
            bonusSectionSub="Walk away with resources designed to give you a real head start."
            bonusData={[
                { icon: "/ai-masterclass/Resume.svg", title: "AI Tools ebook", desc: "Build, validate, and grow faster using powerful AI tools." },
                { icon: "/ai-masterclass/handbook.svg", title: "Startup Launch Toolkit", desc: "Frameworks & templates to launch your startup solo confidently." }
            ]}
            speakerPortrait="/ai-masterclass/speaker-Ati.jpeg"
            speakerNameAndRoleTitle="Dr. Ati Priye | CEO – VentureNest"
            speakerRoleDescription="Venture Capital & Startup Ecosystem Strategist | Mentor @ Startup India & NITI Aayog"
            speakerBio={
                <>


                    <p style={{ marginTop: '1rem' }}>With <strong>15+ years of experience</strong> across startup incubation, innovation strategy, and venture development, Dr. Ati Priye has worked closely with <strong>100+ founders</strong> and built thriving startup ecosystems from the ground up.</p>
                    <p style={{ marginTop: '1rem' }}>As the CEO of VentureNest, he leads an incubation network supporting <strong>80+ startups</strong> with strong partnerships across VCs, accelerators, and government bodies.</p>
                    <p style={{ marginTop: '1rem' }}>He has evaluated hundreds of startup pitches across IITs, IIMs, and national platforms, giving him a sharp, real-world understanding of what makes startups scalable, fundable, and future-ready.</p>
                    <p style={{ marginTop: '1rem' }}>His current focus lies in combining <strong>AI with venture ecosystems</strong> to improve how startups are built, evaluated, and scaled.</p>
                </>
            }
            whoIsItForTitle1="WHO THIS IS FOR"
            whoIsItForTitle2="Is This Webinar Meant for You?"
            audiencePerfectForTitle="Perfect For People Who:"
            audienceData={[
                { title: "Are focused on building their own AI-powered business" },
                { title: "Have ideas but don’t know how to start or validate them" },
                { title: "Feel stuck between learning and actually building something" },
                { title: "Want to start a business but don’t have a team" },
                { title: "Are students exploring entrepreneurship or side hustles" },
                { title: "Keep planning but struggle to take real action" },
                { title: "Want to use AI to build faster and smarter" },
                { title: "Are curious about startups but lack clear direction" },
                { title: "Are in college and want to start early" },
                { title: "Want to understand how real startups actually work" }
            ]}
            audienceAlsoValuableTitle="Also Valuable For:"
            alsoValuableData={[
                { title: "Working professionals interested in AI, startups, or business building" },
                { title: "Those who want an early edge over others" },
                { title: "Corporate leaders planning to adopt AI across business functions" }
            ]}
            bottomBannerImg="/ai-masterclass/webinar-banner.jpeg"
        />
    )
}
