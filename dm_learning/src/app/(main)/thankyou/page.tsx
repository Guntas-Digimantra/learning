"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ThankYouCard from "@/components/thank-you/ThankYouCard";

function ThankYouContent() {
    const params = useSearchParams();
    const isSolo = params.get("ref") === "sp";

    if (isSolo) {
        return (
            <ThankYouCard
                pixelContentName="Solopreneurship Webinar Registration"
                pixelValue={0}
                title="Thank you for registration!"
                messages={[
                    "Your seat is confirmed.",
                    "Get ready to learn from a proven industry expert how to turn your ideas into thriving ventures using AI, even if you’re starting solo.",
                    "Check your email soon for joining details. See you at the webinar!",
                ]}
            />
        );
    }

    return (
        <ThankYouCard
            pixelContentName="Prompt Masterclass Registration"
            pixelValue={0}
            title="Thank you for registering!"
            messages={[
                "Your seat is confirmed.",
                "Get ready to master 100 AI prompts in 60 minutes and boost your skills instantly.",
                "Check your email soon for joining details. See you at the webinar!",
            ]}
        />
    );
}

export default function ThankYouPage() {
    return (
        <Suspense>
            <ThankYouContent />
        </Suspense>
    );
}
