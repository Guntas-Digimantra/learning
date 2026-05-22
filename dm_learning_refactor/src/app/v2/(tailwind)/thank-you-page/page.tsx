import ThankYouCard from "@/components/thank-you/ThankYouCard";

export const metadata = {
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
    return (
        <ThankYouCard
            pixelContentName="AI Webinar Registration"
            pixelValue={1}
            title="Thank you for registration!"
            messages={[
                "Your seat has been successfully confirmed.",
                "Get ready to discover insights that can help you stand out and move closer to your career goals.",
                "Keep an eye on your email for updates and the joining details. See you soon! 🚀",
            ]}
        />
    );
}
