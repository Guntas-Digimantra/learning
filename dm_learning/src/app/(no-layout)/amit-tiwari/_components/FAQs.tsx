import { MinusCircle } from "lucide-react";

const FAQS = [
  {
    q: "Who is this program for?",
    a: "Freshers, college students, jobseekers, working professionals looking to switch careers, freelancers, and small business owners who want to do their own marketing. No prior experience required - we start from absolute basics in Month 1.",
  },
  {
    q: "Are the live classes recorded?",
    a: "All 72 sessions are live with Amit Tiwari and our co-mentors. Every class is recorded so you can revisit anytime - and you keep lifetime access to the recordings and resources.",
  },
  {
    q: "What is the class schedule?",
    a: "3 sessions per week - Monday, Wednesday and Friday - each 1.5 to 2 hours long. Evening time slots so working professionals can attend.",
  },
  {
    q: "Will I get placement support?",
    a: "Yes. Month 6 includes resume + LinkedIn optimization, JD analysis, mock interviews, and our placement-support network of 100+ partner agencies and brands. We also share active openings in our alumni Slack.",
  },
  {
    q: "Do I need laptop and which tools must I buy?",
    a: "A basic laptop is required. The vast majority of tools we use have free tiers (Canva, GA4, Mailchimp, ChatGPT, etc.). For the live ad campaigns, you'll spend a small ad budget (~₹500) which is part of the hands-on learning.",
  },
  {
    q: "What if I miss a class?",
    a: "Every class is recorded and uploaded within 24 hours. You can ask questions in our private community channel and get answers from mentors and peers.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes - we offer a 7-day no-questions-asked refund policy from the date of your first live class. After that, refunds are pro-rated based on attendance.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-white border border-at-border rounded-2xl p-6 flex flex-col gap-2">
      <div className="flex gap-6 items-start">
        <p className="flex-1 min-w-0 text-at-ink font-medium text-base leading-7 m-0">
          {q}
        </p>
        <span className="shrink-0 mt-0.5 text-at-cta">
          <MinusCircle size={24} />
        </span>
      </div>
      <p className="text-at-muted text-base leading-6 m-0 pr-12">{a}</p>
    </div>
  );
}

export default function FAQs() {
  const col1 = FAQS.slice(0, 4);
  const col2 = FAQS.slice(4);

  return (
    <section className="bg-bg-muted py-10 xl:py-16">
      <div className="container-page flex flex-col gap-6 xl:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-at-cta text-sm font-medium uppercase tracking-wide">
            FAQs
          </span>
          <h2 className="text-at-ink font-semibold text-heading-md xl:text-heading-xl leading-tight m-0">
            Common Questions, Clearly Answered
          </h2>
        </div>

        {/* Two-column FAQ grid */}
        <div className="flex flex-col xl:flex-row gap-5 items-start">
          <div className="flex flex-col gap-5 flex-1 min-w-0">
            {col1.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="flex flex-col gap-5 flex-1 min-w-0">
            {col2.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
