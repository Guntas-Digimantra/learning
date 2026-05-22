"use client";
import MasterclassLayout from "../masterclass-layout/MasterclassLayout";

export default function PromptMasterclass() {
    return (
        <MasterclassLayout
           webinarType="PromptMasterClass"
            heroEyebrow="Live Webinar · AI Skills Masterclass · From Zero to Prompt Pro"
            heroHeadline="Master 100 AI Prompts in 60 Minutes"

            heroSecondaryHeadline={
                <h2 style={{ fontSize: '1.5rem', fontWeight: '500', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', display: 'block' }}>Are you still using AI at only 10% of its power?</h2>
            }
            heroSubheadline="Learn 100 powerful AI prompts that save hours, boost your output, and make you the most AI-ready person in the room, whether you're a student, fresher, or working professional."
            eventDateRaw="2026-04-09T18:00:00+05:30"
            eventStartDateRaw="2026-03-30T00:00:00+05:30"
            eventDisplayDate="April 09, 2026 (Thursday)"
            eventTime="06:00 PM IST"
            eventDuration="60 Minutes"
            eventMode="Live · Online"
            formTitle="Claim Your Free Spot Now"
            formNote="If you're serious about mastering AI, this is where it starts."
            formClosed={false}
            formPriceRow={<div className="price-row">
                <div className="p-main"><span className="old-price">₹49</span>&nbsp;FREE</div>
            </div>}
            formCtaText="Save Your Spot"
            paymentAmount={0}
            heroBgGridImg="/ai-masterclass/session-background.png"
            paymentOrderName="Prompt-masterclass-webinar"
            paymentOrderDescription="Webinar Registration"
            formBottomText=""
            partnersData={[
                { img: "/ai-masterclass/salesforce.png", name: "Salesforce" },
                { img: "/ai-masterclass/adobe.png", name: "Adobe" },
                { img: "/ai-masterclass/microsoft.png", name: "Microsoft" },
                { img: "/ai-masterclass/aws.png", name: "AWS" },
            ]}
            learnSectionTitle1="WHAT YOU'LL LEARN"
            learnSectionTitle2="60 Minutes. 100 Prompts. Infinite Possibilities."
            learnSectionSub="No boring theory, no complicated jargon. Just 100 AI prompts that actually make your study and work life easier. Start using AI like a pro immediately."
            learnItems={[
                { bold: "The 10 prompt types", rest: " that cover 90% of real-world AI use cases" },
                { bold: "Why most AI outputs disappoint ", rest: "and the one fix that changes everything" },
                { bold: "The CRAFT Framework", rest: " to write prompts that get results every single time" },
                { bold: "100 ready-to-use prompts", rest: " spanning text, image, video, PPT, app mockups, etc." },
                { bold: "How to turn AI tools and LLMs", rest: " into a personal productivity engine" },
                { bold: "Prompt chaining techniques", rest: " that make AI do complex multi-step tasks" },
                { bold: "Your personal", rest: " AI toolkit, customised for your role and goals" }
            ]}
            bonusSectionTitle1="FREE BONUSES FOR EVERY ATTENDEE"
            bonusSectionTitle2={<>More Than a Webinar.<br /><span style={{ color: "var(--orange)" }}>A Permanent Upgrade. Exclusive Prompt Resources.</span></>}
            bonusSectionSub="Leave with real-world AI assets that put you miles ahead of the crowd."
            bonusData={[
                { icon: "/ai-masterclass/Resume.svg", title: "The 100 Prompt Cheatsheet", desc: "Make AI do exactly what you want with 100 AI prompts." },
                { icon: "/ai-masterclass/handbook.svg", title: "The AI Tools Master List", desc: "Know the right AI tools worth using for the best output." }
            ]}
            speakerPortrait="/ai-masterclass/speaker_akshay.jpeg"
            speakerNameAndRoleTitle="Akshay Prabhakar"
            speakerRoleDescription="Lead Software Engineer"
            speakerBio={
                <>
                    <p>A decade-seasoned software professional, Akshay leads backend development teams building robust, scalable systems and has spent the last few years embedding AI-powered workflows directly into real production environments.</p>
                    <p style={{ marginTop: '1rem' }}>With deep hands-on experience across full-stack projects and a sharp eye for what actually works in the field, he brings a practitioner&apos;s honesty to everything he teaches. No theory for theory&apos;s sake, just what actually moves the needle.</p>
                     <p style={{ marginTop: '1rem' }}>Beyond his technical expertise, Akshay focuses on building systems that remain stable under pressure while staying flexible enough for future updates. He excels at simplifying complex engineering concepts into clear, actionable insights that show exactly how AI can solve real-world problems.</p>
                </>
            }
            whoIsItForTitle1="Is This Session Made for You?"
            whoIsItForTitle2="If even one of these sounds like you, you need to be here."
            audiencePerfectForTitle="Perfect For People Who:"
            audienceData={[
                { title: "Want to use AI tools beyond the basics and actually get results" },
                { title: "Are a developer, student, or professional tired of slow, repetitive work" },
                { title: "Have tried ChatGPT/Claude but feel like they're not getting its full potential" },
                { title: "Want to write better prompts without spending weeks figuring it out" },
                { title: "Are building projects, writing content, or coding, and want AI to do the heavy lifting" },
                { title: "Want to stand out at work, college, or in interviews with real AI skills" },
                { title: "Are curious about AI but don't know where to start, or what to learn first" },
            ]}
            audienceAlsoValuableTitle="Also Great For:"
            alsoValuableData={[
                { title: "Freelancers who want to deliver faster and charge more" },
                { title: "Final-year students prepping for placements who want an AI edge" },
                { title: "Anyone who wants to 10× their output without working longer hours" },
            ]}
            bottomBannerImg="/ai-masterclass/Banner.png"
        />
    )
}
