import Script from "next/script";
import Link from "@/components/ui/link";
import Image from "next/image";
import "@/app/(main)/ai-masterclass/ai-masterclass.css";

interface ThankYouCardProps {
    pixelContentName: string;
    pixelValue: number;
    title: string;
    messages: string[];
}

export default function ThankYouCard({ pixelContentName, pixelValue, title, messages }: ThankYouCardProps) {
    return (
        <>
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', '1355450696343267');
                fbq('track', 'PageView');
                fbq('track', 'Lead', {
                    content_name: '${pixelContentName}',
                    value: ${pixelValue},
                    currency: 'INR'
                });
                `}
            </Script>

            <div className="thank-you-container">
                <div className="card">
                    <div className="brand-bar">
                        <div>
                            <Image src="/ai-masterclass/logo.webp" alt="DMLearning" width={120} height={40} />
                        </div>
                        <span className="brand-dot"></span>
                    </div>

                    <div className="success-state">
                        <div className="success-icon">🎉</div>
                        <div className="success-title">{title}</div>
                        {messages.map((msg, i) => (
                            <p key={i} className="success-msg" style={{ fontSize: "15px", color: "var(--navy)", fontWeight: 700 }}>
                                {msg}
                            </p>
                        ))}
                        <Link href="/" className="skip-link" style={{ display: "inline-block", marginTop: "20px", fontWeight: 600 }}>
                            Return to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
